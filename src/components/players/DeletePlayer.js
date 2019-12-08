import React from 'react';
import { Button } from "semantic-ui-react";
import { deletePlayer } from "../../services/PlayersService";


export const DeletePlayer = (props) => {

  const deletePlayerAction = (playerFirstName) => {
    console.log(`Deleting player ${playerFirstName}`);
    props.playerDeleted(playerFirstName);
    return deletePlayer(playerFirstName);
  };

  return (
    <Button basic color='red' onClick={() => deletePlayerAction(props.playerFirstName)}>
      Delete Player
    </Button>
  );
};
