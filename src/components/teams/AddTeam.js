import React, { useState } from 'react';
import { Button, Modal } from "semantic-ui-react";
import { AddTeamForm } from "./AddTeamForm";


export const AddTeam = (props) => {

  const [modalOpenState, setModalState] = useState(false);

  const hideModal = () => {
    setModalState(false)
  };

  const modal = (open) => {
    return (
      <Modal size='large' open={open} closeIcon onClose={() => setModalState(false)}>
        <Modal.Header>Add Team</Modal.Header>
        <Modal.Content>
          <AddTeamForm
            teamInfoChanged={props.teamInfoChanged}
            hideModal={hideModal}
          />
        </Modal.Content>
      </Modal>
    );
  };

  const button = () => {
    return <Button fluid color='green' onClick={() => setModalState(true)}>Add Team</Button>;
  };

  return (
    <React.Fragment>
      {modal(modalOpenState)}
      {button()}
    </React.Fragment>
  );
};
