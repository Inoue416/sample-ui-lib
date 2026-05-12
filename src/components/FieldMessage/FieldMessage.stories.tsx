import type { Meta, StoryObj } from '@storybook/react-vite'
import { FieldMessage } from './FieldMessage'

const meta = {
  title: 'Components/FieldMessage',
  component: FieldMessage,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'This field is required.',
  },
} satisfies Meta<typeof FieldMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Danger: Story = {
  args: {
    tone: 'danger',
  },
}
