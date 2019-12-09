import React, { useEffect, useState } from 'react';
import { Button, Modal } from "semantic-ui-react";
import { TeamPlayersTable } from "./TeamPlayersTable";
import { getPlayersForTeam } from "../../services/TeamService";


export const TeamPlayers = (props) => {

  const [modalOpenState, setModalState] = useState(false);

  const [teamPlayersState, setTeamPlayersState] = useState([]);

  const buttonClicked = () => {
    showTeamPlayers(props.teamCode)
  };

  const showTeamPlayers = (teamCode) => {
    getPlayersForTeam(teamCode).then(p => setTeamPlayersState(p['data']['Team'][0]['players'])).then(r => setModalState(true));
  };

  const modal = (open) => {
    return (
      <Modal size='large' open={open} closeIcon onClose={() => setModalState(false)}>
        <Modal.Header>{props.teamCode} Players</Modal.Header>
        <Modal.Content>
          <TeamPlayersTable
            players={teamPlayersState}
          />
        </Modal.Content>
      </Modal>
    );
  };

  const button = () => {
    return <Button basic color='green' onClick={buttonClicked} >Show Players</Button>;
  };

  return (
    <React.Fragment>
      {modal(modalOpenState)}
      {button()}
    </React.Fragment>
  );
};
