import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TabsDemo } from '.'; // Adjust the import path according to your project structure

export default {
  title: 'Core/Tabs',
  component: TabsDemo,
} as Meta;

const Template: StoryFn = (args) => <TabsDemo {...args} />;

export const Default = Template.bind({});