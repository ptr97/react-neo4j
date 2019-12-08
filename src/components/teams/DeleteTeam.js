import React from 'react';
import { Button } from "semantic-ui-react";
import { deleteTeam } from "../../services/TeamService";


export const DeleteTeam = (props) => {

  const deleteTeamAction = (teamCode) => {
    console.log(`Deleting team with code ${teamCode}`);
    props.teamDeleted(teamCode);
    return deleteTeam(teamCode);
  };

  return (
    <Button basic color='red' onClick={() => deleteTeamAction(props.teamCode)}>
      Delete Team
    </Button>
  );
};
