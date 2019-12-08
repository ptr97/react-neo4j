import React from 'react';
import { Table } from 'semantic-ui-react';

export const SimpleTable = (props) => {

  const visibleValues = (model) => {
    return Object.values(model).filter(name => name !== "Id")
  };

  const visibleKeys = (model) => {
    return Object.keys(model).filter(name => name !== "_id")
  };

  const tableHeaderCells = (model) => {
    return visibleValues(model).map(name => <Table.HeaderCell key={name}>{name}</Table.HeaderCell>)
  };

  const tableRow = (model, entity) => {
    const tableCells = visibleKeys(model).map(k => <Table.Cell key={k}>{entity[k]}</Table.Cell>);
    tableCells.push(<Table.Cell key={'update'}>UPDATE</Table.Cell>);
    tableCells.push(<Table.Cell key={'delete'}>DELETE</Table.Cell>);
    return tableCells;
  };

  const allRows = (model, entities) => {
    return entities.map(entity => <Table.Row key={entity['_id']}>{tableRow(model, entity)}</Table.Row>);
  };


  return (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          {tableHeaderCells(props.model)}
          <Table.HeaderCell>Update</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {allRows(props.model, props.entities)}
      </Table.Body>
    </Table>
  )
};
