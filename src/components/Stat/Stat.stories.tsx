import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stat } from './Stat'

const meta = {
  title: 'Components/Stat',
  component: Stat,
  parameters: {
    layout: 'centered',
  },
  args: {
    helper: '+12% from last week',
    label: 'Active users',
    style: { width: 240 },
    value: '12,480',
  },
} satisfies Meta<typeof Stat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
