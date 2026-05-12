import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { DropdownMenu } from './DropdownMenu'

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu.Popup,
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger render={<Button variant='outline' />}>
        Actions
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Positioner>
          <DropdownMenu.Popup>
            <DropdownMenu.Item>Edit</DropdownMenu.Item>
            <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
            <DropdownMenu.Item>Archive</DropdownMenu.Item>
          </DropdownMenu.Popup>
        </DropdownMenu.Positioner>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
} satisfies Meta<typeof DropdownMenu.Popup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
