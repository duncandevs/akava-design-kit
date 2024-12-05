import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { DropdownMenuDemo } from '.';

export default {
  title: 'Core/DropdownMenu',
  component: DropdownMenuDemo,
} as Meta;

const Template: StoryFn = (args) => <DropdownMenuDemo {...args} />;

export const Default = Template.bind({});
