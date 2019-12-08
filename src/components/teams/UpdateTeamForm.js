import React, { useState } from 'react';
import { Form } from "semantic-ui-react";
import { updateTeam } from "../../services/TeamService";


export const UpdateTeamForm = (props) => {

  const [teamNameState, setTeamNameState] = useState(props.teamInfo.name);

  const updateTeamInfo = () => {
    console.log(`Updating team ${props.teamInfo.code}. Changing name to ${teamNameState}`);
    return updateTeam({
      name: teamNameState,
      code: props.teamInfo.code
    }).then(r =>
      props.teamInfoChanged()).then(r =>
      props.hideModal());
  };

  const changeTeamName = (e) => {
    setTeamNameState(e.target.value)
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
        <Form.Button
          positive
          icon='checkmark'
          labelPosition='right'
          content='Update'
          onClick={updateTeamInfo}
        />
      </Form.Group>
    </Form>
  );
};
