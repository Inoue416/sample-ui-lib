import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, Switch } from '../../components'
import { SettingsSection } from './SettingsSection'

const meta = {
  title: 'Composites/SettingsSection',
  component: SettingsSection,
  parameters: {
    layout: 'centered',
  },
  args: {
    actions: <Button variant='outline'>Reset</Button>,
    children: <Switch defaultChecked label='Email digests' />,
    description: 'Control how account notifications are delivered.',
    style: { width: 620 },
    title: 'Notifications',
  },
} satisfies Meta<typeof SettingsSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
