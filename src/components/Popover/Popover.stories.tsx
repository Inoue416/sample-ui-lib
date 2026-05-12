import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Popover } from './Popover'

const meta = {
  title: 'Components/Popover',
  component: Popover.Popup,
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <Popover.Root>
      <Popover.Trigger render={<Button variant='outline' />}>
        Open popover
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner>
          <Popover.Popup>
            <Popover.Title>Quick note</Popover.Title>
            <Popover.Description>
              Use this surface for compact secondary actions.
            </Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  ),
} satisfies Meta<typeof Popover.Popup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
