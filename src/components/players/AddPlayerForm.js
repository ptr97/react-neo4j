import React, { useState } from 'react';
import { Form } from "semantic-ui-react";
import { addPlayer } from "../../services/PlayersService";


export const AddPlayerForm = (props) => {

  const [playerFirstNameState, setPlayerFirstNameState] = useState('');
  const [playerLastNameState, setPlayerLastNameState] = useState('');
  const [playerShirtState, setShirtState] = useState('');
  const [playerHeightState, setHeightState] = useState('');

  const updatePlayerInfo = () => {
    return addPlayer({
      fName: playerFirstNameState,
      lName: playerLastNameState,
      height: playerHeightState,
      shirtNumber: playerShirtState
    }).then(r =>
      props.playerInfoChanged()).then(r =>
      props.hideModal());
  };

  const changeFirstName = (e) => {
    setPlayerFirstNameState(e.target.value)
  };

  const changeLastName = (e) => {
    setPlayerLastNameState(e.target.value)
  };

  const changeHeight = (e) => {
    setHeightState(e.target.value)
  };

  const changeShirtNo = (e) => {
    setShirtState(e.target.value)
  };

  return (
    <Form>
      <Form.Group>
        <Form.Input
          width={4}
          placeholder='First Name'
          name='fName'
          value={playerFirstNameState}
          onChange={changeFirstName}
        />
        <Form.Input
          width={4}
          placeholder='Last Name'
          name='lName'
          value={playerLastNameState}
          onChange={changeLastName}
        />
        <Form.Input
          width={4}
          placeholder='Shirt Number'
          name='shirtNo'
          value={playerShirtState}
          onChange={changeShirtNo}
        />
        <Form.Input
          width={4}
          placeholder='Height'
          name='height'
          value={playerHeightState}
          onChange={changeHeight}
        />
        <Form.Button
          positive
          icon='checkmark'
          labelPosition='right'
          content='Create Player'
          onClick={updatePlayerInfo}
        />
      </Form.Group>
    </Form>
  );
};
