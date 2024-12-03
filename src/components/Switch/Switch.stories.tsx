import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './index'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    label: 'Airplane Mode',
    defaultChecked: false,
    disabled: false,
    onCheckedChange: (checked) => console.log('Switch toggled:', checked),
    className: '', // Add any additional class names if needed
    alignLabelLeft: false,
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {},
}
