import React from 'react';
import { Table } from 'semantic-ui-react';


export const PlayersTable = (props) => {

  const tableHeaderCells = () => {
    return (
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Shirt Number</Table.HeaderCell>
        <Table.HeaderCell>Height</Table.HeaderCell>
        <Table.HeaderCell>Team</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    );
  };

  const tableRow = (player) => {
    return (
      <Table.Row key={player['_id']}>
        <Table.Cell>{player['firstName']}</Table.Cell>
        <Table.Cell>{player['lastName']}</Table.Cell>
        <Table.Cell>{player['shirtNumber']}</Table.Cell>
        <Table.Cell>{player['height']}</Table.Cell>
        <Table.Cell>{player['team']['name']}</Table.Cell>
        <Table.Cell>UPDATE</Table.Cell>
        <Table.Cell>DELETE</Table.Cell>
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
