import type { Meta, StoryObj } from '@storybook/react';
import FeatureAvailabilityIcon from '../components/Common/FeatureAvailabilityIcon';

const meta = {
  title: 'OurPlan/Feature-Icon',
  component: FeatureAvailabilityIcon,
  decorators: [(story) => <div className='theme-light'>{story()}</div>],
  parameters: {
    layout: 'centered',
  },  
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureAvailabilityIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
    args: {
        available: true
    },
};

export const Disabled: Story = {
    args: {
        available: false
    },
};