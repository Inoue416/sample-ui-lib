import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion } from './Accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion.Root,
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <Accordion.Root defaultValue={['shipping']} style={{ width: 480 }}>
      <Accordion.Item value='shipping'>
        <Accordion.Header>
          <Accordion.Trigger>Shipping</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>Orders ship within two business days.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value='returns'>
        <Accordion.Header>
          <Accordion.Trigger>Returns</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>Returns are accepted within 30 days.</Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  ),
} satisfies Meta<typeof Accordion.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
