import React from 'react';
import type { Story } from "@ladle/react";
import { LineChart } from './LineChart';

export const Default: Story<{
  label: string;
}> = ({ label }) => <LineChart />

Default.args = {
  
};

