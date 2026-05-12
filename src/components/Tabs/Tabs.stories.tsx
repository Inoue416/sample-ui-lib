import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from './Tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs.Root,
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <Tabs.Root defaultValue='overview' style={{ width: 440 }}>
      <Tabs.List>
        <Tabs.Tab value='overview'>Overview</Tabs.Tab>
        <Tabs.Tab value='activity'>Activity</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value='overview'>
        Project summary and current health.
      </Tabs.Panel>
      <Tabs.Panel value='activity'>Recent activity appears here.</Tabs.Panel>
    </Tabs.Root>
  ),
} satisfies Meta<typeof Tabs.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
