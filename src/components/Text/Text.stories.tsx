// src/stories/Text.stories.tsx
import React from 'react';
import { Meta } from '@storybook/react';
import Text from '.';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'h1', 'h2', 'h3', 'h4', 'h5',
          's1', 's2',
          'b1', 'b2', 'b3', 'b4',
          'c1', 'c2', 'c3',
          'label'
        ],
      },
    },
    children: {
      control: 'text',
      description: 'The content of the text component.',
    },
  },
} as Meta;

const Template = (args) => <Text {...args} />;

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
  children: 'This is an H1 text',
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
  children: 'This is an H2 text',
};

export const H3 = Template.bind({});
H3.args = {
  variant: 'h3',
  children: 'This is an H3 text',
};

export const H4 = Template.bind({});
H4.args = {
  variant: 'h4',
  children: 'This is an H4 text',
};

export const H5 = Template.bind({});
H5.args = {
  variant: 'h5',
  children: 'This is an H5 text',
};

export const S1 = Template.bind({});
S1.args = {
  variant: 's1',
  children: 'This is an S1 text',
};

export const S2 = Template.bind({});
S2.args = {
  variant: 's2',
  children: 'This is an S2 text',
};

export const B1 = Template.bind({});
B1.args = {
  variant: 'b1',
  children: 'This is a B1 text',
};

export const B2 = Template.bind({});
B2.args = {
  variant: 'b2',
  children: 'This is a B2 text',
};

export const B3 = Template.bind({});
B3.args = {
  variant: 'b3',
  children: 'This is a B3 text',
};

export const B4 = Template.bind({});
B4.args = {
  variant: 'b4',
  children: 'This is a B4 text',
};

export const C1 = Template.bind({});
C1.args = {
  variant: 'c1',
  children: 'This is a C1 text',
};

export const C2 = Template.bind({});
C2.args = {
  variant: 'c2',
  children: 'This is a C2 text',
};

export const C3 = Template.bind({});
C3.args = {
  variant: 'c3',
  children: 'This is a C3 text',
};

export const Label = Template.bind({});
Label.args = {
  variant: 'label',
  children: 'This is a Label text',
};
