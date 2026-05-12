import type { Meta, StoryObj } from '@storybook/react-vite'
import { DescriptionList } from './DescriptionList'

const meta = {
  title: 'Components/DescriptionList',
  component: DescriptionList,
  parameters: {
    layout: 'centered',
  },
  args: {
    items: [
      { label: 'Owner', value: 'Yuuya Inoue' },
      { label: 'Status', value: 'Published' },
      { label: 'Updated', value: 'May 13, 2026' },
    ],
    style: { width: 520 },
  },
} satisfies Meta<typeof DescriptionList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
