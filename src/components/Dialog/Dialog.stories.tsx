import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { DialogDemo } from '.';

export default {
  title: 'Core/Dialog',
  component: DialogDemo,
} as Meta;

const Template: StoryFn = (args) => <DialogDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Define default args for your DialogDemo here if any
};