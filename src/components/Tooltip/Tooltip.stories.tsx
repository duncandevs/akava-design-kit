import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {ToolTip, TooltipTrigger, TooltipContent, TooltipArrow } from ".";
import Text from '../Text';
import Button from '../Buttons/Button';


export default {
  title: 'Core/Tooltip',
  component: ToolTip
} as Meta;

const Template: StoryFn = (args) => (
  <div style={{ marginLeft: 200, marginTop: 100}}>
    <ToolTip>
      <TooltipTrigger asChild>
        <div style={{width: 'fit-content'}}>
          <Button variant='primary' size='medium'>Hover for tooltip</Button>
        </div>
      </TooltipTrigger>
      <TooltipContent sideOffset={5} side={args.side}>
        <Text variant='b3'>Click to Add to library</Text>
        <TooltipArrow />
      </TooltipContent>
      </ToolTip>
  </div>
)


export const Default = Template.bind({});
Default.args = {
  side: "bottom"
};