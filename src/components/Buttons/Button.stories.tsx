// src/stories/Button.stories.tsx
import React from 'react';
import Button from './Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default {
  title: 'Core/Button', // This is the category and name of the story in the Storybook UI
  component: Button,
  tags: ['autodocs'],
};

// Template for creating the story
const Template = (args) => <Button {...args}>Click Me</Button>;

// The Primary story
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'giant',
  LeftIcon: ArrowLeft,
  RightIcon: ArrowRight,
  disabled: false
};
