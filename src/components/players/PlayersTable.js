import React from 'react';
import { Table } from 'semantic-ui-react';
import { DeletePlayer } from "./DeletePlayer";
import { AddPlayerToTeam } from "./AddPlayerToTeam";


export const PlayersTable = (props) => {

  const tableHeaderCells = () => {
    return (
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Shirt Number</Table.HeaderCell>
        <Table.HeaderCell>Height</Table.HeaderCell>
        <Table.HeaderCell>Team</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    );
  };

  const playerOrAddComponent = (playerFirstName, playersTeam) => {
    return (
      playersTeam ? playersTeam['name']
        : <AddPlayerToTeam
          allTeams={props.allTeams}
          teamChanged={(playerName, newTeamCode) => props.teamChanged(playerName, newTeamCode)}
          playerFirstName={playerFirstName}
        />
    );
  };

  const tableRow = (player) => {
    return (
      <Table.Row key={player['_id']}>
        <Table.Cell>{player['firstName']}</Table.Cell>
        <Table.Cell>{player['lastName']}</Table.Cell>
        <Table.Cell>{player['shirtNumber']}</Table.Cell>
        <Table.Cell>{player['height']}</Table.Cell>
        <Table.Cell>{playerOrAddComponent(player['firstName'], player['team'])}</Table.Cell>
        <Table.Cell>
          <DeletePlayer
            playerFirstName={player['firstName']}
            playerDeleted={(playerFirstName) => props.playerDeleted(playerFirstName)}
          />
        </Table.Cell>
      </Table.Row>
    );
  };

  const allRows = (players) => {
    return players.map(player => tableRow(player));
  };


  return (
    <Table celled selectable>
      <Table.Header>
        {tableHeaderCells()}
      </Table.Header>
      <Table.Body>
        {allRows(props.players)}
      </Table.Body>
    </Table>
  )
};
