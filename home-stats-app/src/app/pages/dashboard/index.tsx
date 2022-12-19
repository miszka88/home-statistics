import { FC, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { AddStatsModal } from './components/AddStatsModal';
import { StatsTable } from './components/StatsTable';

export const StatsDashboard: FC = () => {
  const [isAddStatsModalOpen, setIsAddStatsModalOpen] = useState(false);
  return (
    <>
      <h1>Home stats dashboard</h1>
      <Button animated='fade' color='green' onClick={() => setIsAddStatsModalOpen(true)}>
        <Button.Content visible>Add</Button.Content>
        <Button.Content hidden>
          <Icon name='plus' />
        </Button.Content>
      </Button>

      <StatsTable data={[]} />

      <AddStatsModal isOpen={isAddStatsModalOpen} onClose={() => setIsAddStatsModalOpen(false)} />
    </>
  );
};
