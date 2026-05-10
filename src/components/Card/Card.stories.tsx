import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card style={{ display: 'grid', gap: '1rem', maxWidth: '20rem' }}>
      <div>
        <h3 style={{ margin: 0 }}>Card title</h3>
        <p style={{ color: '#64748b', margin: '0.5rem 0 0' }}>
          Reusable surface for grouped UI.
        </p>
      </div>
      <Button>Action</Button>
    </Card>
  ),
}
