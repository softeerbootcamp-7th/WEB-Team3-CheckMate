import type { Meta, StoryObj } from '@storybook/react-vite';

import { TooltipProvider } from '@/components/shared/shadcn-ui';
import type { BarLineChartSeries } from '@/types/shared';

import { BarLineChart } from './BarLineChart';

const BAR_LINE_WEEKLY_MOCK: BarLineChartSeries = {
  color: 'var(--color-grey-400)',
  data: {
    mainX: [
      { amount: '1월 15일', unit: '' },
      { amount: '1월 16일', unit: '' },
      { amount: '1월 17일', unit: '' },
      { amount: '1월 18일', unit: '' },
      { amount: '1월 19일', unit: '' },
      { amount: '1월 20일', unit: '' },
      { amount: '오늘', unit: '' },
    ],
    subX: [
      { amount: '1월 15일', unit: '' },
      { amount: '1월 16일', unit: '' },
      { amount: '1월 17일', unit: '' },
      { amount: '1월 18일', unit: '' },
      { amount: '1월 19일', unit: '' },
      { amount: '1월 20일', unit: '' },
      { amount: '오늘', unit: '' },
    ],
    mainY: [
      { amount: 17.4, unit: '만' },
      { amount: 10.2, unit: '만' },
      { amount: 13.5, unit: '만' },
      { amount: 15.8, unit: '만' },
      { amount: 18.7, unit: '만' },
      { amount: 15.6, unit: '만' },
      { amount: 11.1, unit: '만' },
    ],
    subY: [
      { amount: 10, unit: '건' },
      { amount: 12, unit: '건' },
      { amount: 9, unit: '건' },
      { amount: 13, unit: '건' },
      { amount: 12, unit: '건' },
      { amount: 13, unit: '건' },
      { amount: 9, unit: '건' },
    ],
  },
};

const meta = {
  title: 'components/shared/bar-line-chart/BarLineChart',
  component: BarLineChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof BarLineChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    viewBoxWidth: 1000,
    viewBoxHeight: 300,
    yGuideLineCount: 5,
    xAxisType: 'default',
    chartTitle: 'BarLineChart',
    chartDescription: 'BarLineChart',
    hasXAxis: true,
    hasYAxis: true,
    showXGuideLine: true,
    showYGuideLine: true,
    activeTooltip: true,
    barLineChartSeries: BAR_LINE_WEEKLY_MOCK,
  },
  render: (args) => (
    <TooltipProvider>
      <div
        style={{
          width: `${args.viewBoxWidth}px`,
          height: `${args.viewBoxHeight}px`,
        }}
      >
        <BarLineChart {...args} />
      </div>
    </TooltipProvider>
  ),
};
