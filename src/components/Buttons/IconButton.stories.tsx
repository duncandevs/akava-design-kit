// src/stories/Button.stories.tsx
import React from 'react';
import IconButton from './IconButton';
import { ArrowUp } from 'lucide-react';

export default {
  title: 'Components/IconButton', // This is the category and name of the story in the Storybook UI
  component: IconButton,
  tags: ['autodocs'],
};

// Template for creating the story
const Template = (args) => <IconButton {...args} />;

// The Primary story
export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me', // Default label text for the button,
  variant: 'primary',
  size: 'giant',
  Icon: ArrowUp,
  disabled: false
};
