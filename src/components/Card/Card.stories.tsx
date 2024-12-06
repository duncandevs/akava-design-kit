import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CardDemo, CardProps } from './index'; // Adjust the import path according to your project structure

export default {
  title: 'Core/Card',
  component: CardDemo,
  // Here you can define argTypes to control the arguments passed to the component
} as Meta;

const Template: StoryFn<CardProps> = (args) => <CardDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://images.unsplash.com/photo-1490975568044-d05151acef65?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Title',
  description: 'Keep your messages short, but make sure they cover everything you need to say.',
  vertical: false,
};

// You can create more stories to showcase different variations or states of the Card component