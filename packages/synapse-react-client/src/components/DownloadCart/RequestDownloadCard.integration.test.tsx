import { render, screen } from '@testing-library/react'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../utils'
import { rest, server } from '../../mocks/msw/server'
import { ENTITY_BUNDLE_V2 } from '../../utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'
import {
  REQUEST_DOWNLOAD_TITLE,
  RequestDownloadCard,
  RequestDownloadCardProps,
} from './RequestDownloadCard'
import userEvent from '@testing-library/user-event'
import { EntityBundle } from '@sage-bionetworks/synapse-types'
import mockFileEntity from '../../mocks/entity/mockFileEntity'

const ENTITY_ID = 'syn29218'
const onViewSharingSettingsClicked = jest.fn()
const defaultProps: RequestDownloadCardProps = {
  entityId: ENTITY_ID,
  count: 10,
  onViewSharingSettingsClicked,
}

const setupEntityBundleResponse = (canDownload: boolean) => {
  const mockEntityBundleResult: Partial<EntityBundle> = {
    entity: {
      ...mockFileEntity.entity,
      id: ENTITY_ID,
    },
    permissions: {
      canDownload: canDownload,
      canView: false,
      canEdit: false,
      canMove: false,
      canAddChild: false,
      canCertifiedUserEdit: false,
      canCertifiedUserAddChild: false,
      isCertifiedUser: false,
      canChangePermissions: false,
      canChangeSettings: false,
      canDelete: false,
      canUpload: false,
      canEnableInheritance: false,
      ownerPrincipalId: 0,
      canPublicRead: false,
      canModerate: false,
      isCertificationRequired: false,
      isEntityOpenData: false,
    },
  }
  server.use(
    rest.post(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
        ENTITY_ID,
      )}`,
      async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockEntityBundleResult))
      },
    ),
  )
}
function renderComponent(wrapperProps?: SynapseContextType) {
  render(<RequestDownloadCard {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('RequestDownloadCard tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Show a Request Download Card', async () => {
    setupEntityBundleResponse(false)
    renderComponent()
    await screen.findByText(REQUEST_DOWNLOAD_TITLE)

    const viewSharingSettingsButton = await screen.findByRole('button', {
      name: 'View Sharing Settings',
    })
    await userEvent.click(viewSharingSettingsButton)
    expect(onViewSharingSettingsClicked).toHaveBeenLastCalledWith(ENTITY_ID)
  })

  it('Indicates the action is complete if the user can download the entity', async () => {
    setupEntityBundleResponse(true)
    renderComponent()

    const viewSharingSettingsButton = await screen.findByRole('button', {
      name: 'Complete',
    })
    expect(viewSharingSettingsButton).toBeDisabled()
  })
})
