import { FC, useEffect, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { useCurrentDate, useSaveToFile } from '../../hooks';
import { AddStatsModal } from './components/AddStatsModal';
import { ConsumptionsChart } from './components/ConsumptionsChart';
import { ConsumptionStats } from './components/StatsForm';
import { StatsTable } from './components/StatsTable';

export type ConsumptionStatsRecord = {
  createdAt: string;
  stats: ConsumptionStats;
};

export const StatsDashboard: FC = () => {
  const { update: updateFile } = useSaveToFile();
  const { ISODateString } = useCurrentDate();
  const [isAddStatsModalOpen, setIsAddStatsModalOpen] = useState(false);
  const [data, setTableData] = useState<ConsumptionStatsRecord[]>([]);

  useEffect(() => {
    fetch('/3b3b322a-0add-4fd8-8a4c-55df1d05df5f.json')
      .then((fileContent) => fileContent.json())
      .then((jsonObj) => setTableData(jsonObj));
  }, []);

  const handleSubmit = (stats: ConsumptionStats) => {
    data.push({ stats, createdAt: ISODateString() });
    setTableData(data);

    updateFile('3b3b322a-0add-4fd8-8a4c-55df1d05df5f', data);

    setIsAddStatsModalOpen(false);
  };

  return (
    <>
      <h1>Home stats dashboard</h1>
      <Button animated='fade' color='green' onClick={() => setIsAddStatsModalOpen(true)}>
        <Button.Content visible>Add</Button.Content>
        <Button.Content hidden>
          <Icon name='plus' />
        </Button.Content>
      </Button>

      <StatsTable data={data} />

      <ConsumptionsChart data={data} />

      <AddStatsModal isOpen={isAddStatsModalOpen} onClose={() => setIsAddStatsModalOpen(false)} onSubmit={handleSubmit} />
    </>
  );
};
