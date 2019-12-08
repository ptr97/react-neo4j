import React, { useState } from 'react';
import { Button, Modal } from "semantic-ui-react";
import { UpdateTeamForm } from "./UpdateTeamForm";

export const UpdateTeam = (props) => {

  const [modalOpenState, setModalState] = useState(false);

  const hideModal = () => {
    setModalState(false)
  };

  const modal = (open) => {
    return (
      <Modal size='large' open={open} closeIcon onClose={() => setModalState(false)}>
        <Modal.Header>Update Team {props.teamInfo.code}</Modal.Header>
        <Modal.Content>
          <UpdateTeamForm
            teamInfo={props.teamInfo}
            teamInfoChanged={props.teamInfoChanged}
            hideModal={hideModal}
          />
        </Modal.Content>
      </Modal>
    );
  };

  const button = () => {
    return <Button basic color='blue' onClick={() => setModalState(true)} >Update</Button>
  };

  return (
    <React.Fragment>
      {modal(modalOpenState)}
      {button()}
    </React.Fragment>

  );
};
