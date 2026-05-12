import type { Meta, StoryObj } from '@storybook/react-vite'
import { NumberInput } from './NumberInput'

const meta = {
  title: 'Components/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
  },
  args: {
    defaultValue: 12,
    min: 0,
    style: { width: 180 },
  },
} satisfies Meta<typeof NumberInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
