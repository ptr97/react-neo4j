import React from 'react';
import { Table } from 'semantic-ui-react';
import { DeleteTeam } from "./DeleteTeam";


export const TeamsTable = (props) => {

  const tableHeaderCells = () => {
    return (
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Code</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    );
  };

  const tableRow = (team) => {
    return (
      <Table.Row key={team['_id']}>
        <Table.Cell>{team['name']}</Table.Cell>
        <Table.Cell>{team['code']}</Table.Cell>
        <Table.Cell>UPDATE</Table.Cell>
        <Table.Cell>
          <DeleteTeam
            teamCode={team['code']}
            teamDeleted={(teamCode) => props.teamDeleted(teamCode)}
          />
        </Table.Cell>
      </Table.Row>
    );
  };

  const allRows = (teams) => {
    return teams.map(team => tableRow(team));
  };


  return (
    <Table celled selectable>
      <Table.Header>
        {tableHeaderCells()}
      </Table.Header>
      <Table.Body>
        {allRows(props.teams)}
      </Table.Body>
    </Table>
  )
};
