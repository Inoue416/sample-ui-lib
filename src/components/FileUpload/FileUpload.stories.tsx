import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileUpload } from './FileUpload'

const meta = {
  title: 'Components/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
  args: {
    style: { width: 360 },
  },
} satisfies Meta<typeof FileUpload>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
