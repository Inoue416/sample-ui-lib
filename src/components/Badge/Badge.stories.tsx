import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['neutral', 'primary', 'success', 'danger'],
    },
  },
  args: {
    children: 'Badge',
    variant: 'neutral',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Badge>Neutral</Badge>
      <Badge variant='primary'>Primary</Badge>
      <Badge variant='success'>Success</Badge>
      <Badge variant='danger'>Danger</Badge>
    </div>
  ),
}
