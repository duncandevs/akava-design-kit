// src/stories/Button.stories.tsx
import React from 'react';
import Button1 from './Button';

export default {
  title: 'Example-Button-1', // This is the category and name of the story in the Storybook UI
  component: Button1,
};

// Template for creating the story
const Template = (args) => <Button1 {...args} />;

// The Primary story
export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me', // Default label text for the button
};
