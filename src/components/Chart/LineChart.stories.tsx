import React from 'react';
import type { Story } from "@ladle/react";
import { Dataset, LineChart } from './LineChart';

export const Default: Story<{
  width: number;
  height: number;
  spacing: number;
  dataset: Dataset[];
}> = ({ width, height, spacing, dataset }) => <LineChart width={ width } height={ height } spacing={ spacing } dataset={ dataset } />

Default.args = {
  width: 500,
  height: 300,
  spacing: 20,
  dataset: [
    {
      data: 50,
      xAxisLabel: 'now'
    },
    {
      data: 4,
      xAxisLabel: '12:00'
    },
    {
      data: 100,
      xAxisLabel: '13:00'
    },
    {
      data: 20,
      xAxisLabel: '14:00'
    },
    {
      data: 25,
      xAxisLabel: '15:00'
    },
    {
      data: 5,
      xAxisLabel: '16:00'
    },
    {
      data: 90,
      xAxisLabel: '17:00'
    },
    {
      data: 20,
      xAxisLabel: '18:00'
    },
    {
      data: 60,
      xAxisLabel: '19:00'
    },
    {
      data: 24,
      xAxisLabel: '20:00'
    },
    {
      data: 80,
      xAxisLabel: '21:00'
    }
  ]
};
