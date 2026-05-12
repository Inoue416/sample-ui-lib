import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormLabel } from './FormLabel'

const meta = {
  title: 'Components/FormLabel',
  component: FormLabel,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Email address',
  },
} satisfies Meta<typeof FormLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Required: Story = {
  args: {
    required: true,
  },
}
