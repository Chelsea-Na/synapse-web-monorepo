import { Meta, StoryObj } from '@storybook/react'
import { SynapseNavDrawer } from './SynapseNavDrawer'

const meta = {
  title: 'Synapse/SynapseNavDrawer',
  component: SynapseNavDrawer,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    initIsOpen: false,
  },
}
