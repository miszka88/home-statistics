import { FC } from 'react';
import { Table } from 'semantic-ui-react';
import { ConsuptionStats } from './StatsForm';

type Props = {
  data: ConsuptionStats[];
};

const squereMetersUnit = (
  <span>
    m<sup>3</sup>
  </span>
);

export const StatsTable: FC<Props> = ({ data }) => {
  return (
    <Table striped color='olive'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Hot water [{squereMetersUnit}]</Table.HeaderCell>
          <Table.HeaderCell>Cold water [{squereMetersUnit}]</Table.HeaderCell>
          <Table.HeaderCell>Energy [kWh]</Table.HeaderCell>
          <Table.HeaderCell>Heating [GJ]</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((row) => {
          return (
            <>
              <Table.Row>
                <Table.Cell>{row.hotWaterConsumption.toString()}</Table.Cell>
                <Table.Cell>{row.coldWaterConsumption.toString()}</Table.Cell>
                <Table.Cell>{row.energyConsumption.toString()}</Table.Cell>
                <Table.Cell>{row.heatingConsumption.toString()}</Table.Cell>
              </Table.Row>
            </>
          );
        })}
      </Table.Body>
    </Table>
  );
};
