import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    invalid: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    invalid: false,
    placeholder: 'Enter value',
    size: 'md',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Invalid: Story = {
  args: {
    invalid: true,
    placeholder: 'Invalid value',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '0.75rem', width: '18rem' }}>
      <Input size='sm' placeholder='Small' />
      <Input size='md' placeholder='Medium' />
      <Input size='lg' placeholder='Large' />
    </div>
  ),
}
