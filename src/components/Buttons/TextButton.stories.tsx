// src/stories/Button.stories.tsx
import React from 'react';
import TextButton from './TextButton';

export default {
  title: 'Core/TextButton', // This is the category and name of the story in the Storybook UI
  component: TextButton,
  tags: ['autodocs'],
};

// Template for creating the story
const Template = (args) => <TextButton {...args} />;

// The Primary story
export const Primary = Template.bind({});
Primary.args = {
    children: 'Click Me',
    size: 'tiny',
    onClick: () => alert('clicked!')
};