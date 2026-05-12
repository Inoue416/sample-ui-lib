import type { Meta, StoryObj } from '@storybook/react-vite'
import { CheckboxGroup } from './CheckboxGroup'

const meta = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  args: {
    legend: 'Notifications',
    options: [
      { label: 'Product updates', value: 'product' },
      { label: 'Billing alerts', value: 'billing' },
    ],
  },
} satisfies Meta<typeof CheckboxGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
