import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ContextMenuDemo } from '.';

export default {
  title: 'Core/ContextMenu',
  component: ContextMenuDemo,
} as Meta;

const Template: StoryFn = (args) => <ContextMenuDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  // You can set props here if your component accepts any
};