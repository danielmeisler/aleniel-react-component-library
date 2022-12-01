import styles from './LineChart.module.css';
import React, { FunctionComponent } from 'react';

interface LineChartProps {
  width?: number;
  height?: number;
  spacing?: number;
}

export const LineChart: FunctionComponent<LineChartProps> = ({ width = 500, height = 100, spacing = 20 }) => {
  const dataset = [
    {
      data: 50,
      label: 'now'
    },
    {
      data: 4,
      label: '12:00'
    },
    {
      data: 100,
      label: '13:00'
    },
    {
      data: 20,
      label: '14:00'
    },
    {
      data: 25,
      label: '15:00'
    },
    {
      data: 5,
      label: '16:00'
    },
    {
      data: 90,
      label: '17:00'
    },
    {
      data: 20,
      label: '18:00'
    },
    {
      data: 60,
      label: '19:00'
    },
    {
      data: 24,
      label: '20:00'
    },
    {
      data: 80,
      label: '21:00'
    }
  ];

  const datapoints: number[] = [];
  const yOffset = 40;
  const xOffset = 60;
  let path = `M${500 - (xOffset / 2)} ${100 + (yOffset / 2)} `;

  // eslint-disable-next-line unicorn/no-for-loop
  for (let i = 0; i < dataset.length; i++) {
    datapoints.push(width - (i * spacing) - (xOffset / 2));
    datapoints.push(height - dataset[i].data + (yOffset / 2));
    path += `L${width - (i * spacing) - (xOffset / 2)} `;
    path += `${height - dataset[i].data + (yOffset / 2)} `;
  }

  path += `${width - (xOffset / 2) - ((dataset.length - 1) * spacing)} ${height + (yOffset / 2)} Z`;

  return (
    <svg viewBox={ `0 0 ${width} ${height + yOffset}` } className={ styles.linechart }>
      <defs>
        <linearGradient id='gradient' gradientTransform='rotate(90)'>
          <stop stopColor='#35d5e445' />
          <stop offset='100%' stopColor='#35d5e41a' />
        </linearGradient>
      </defs>
      <path d={ path } />
      <polyline
        fill='none'
        stroke='#35D5E4'
        strokeWidth='3'
        points={ datapoints.toString() }
      />

      <line x1={ xOffset / 2 } y1={ height + (yOffset / 2) } x2={ width - (xOffset / 2) } y2={ height + (yOffset / 2) } stroke='#232527' />
      <line x1={ xOffset / 2 } y1={ height + (yOffset / 2) } x2={ xOffset / 2 } y2={ yOffset / 2 } stroke='#232527' />

      <text className={ styles.label } textAnchor='end'>
        <tspan x='25' y={ 3 + (yOffset / 2) }>100%</tspan>
        <tspan x='25' y={ 3 + (height / 2) + (yOffset / 2) }>50%</tspan>
        <tspan x='25' y={ 3 + height + (yOffset / 2) }>0%</tspan>
      </text>
      <text className={ styles.label } textAnchor='middle'>
        {
          dataset.map((datapoint, index) =>
            index % 2 === 0 &&
            <tspan key={ datapoint.label.toString() } x={ (width - (yOffset / 2) - (spacing / 2)) - (index * spacing) } y={ height + (yOffset / 2) + 14 }>{ datapoint.label }</tspan>)
        }
      </text>
    </svg>
  );
};
