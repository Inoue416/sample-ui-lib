import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Toast } from './Toast'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  args: {
    action: <Button size='sm'>Undo</Button>,
    description: 'The changes were saved successfully.',
    title: 'Saved',
    tone: 'success',
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
