import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './index';

const meta = {
  title: 'Core/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    alt: 'Colm Tuite',
    fallback: 'CT',
    size: "md"
  },
};