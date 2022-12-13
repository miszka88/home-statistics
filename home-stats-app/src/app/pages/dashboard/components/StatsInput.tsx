import { FC } from 'react';
import { Form, Input } from 'semantic-ui-react';

type Props = {
  label: string;
  unit: 'm3' | 'kWh' | 'GJ';
  onChange: (value: Number) => void;
};

export const StatsInput: FC<Props> = ({ label, unit, onChange }) => {
  return (
    <Form.Field>
      <label>{label}</label>
      <Input
        type='number'
        min='0'
        step='0.001'
        control={Input}
        label={{ basic: true, content: unit }}
        labelPosition='right'
        onChange={({ target }) => onChange(+target.value)}
      />
    </Form.Field>
  );
};
