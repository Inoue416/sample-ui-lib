import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { EmptyState } from './EmptyState'

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  args: {
    action: <Button>Create item</Button>,
    description: 'Try adjusting filters or add your first record.',
    style: { width: 480 },
    title: 'No records found',
  },
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
