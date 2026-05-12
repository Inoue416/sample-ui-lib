import type { Meta, StoryObj } from '@storybook/react-vite'
import { Slider } from './Slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  args: {
    defaultValue: 40,
    max: 100,
    min: 0,
    style: { width: 320 },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
