// src/stories/Input.stories.tsx
import React from 'react';
import Input from '.';
import { StarIcon } from 'lucide-react';

export default {
  title: 'Core/Input', // This is the category and name of the story in the Storybook UI
  component: Input,
  tags: ['autodocs'],
};

// Template for creating the story
const Template = (args) => <Input {...args} />;

// The Primary story
export const Primary = Template.bind({});
Primary.args = {
  type: "text",
  Icon: StarIcon,
  size: 'large',
  variant: "",
  label: 'First Name',
  helperText: 'Enter your first name',
  placeholder: 'First Name'
};
