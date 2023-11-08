import { Meta, StoryObj } from '@storybook/react'
import { EntityModal } from './EntityModal'

const meta = {
  title: 'Synapse/EntityModal',
  component: EntityModal,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Project: Story = {
  args: {
    show: true,
    initialTab: 'ANNOTATIONS',
    entityId: 'syn23567475',
  },
}
