import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/Common/Button/Button';

const meta = {
  title: 'OurPlan/Button/Light',
  component: Button,
  parameters: {
    layout: 'centered',
  },  
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
 args: { clickHandler: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        btnClassName: "primary",
        text: "Primary"
    },
};

export const Secondary: Story = {
    args: {
        btnClassName: "default",
        text: "Secondary"
    },
};