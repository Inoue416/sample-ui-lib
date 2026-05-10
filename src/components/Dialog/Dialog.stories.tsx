import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Dialog } from './Dialog'

const meta = {
  title: 'Components/Dialog',
  component: Dialog.Root,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dialog.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger render={<Button>Open dialog</Button>} />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup>
          <Dialog.Title>Dialog title</Dialog.Title>
          <Dialog.Description>
            Dialog behavior is provided by Base UI and styling is provided by
            the component layer.
          </Dialog.Description>
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'flex-end',
              marginTop: '1.5rem',
            }}
          >
            <Dialog.Close render={<Button variant='outline'>Cancel</Button>} />
            <Dialog.Close render={<Button>Confirm</Button>} />
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  ),
}
