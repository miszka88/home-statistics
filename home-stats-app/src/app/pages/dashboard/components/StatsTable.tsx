import { FC } from 'react';
import { Table } from 'semantic-ui-react';
import { ConsumptionStatsRecord } from '..';

type Props = {
  data: ConsumptionStatsRecord[];
};

const squereMetersUnit = (
  <span>
    m<sup>3</sup>
  </span>
);

const centerEmptyTableInfo = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

export const StatsTable: FC<Props> = ({ data }) => {
  return (
    <>
      {data && data.length ? (
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
            {data?.length &&
              data.map(({ stats: row }, key) => {
                return (
                  <>
                    <Table.Row key={key}>
                      <Table.Cell>{row?.hotWaterConsumption.toString()}</Table.Cell>
                      <Table.Cell>{row?.coldWaterConsumption.toString()}</Table.Cell>
                      <Table.Cell>{row?.energyConsumption.toString()}</Table.Cell>
                      <Table.Cell>{row?.heatingConsumption.toString()}</Table.Cell>
                    </Table.Row>
                  </>
                );
              })}
          </Table.Body>
        </Table>
      ) : (
        <div style={centerEmptyTableInfo}>
          <h1 style={{ margin: 'auto 0' }}>Ups... It looks like you didn't add any stats yet</h1>
        </div>
      )}
    </>
  );
};
