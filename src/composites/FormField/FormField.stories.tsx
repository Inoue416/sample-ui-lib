import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '../../components'
import { FormField } from './FormField'

const meta = {
  title: 'Composites/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ width: '20rem' }}>
      <FormField helperText='Use your work email.' id='email' label='Email'>
        <Input placeholder='name@example.com' />
      </FormField>
    </div>
  ),
}

export const Error: Story = {
  render: () => (
    <div style={{ width: '20rem' }}>
      <FormField error='Email is required.' id='email-error' label='Email'>
        <Input invalid placeholder='name@example.com' />
      </FormField>
    </div>
  ),
}
