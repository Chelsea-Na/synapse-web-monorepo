import {
  ACCESS_TYPE,
  AccessControlList,
  ResourceAccess,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { rest, server } from '../../mocks/msw/server'
import { mockTeamData, mockTeamData2 } from '../../mocks/team/mockTeam'
import {
  MOCK_USER_ID_2,
  MOCK_USER_NAME,
  MOCK_USER_NAME_2,
} from '../../mocks/user/mock_user_profile'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  EMPTY_RESOURCE_ACCESS_LIST_TEXT,
  REVIEWER_ALREADY_ADDED_ERROR_MESSAGE,
  AccessRequirementAclEditor,
  AccessRequirementAclEditorProps,
} from './AccessRequirementAclEditor'
import {
  MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID,
  MOCK_MANAGED_ACCESS_REQUIREMENT_ACL,
} from '../../mocks/mockAccessRequirementAcls'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'
import { REMOVE_BUTTON_LABEL } from './ResourceAccessItem'
import SynapseClient from '../../synapse-client'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'

const onSaveComplete = jest.fn()
const mockDeleteAccessRequirementAcl = jest.spyOn(
  SynapseClient,
  'deleteAccessRequirementAcl',
)
const mockCreateAccessRequirementAcl = jest.spyOn(
  SynapseClient,
  'createAccessRequirementAcl',
)
const mockUpdateAccessRequirementAcl = jest.spyOn(
  SynapseClient,
  'updateAccessRequirementAcl',
)

const defaultAccessRequirementId = MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
const defaultResourceAccessItemsCount =
  MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.resourceAccess.length
const defaultResourceAccessList =
  MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.resourceAccess

const defaultProps: AccessRequirementAclEditorProps = {
  accessRequirementId: defaultAccessRequirementId,
  isSaveClicked: false,
  onSaveComplete,
}

function renderComponent(props: AccessRequirementAclEditorProps) {
  return render(<AccessRequirementAclEditor {...props} />, {
    wrapper: createWrapper(),
  })
}

async function setUp(
  props: AccessRequirementAclEditorProps = defaultProps,
  expectedResourceAccessItems: number = defaultResourceAccessItemsCount,
) {
  const user = userEvent.setup()
  const component = renderComponent(props)

  // wait for UserOrTeamBadge(s) to finish loading
  await waitFor(() => {
    expect(screen.queryAllByRole('link')).toHaveLength(
      expectedResourceAccessItems,
    )
  })

  const itemRows = screen.queryAllByRole('row')
  expect(itemRows).toHaveLength(expectedResourceAccessItems)

  return { component, itemRows, user }
}

const confirmItem = (
  row: HTMLElement,
  principalName: string,
  accessTypeLabel: string,
) => {
  expect(within(row).getByRole('link')).toHaveTextContent(principalName)
  expect(within(row).getByRole('combobox')).toHaveTextContent(accessTypeLabel)
}

const removeItem = async (
  row: HTMLElement,
  user: ReturnType<(typeof userEvent)['setup']>,
) => {
  const removeButton = within(row).getByRole('button', {
    name: REMOVE_BUTTON_LABEL,
  })
  await user.click(removeButton)
  expect(removeButton).not.toBeInTheDocument()
  expect(row).not.toBeInTheDocument()
}

const updatePermissionLevel = async (
  row: HTMLElement,
  user: ReturnType<(typeof userEvent)['setup']>,
  updatedPermissionLevelLabel: string,
) => {
  const menu = within(row).getByRole('combobox')
  await user.click(menu)

  const option = screen.getByRole('option', {
    name: updatedPermissionLevelLabel,
  })
  await user.click(option)

  await waitFor(() => {
    expect(option).not.toBeInTheDocument()
  })
}

const selectReviewerUser = async (
  user: ReturnType<(typeof userEvent)['setup']>,
  userName: string,
) => {
  const userInput = await screen.findByRole('combobox', {
    name: 'Select a reviewer',
  })
  await user.type(userInput, userName)

  const option = await screen.findByText(new RegExp(`\\(@${userName}\\)`))
  await user.click(option)

  await waitFor(() => expect(option).not.toBeInTheDocument())
  const rows = screen.getAllByRole('row')
  confirmItem(rows[rows.length - 1], userName, 'Can Review')
}

describe('ResourceAccessEditor', () => {
  beforeEach(() => jest.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  describe('AR with existing ACL', () => {
    test('displays resource access list for an existing acl', async () => {
      const { itemRows } = await setUp()

      confirmItem(itemRows[0], mockTeamData.name, 'Can Review')
      confirmItem(itemRows[1], mockTeamData2.name, 'Exempt Eligible')
      confirmItem(
        itemRows[2],
        `@${MOCK_USER_NAME}`,
        'Can Review & Exempt Eligible',
      )
      expect(onSaveComplete).not.toHaveBeenCalled()
    })

    test('updates permission level for principal in an existing acl', async () => {
      const updatedPermissionLevelLabel = 'Can Review & Exempt Eligible'
      const updatedResourceAccessList: ResourceAccess[] = [
        { ...defaultResourceAccessList[0] },
        {
          ...defaultResourceAccessList[1],
          accessType: [
            ACCESS_TYPE.EXEMPTION_ELIGIBLE,
            ACCESS_TYPE.REVIEW_SUBMISSIONS,
          ],
        },
        { ...defaultResourceAccessList[2] },
      ]
      const updatedAcl: AccessControlList = {
        id: defaultAccessRequirementId,
        resourceAccess: updatedResourceAccessList,
      }

      const { itemRows, user, component } = await setUp()
      const row = itemRows[1]
      confirmItem(row, mockTeamData2.name, 'Exempt Eligible')

      await updatePermissionLevel(row, user, updatedPermissionLevelLabel)
      confirmItem(row, mockTeamData2.name, updatedPermissionLevelLabel)
      expect(onSaveComplete).not.toHaveBeenCalled()

      // simulate user clicking save button: isSaveClicked -> true
      component.rerender(
        <AccessRequirementAclEditor {...defaultProps} isSaveClicked={true} />,
      )

      await waitFor(() => {
        expect(onSaveComplete).toHaveBeenCalledTimes(1)
        expect(mockUpdateAccessRequirementAcl).toHaveBeenCalledWith(
          MOCK_ACCESS_TOKEN,
          updatedAcl,
        )
      })
    })

    test('updates an existing acl to add a principal', async () => {
      const newResourceAccess: ResourceAccess = {
        principalId: MOCK_USER_ID_2,
        accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
      }
      const updatedAcl: AccessControlList = {
        id: defaultAccessRequirementId,
        resourceAccess: [...defaultResourceAccessList, newResourceAccess],
      }

      const { user, component } = await setUp()
      expect(onSaveComplete).not.toHaveBeenCalled()

      await selectReviewerUser(user, MOCK_USER_NAME_2)

      // simulate user clicking save button: isSaveClicked -> true
      component.rerender(
        <AccessRequirementAclEditor {...defaultProps} isSaveClicked={true} />,
      )

      await waitFor(() => {
        expect(onSaveComplete).toHaveBeenCalledTimes(1)
        expect(mockUpdateAccessRequirementAcl).toHaveBeenCalledWith(
          MOCK_ACCESS_TOKEN,
          updatedAcl,
        )
      })
    })

    test('updates an existing acl to remove a principal', async () => {
      const updatedResourceAccessList = defaultResourceAccessList.slice(1, 3)
      const updatedAcl: AccessControlList = {
        id: defaultAccessRequirementId,
        resourceAccess: updatedResourceAccessList,
      }

      const { itemRows, user, component } = await setUp()

      await removeItem(itemRows[0], user)
      expect(onSaveComplete).not.toHaveBeenCalled()

      // simulate user clicking save button: isSaveClicked -> true
      component.rerender(
        <AccessRequirementAclEditor {...defaultProps} isSaveClicked={true} />,
      )

      await waitFor(() => {
        expect(onSaveComplete).toHaveBeenCalledTimes(1)
        expect(mockUpdateAccessRequirementAcl).toHaveBeenCalledWith(
          MOCK_ACCESS_TOKEN,
          updatedAcl,
        )
      })
    })

    test('deletes existing acl when last principal is removed', async () => {
      const accessRequirementId = '1234'
      const aclWithOneResourceAccessItem: AccessControlList = {
        id: accessRequirementId,
        resourceAccess: defaultResourceAccessList.slice(0, 1),
      }
      server.use(
        rest.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}/repo/v1/accessRequirement/${accessRequirementId}/acl`,
          async (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(aclWithOneResourceAccessItem))
          },
        ),
      )

      const props: AccessRequirementAclEditorProps = {
        accessRequirementId,
        isSaveClicked: false,
        onSaveComplete,
      }

      const { user, component } = await setUp({ ...props }, 1)

      await removeItem(screen.getByRole('row'), user)
      expect(onSaveComplete).not.toHaveBeenCalled()
      expect(screen.getByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)).toBeVisible()

      // simulate user clicking save button: isSaveClicked -> true
      component.rerender(
        <AccessRequirementAclEditor {...props} isSaveClicked={true} />,
      )

      await waitFor(() => {
        expect(onSaveComplete).toHaveBeenCalledTimes(1)
        expect(mockDeleteAccessRequirementAcl).toHaveBeenCalledWith(
          MOCK_ACCESS_TOKEN,
          accessRequirementId,
        )
      })
    })

    test('does not update an unchanged ACL', async () => {
      const { user, component, itemRows } = await setUp(
        { ...defaultProps, isSaveClicked: false },
        defaultResourceAccessItemsCount,
      )

      // remove last principal
      const index = itemRows.length - 1
      await removeItem(itemRows[index], user)

      // add back principal with same permissions
      await selectReviewerUser(user, MOCK_USER_NAME)

      const row = screen.getAllByRole('row')[index]
      const permissionLevelLabel = 'Can Review & Exempt Eligible'
      await updatePermissionLevel(row, user, permissionLevelLabel)

      confirmItem(row, MOCK_USER_NAME, permissionLevelLabel)
      expect(onSaveComplete).not.toHaveBeenCalled()

      // simulate user clicking save button: isSaveClicked -> true
      component.rerender(
        <AccessRequirementAclEditor {...defaultProps} isSaveClicked={true} />,
      )

      // noop
      await waitFor(() => {
        expect(onSaveComplete).toHaveBeenCalledTimes(1)
        expect(mockCreateAccessRequirementAcl).not.toHaveBeenCalled()
        expect(mockUpdateAccessRequirementAcl).not.toHaveBeenCalled()
        expect(mockDeleteAccessRequirementAcl).not.toHaveBeenCalled()
      })
    })
  })

  describe('AR without existing ACL', () => {
    const noExistingAclProps: AccessRequirementAclEditorProps = {
      accessRequirementId: MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID,
      isSaveClicked: false,
      onSaveComplete,
    }

    test('displays empty resource access list when there is no existing acl', async () => {
      await setUp(noExistingAclProps, 0)

      await screen.findByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)
      expect(onSaveComplete).not.toHaveBeenCalled()
    })

    test('creates new acl when a principal is added to AR without existing ACL', async () => {
      const newResourceAccess: ResourceAccess = {
        principalId: MOCK_USER_ID_2,
        accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
      }
      const newAcl: AccessControlList = {
        id: MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID,
        resourceAccess: [newResourceAccess],
      }

      const { user, component } = await setUp(noExistingAclProps, 0)

      await screen.findByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)
      await selectReviewerUser(user, MOCK_USER_NAME_2)
      expect(onSaveComplete).not.toHaveBeenCalled()

      // simulate user clicking save button: isSaveClicked -> true
      component.rerender(
        <AccessRequirementAclEditor
          {...noExistingAclProps}
          isSaveClicked={true}
        />,
      )

      await waitFor(() => {
        expect(onSaveComplete).toHaveBeenCalledTimes(1)
        expect(mockCreateAccessRequirementAcl).toHaveBeenCalledWith(
          MOCK_ACCESS_TOKEN,
          newAcl,
        )
      })
    })

    test('does not create a new acl when principal is added and removed before clicking save', async () => {
      const { user, component } = await setUp(noExistingAclProps, 0)

      await screen.findByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)
      await selectReviewerUser(user, MOCK_USER_NAME_2)

      await removeItem(screen.getByRole('row'), user)

      expect(screen.getByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)).toBeVisible()
      expect(onSaveComplete).not.toHaveBeenCalled()

      // simulate user clicking save button: isSaveClicked -> true
      component.rerender(
        <AccessRequirementAclEditor
          {...noExistingAclProps}
          isSaveClicked={true}
        />,
      )

      // noop
      await waitFor(() => {
        expect(onSaveComplete).toHaveBeenCalledTimes(1)
        expect(mockCreateAccessRequirementAcl).not.toHaveBeenCalled()
        expect(mockUpdateAccessRequirementAcl).not.toHaveBeenCalled()
        expect(mockDeleteAccessRequirementAcl).not.toHaveBeenCalled()
      })
    })
  })

  test('displays an error when attempting to add an existing principalId', async () => {
    const { user } = await setUp()

    await selectReviewerUser(user, MOCK_USER_NAME)

    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent(REVIEWER_ALREADY_ADDED_ERROR_MESSAGE)
  })
})
