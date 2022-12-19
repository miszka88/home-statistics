import { FC } from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';
import { useSaveToFile } from '../../../hooks';
import { ConsuptionStats, StatsForm } from './StatsForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddStatsModal: FC<Props> = ({ isOpen, onClose }) => {
  const saveAsFile = useSaveToFile();
  const submit = (data: ConsuptionStats) => {
    saveAsFile('json', data);
    onClose();
  };

  return (
    <Modal open={isOpen} dimmer='blurring'>
      <Modal.Header>
        <Icon name='plus' />
        Add stats
      </Modal.Header>
      <Modal.Content>
        <StatsForm handleSubmit={submit} />
      </Modal.Content>
      <Modal.Actions>
        <Button animated='fade' secondary onClick={onClose}>
          <Button.Content visible>Cancel</Button.Content>
          <Button.Content hidden>
            <Icon name='cancel' />
          </Button.Content>
        </Button>
        <Button form='stats-form' type='submit' value='Submit' animated='fade' color='green'>
          <Button.Content visible>Add</Button.Content>
          <Button.Content hidden>
            <Icon name='plus' />
          </Button.Content>
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
