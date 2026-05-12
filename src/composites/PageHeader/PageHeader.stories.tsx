import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../../components'
import { PageHeader } from './PageHeader'

const meta = {
  title: 'Composites/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'centered',
  },
  args: {
    actions: <Button>New report</Button>,
    description: 'Monitor the latest publish status and review open work.',
    eyebrow: 'Workspace',
    style: { width: 760 },
    title: 'Content operations',
  },
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
