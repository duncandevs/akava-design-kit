// src/stories/Button.stories.tsx
import React from 'react';
import IconBadge from './IconBadge';
import { StarIcon } from 'lucide-react';

export default {
  title: 'Components/IconBadge', 
  tags: ['autodocs'],
};

const Template = (args) => <IconBadge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'info',
  Icon: StarIcon,
  onClick: () => alert('handle badge click'),
  size: 'medium'
};
