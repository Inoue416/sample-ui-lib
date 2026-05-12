import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '../../components'
import { FormField } from '../FormField'
import { ModalForm } from './ModalForm'

const meta = {
  title: 'Composites/ModalForm',
  component: ModalForm,
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <ModalForm
      description='Create a reusable workspace preset.'
      title='New preset'
      trigger='Create preset'
    >
      <FormField label='Name'>
        <Input placeholder='Operations' />
      </FormField>
    </ModalForm>
  ),
} satisfies Meta<typeof ModalForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
