import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['info', 'success', 'danger'],
    },
  },
  args: {
    children: 'Alert message',
    variant: 'info',
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {}

export const Success: Story = {
  args: {
    children: 'Changes were saved.',
    variant: 'success',
  },
}

export const Danger: Story = {
  args: {
    children: 'Something needs attention.',
    variant: 'danger',
  },
}
