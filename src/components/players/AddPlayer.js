import React, { useState } from 'react';
import { Button, Modal } from "semantic-ui-react";
import { AddPlayerForm } from "./AddPlayerForm";


export const AddPlayer = (props) => {

  const [modalOpenState, setModalState] = useState(false);

  const hideModal = () => {
    setModalState(false)
  };

  const modal = (open) => {
    return (
      <Modal size='large' open={open} closeIcon onClose={() => setModalState(false)}>
        <Modal.Header>Add Player</Modal.Header>
        <Modal.Content>
          <AddPlayerForm
            playerInfoChanged={props.playerInfoChanged}
            hideModal={hideModal}
          />
        </Modal.Content>
      </Modal>
    );
  };

  const button = () => {
    return <Button fluid color='green' onClick={() => setModalState(true)}>Add Player</Button>;
  };

  return (
    <React.Fragment>
      {modal(modalOpenState)}
      {button()}
    </React.Fragment>
  );
};
