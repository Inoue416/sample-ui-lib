import type { Meta, StoryObj } from '@storybook/react-vite'
import { DatePicker } from './DatePicker'

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  args: {
    defaultValue: '2026-05-13',
    style: { width: 220 },
  },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
