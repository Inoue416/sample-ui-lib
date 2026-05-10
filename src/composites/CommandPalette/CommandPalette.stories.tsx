import type { Meta, StoryObj } from '@storybook/react-vite'
import { CommandPalette } from './CommandPalette'

const meta = {
  title: 'Composites/CommandPalette',
  component: CommandPalette,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CommandPalette>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  render: () => (
    <CommandPalette open title='Command palette'>
      <button type='button'>Open settings</button>
      <button type='button'>Create item</button>
    </CommandPalette>
  ),
}
