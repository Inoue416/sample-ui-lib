import type { Meta, StoryObj } from '@storybook/react-vite'
import { RadioGroup } from './RadioGroup'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  args: {
    defaultValue: 'standard',
    legend: 'Delivery speed',
    options: [
      { label: 'Standard', value: 'standard' },
      { label: 'Express', value: 'express' },
    ],
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
