import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, Separator } from '../../components'
import { Toolbar } from './Toolbar'

const meta = {
  title: 'Composites/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <Toolbar>
      <Button size='sm' variant='ghost'>
        Bold
      </Button>
      <Button size='sm' variant='ghost'>
        Italic
      </Button>
      <Separator orientation='vertical' />
      <Button size='sm' variant='ghost'>
        Publish
      </Button>
    </Toolbar>
  ),
} satisfies Meta<typeof Toolbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
