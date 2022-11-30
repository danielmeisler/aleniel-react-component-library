import styles from './LineChart.module.css';
import React, { FunctionComponent } from 'react';

interface LineChartProps {
  width?: number;
  height?: number;
  spacing?: number;
}

export const LineChart: FunctionComponent<LineChartProps> = ({ width = 500, height = 100, spacing = 10 }) => {
  const datapoints: number[] = [ 50, 4, 100, 20, 25, 4, 20, 80, 40, 100, 20, 5, 15, 80, 20, 4, 10, 50, 20, 3, 25 ];

  const newDatapoints: number[] = [];
  const yOffset = 40;
  const xOffset = 60;
  let path = `M${500 - (xOffset / 2)} ${100 + (yOffset / 2)} `;

  // eslint-disable-next-line unicorn/no-for-loop
  for (let i = 0; i < datapoints.length; i++) {
    newDatapoints.push(width - (i * spacing) - (xOffset / 2));
    newDatapoints.push(height - datapoints[i] + (yOffset / 2));
    path += `L${width - (i * spacing) - (xOffset / 2)} `;
    path += `${height - datapoints[i] + (yOffset / 2)} `;
  }

  path += `${width - (xOffset / 2) - ((datapoints.length - 1) * spacing)} ${height + (yOffset / 2)} Z`;

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
        points={ newDatapoints.toString() }
      />

      <line x1={ xOffset / 2 } y1={ height + (yOffset / 2) } x2={ width - (xOffset / 2) } y2={ height + (yOffset / 2) } stroke='#232527' />
      <line x1={ xOffset / 2 } y1={ height + (yOffset / 2) } x2={ xOffset / 2 } y2={ yOffset / 2 } stroke='#232527' />

      <text className={ styles.label } textAnchor='end'>
        <tspan x='25' y={ 3 + (yOffset / 2) }>100%</tspan>
        <tspan x='25' y={ 3 + (height / 2) + (yOffset / 2) }>50%</tspan>
        <tspan x='25' y={ 3 + height + (yOffset / 2) }>0%</tspan>
      </text>
      <g className={ styles.label }>
        <text x={ width - (xOffset / 2) } y={ height + (yOffset / 2) + 14 }>Now</text>
      </g>
    </svg>
  );
};
