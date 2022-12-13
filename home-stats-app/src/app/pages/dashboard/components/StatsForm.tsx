import { FC, useState } from 'react';
import { Form } from 'semantic-ui-react';
import { StatsInput } from './StatsInput';

export type ConsuptionStats = {
  hotWaterConsumption: Number;
  coldWaterConsumption: Number;
  energyConsumption: Number;
  heatingConsumption: Number;
};

type Props = {
  handleSubmit: (data: ConsuptionStats) => void;
};

export const StatsForm: FC<Props> = ({ handleSubmit }) => {
  const [consumption, setConsumption] = useState<ConsuptionStats>({
    coldWaterConsumption: 0,
    energyConsumption: 0,
    heatingConsumption: 0,
    hotWaterConsumption: 0,
  });

  const onChange = (value: any) => {
    setConsumption((previousState) => ({ ...previousState, ...value }));
  };

  return (
    <>
      <Form id='stats-form' onSubmit={() => handleSubmit(consumption)}>
        <StatsInput label='Hot water' onChange={(value) => onChange({ hotWaterConsumption: value })} unit='m3' />
        <StatsInput label='Cold water' onChange={(value) => onChange({ coldWaterConsumption: value })} unit='m3' />
        <StatsInput label='Energy' onChange={(value) => onChange({ energyConsumption: value })} unit='kWh' />
        <StatsInput label='Heating' onChange={(value) => onChange({ heatingConsumption: value })} unit='GJ' />
      </Form>
    </>
  );
};
