import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import LoaderSpinner from '.';

export default {
  title: 'Core/LoaderSpinner',
  component: LoaderSpinner,
} as Meta;

const Template: StoryFn = (args) => <LoaderSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default args for your spinner here if any
};
