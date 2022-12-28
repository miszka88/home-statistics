import { FC } from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, Legend, XAxis } from 'recharts';
import { ConsumptionStatsRecord } from '..';

type Props = {
  data: ConsumptionStatsRecord[];
};

export const ConsumptionsChart: FC<Props> = ({ data }) => {
  const mapedData = data.map((d) => {
    const date = new Date(d.createdAt);
    return {
      month: date.toLocaleString('en-US', { month: 'long' }),
      createdAt: date.getMonth(),
      stats: {
        ...d.stats,
        heatingConsumption: +d.stats.heatingConsumption * 100,
      },
    };
  });

  const CustonTooltip = ({ active, payload, label }: any) => {
    if (active && payload) {
      const { month } = payload[0].payload;
      return (
        <div>
          <p>{month}</p>
          <p className='label'>{`${label} : ${payload[0].value}`}</p>
          <p className='label'>{`${label} : ${payload[1].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer>
      <BarChart data={mapedData}>
        <Bar dataKey='stats.hotWaterConsumption' stackId='default' fill='#fff0d4' />
        <Bar dataKey='stats.coldWaterConsumption' stackId='default' fill='#d6e6ff' />
        <Bar dataKey='stats.energyConsumption' stackId='default' fill='#ffffea' />
        <Bar dataKey='stats.heatingConsumption' stackId='default' fill='#fbe0e0' />
        <Tooltip cursor={{ fill: '#e5d4ef', fillOpacity: '0.15' }} content={<CustonTooltip />} />
        <XAxis dataKey='createdAt' />
      </BarChart>
    </ResponsiveContainer>
  );
};
