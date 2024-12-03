// src/stories/Button.stories.tsx
import React from 'react';
import Alert from '.';
import { StarIcon } from 'lucide-react';

export default {
  title: 'Components/Alert', // This is the category and name of the story in the Storybook UI
  component: Alert,
  tags: ['autodocs'],
};

// Template for creating the story
const Template = (args) => <Alert {...args} />;

// The Primary story
export const Primary = Template.bind({});
Primary.args = {
  Icon: StarIcon,
  variant: 'primary',
  onConfirm: () => alert('confirmed!'),
  onCancel: () => alert('canceled')
};