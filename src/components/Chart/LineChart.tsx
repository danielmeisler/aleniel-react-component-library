import styles from './LineChart.module.css';
import React, { FunctionComponent, useEffect } from 'react';

interface LineChartProps {
  width?: number;
  height?: number;
  spacing?: number;
  dataset: Dataset[];
}

export const LineChart: FunctionComponent<LineChartProps> = ({ width = 500, height = 300, spacing = 20, dataset }) => {
  const yOffset = 40;
  const xOffset = 60;
  const datapoints: number[] = [];

  let path = `M${width - (xOffset / 2)} ${height + (yOffset / 2)} `;

  dataset.forEach((datapoint, index) => {
    const datapointWidth = width - (index * spacing) - (xOffset / 2);
    const datapointHeight = height - (dataset[index].data * height / 100) + (yOffset / 2);

    datapoints.push(datapointWidth);
    datapoints.push(datapointHeight);
    path += `L${datapointWidth} `;
    path += `${datapointHeight} `;
  });

  path += `${width - (xOffset / 2) - ((dataset.length - 1) * spacing)} ${height + (yOffset / 2)} Z`;

  return (
    <svg viewBox={ `0 0 ${width} ${height + yOffset}` } className={ styles.linechart }>
      <polyline
        fill='none'
        stroke='#35D5E4'
        strokeWidth='3'
        points={ datapoints.toString() }
      />
      <path d={ path } />

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
            <tspan key={ datapoint.xAxisLabel.toString() } x={ (width - (yOffset / 2) - (spacing / 2)) - (index * spacing) } y={ height + (yOffset / 2) + 14 }>{ datapoint.xAxisLabel }</tspan>)
        }
      </text>
      <defs>
        <linearGradient id='gradient' gradientTransform='rotate(90)'>
          <stop stopColor='#35d5e445' />
          <stop offset='100%' stopColor='#35d5e41a' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export interface Dataset {
  data: number;
  xAxisLabel: string;
}
