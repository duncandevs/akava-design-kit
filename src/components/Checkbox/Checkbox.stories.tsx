import React from 'react';
import { Checkbox } from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

// Template for creating stories
const Template = (args) => <Checkbox {...args} />;

// The Primary story
export const Primary = Template.bind({});
Primary.args = {
    label: "Placeholder",
    checked: false,
    disabled: false,
    alignLeftLabel: false,
    onCheckedChange: (checked) => alert(`Checkbox ${checked ? 'checked' : 'unchecked'}!`),
};