// src/stories/Button.stories.tsx
import React from 'react';
import Badge from './Badge';
import { InfoIcon } from 'lucide-react'

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'badge',
  variant: 'default',
  Icon: InfoIcon,
};
