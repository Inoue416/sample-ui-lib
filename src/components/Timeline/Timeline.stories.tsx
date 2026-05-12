import type { Meta, StoryObj } from '@storybook/react-vite'
import { Timeline } from './Timeline'

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
  args: {
    items: [
      { content: 'Draft saved by Yuuya.', title: '10:15' },
      { content: 'Review requested.', title: '11:40' },
      { content: 'Published to production.', title: '14:20' },
    ],
    style: { width: 360 },
  },
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
