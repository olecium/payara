import type { Meta, StoryObj } from '@storybook/react';
import PriceCard from '../components/PriceCards/PriceCard/PriceCard';
import data from '../data/pricePlans.json';

const meta = {
  title: 'OurPlan/PriceCard/Dark',
  component: PriceCard,
  parameters: {
    layout: 'centered',
  },  
  decorators: [(story) => <div className='theme-dark'>{story()}</div>],
  tags: ['autodocs'],
} satisfies Meta<typeof PriceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        plan: data.pricePlans[1]
    },
};

export const Secondary: Story = {
    args: {
        plan: data.pricePlans[0]
    },
};