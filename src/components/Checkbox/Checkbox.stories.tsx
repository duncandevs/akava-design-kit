import React from 'react';
import { Checkbox } from '.';

export default {
  title: 'Core/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

// Template for creating stories
const Template = (args) => <Checkbox {...args} />;

// The Primary story
export const Primary = Template.bind({});
Primary.args = {
    label: "Placeholder",
    disabled: false,
    labelPosition: 'right',
    onCheckedChange: (checked: boolean) => console.log("checked: ", checked),
};