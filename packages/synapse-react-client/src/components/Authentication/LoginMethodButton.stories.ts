import { Meta, StoryObj } from '@storybook/react'

import { LoginMethods } from './LoginMethod'
import LoginMethodButton from './LoginMethodButton'
import { IconStrings } from '../IconSvg/IconSvg'

const meta = {
  title: 'Authentication/LoginMethodButton',
  component: LoginMethodButton,
  argTypes: {
    loginMethod: {
      options: LoginMethods,
      control: 'radio',
    },
    iconName: {
      options: IconStrings,
      control: 'select',
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    loginMethod: 'GOOGLE',
    iconName: 'google24',
  },
}
