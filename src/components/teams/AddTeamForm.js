import React, { useState } from 'react';
import { Form } from "semantic-ui-react";
import { addTeam } from "../../services/TeamService";


export const AddTeamForm = (props) => {

  const [teamNameState, setTeamNameState] = useState('');
  const [teamCodeState, setTeamCodeState] = useState('');

  const updateTeamInfo = () => {
    console.log(`Creating new team ${teamNameState}, ${teamCodeState}`);
    return addTeam({
      name: teamNameState,
      code: teamCodeState
    }).then(r =>
      props.teamInfoChanged()).then(r =>
      props.hideModal());
  };

  const changeTeamName = (e) => {
    setTeamNameState(e.target.value)
  };

  const changeTeamCode = (e) => {
    setTeamCodeState(e.target.value)
  };

  return (
    <Form>
      <Form.Group>
        <Form.Input
          width={6}
          placeholder='Name'
          name='name'
          value={teamNameState}
          onChange={changeTeamName}
        />
        <Form.Input
          width={6}
          placeholder='Code'
          name='code'
          value={teamCodeState}
          onChange={changeTeamCode}
        />
        <Form.Button
          positive
          icon='checkmark'
          labelPosition='right'
          content='Create Team'
          onClick={updateTeamInfo}
        />
      </Form.Group>
    </Form>
  );
};
