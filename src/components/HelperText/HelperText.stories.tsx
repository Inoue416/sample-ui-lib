import type { Meta, StoryObj } from '@storybook/react-vite'
import { HelperText } from './HelperText'

const meta = {
  title: 'Components/HelperText',
  component: HelperText,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'We will never share this publicly.',
  },
} satisfies Meta<typeof HelperText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
