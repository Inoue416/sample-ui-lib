import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchCombobox } from './SearchCombobox'

const meta = {
  title: 'Composites/SearchCombobox',
  component: SearchCombobox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SearchCombobox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ width: '24rem' }}>
      <SearchCombobox inputProps={{ placeholder: 'Search components' }} />
    </div>
  ),
}
