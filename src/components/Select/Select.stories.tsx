import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from './Select'

const meta = {
  title: 'Components/Select',
  component: Select.Trigger,
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <Select.Root defaultValue='design'>
      <Select.Trigger>
        <Select.Value placeholder='Choose a team' />
        <Select.Icon>⌄</Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner>
          <Select.Popup>
            <Select.List>
              <Select.Item value='design'>
                <Select.ItemText>Design</Select.ItemText>
              </Select.Item>
              <Select.Item value='engineering'>
                <Select.ItemText>Engineering</Select.ItemText>
              </Select.Item>
              <Select.Item value='product'>
                <Select.ItemText>Product</Select.ItemText>
              </Select.Item>
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  ),
} satisfies Meta<typeof Select.Trigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
