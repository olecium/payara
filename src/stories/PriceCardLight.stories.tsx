import type { Meta, StoryObj } from '@storybook/react';
import PriceCard from '../components/PriceCards/PriceCard/PriceCard';
import data from '../data/pricePlans.json';

const meta = {
  title: 'OurPlan/PriceCard/Light',
  component: PriceCard,
  parameters: {
    layout: 'centered',
  },  
  decorators: [(story) => <div className='theme-light'>{story()}</div>],
  tags: ['autodocs'],
} satisfies Meta<typeof PriceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        plan: data.pricePlans[1],
        range: 1,
        toggleMonthYearPrice: () => undefined
    }
};

export const Secondary: Story = {
    args: {
        plan: data.pricePlans[0],
        range: 1,
        toggleMonthYearPrice: () => undefined
    },
};