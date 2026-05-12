import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, Input, Select } from '../../components'
import { FilterBar } from './FilterBar'

const meta = {
  title: 'Composites/FilterBar',
  component: FilterBar,
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <FilterBar actions={<Button>Apply</Button>} style={{ width: 720 }}>
      <Input placeholder='Search records' style={{ width: 240 }} />
      <Select.Root defaultValue='all'>
        <Select.Trigger>
          <Select.Value placeholder='Status' />
          <Select.Icon>⌄</Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner>
            <Select.Popup>
              <Select.List>
                <Select.Item value='all'>
                  <Select.ItemText>All</Select.ItemText>
                </Select.Item>
                <Select.Item value='open'>
                  <Select.ItemText>Open</Select.ItemText>
                </Select.Item>
              </Select.List>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
    </FilterBar>
  ),
} satisfies Meta<typeof FilterBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
