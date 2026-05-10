import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '../../components'
import { DataTable } from './DataTable'

const meta = {
  title: 'Composites/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ width: '32rem' }}>
      <DataTable
        columns={[
          { header: 'Name', key: 'name' },
          {
            header: 'Status',
            key: 'status',
            render: (row) => <Badge variant='success'>{row.status}</Badge>,
          },
        ]}
        rows={[
          { name: 'Button', status: 'Ready' },
          { name: 'Dialog', status: 'Ready' },
        ]}
      />
    </div>
  ),
}
