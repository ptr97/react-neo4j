import React from "react";
import { Dropdown } from "semantic-ui-react";


export const AddPlayerToTeam = (props) => {

  const teamNames = props.allTeams.map(t => {
    return {
      key: t['code'],
      text: t['name'],
      value: t['code'],
    };
  });

  const teamChanged = (e, d) => {
    return props.teamChanged(props.playerFirstName, d.value);
  };

  const teamsDropdown = () => {
    return (
      <Dropdown
        placeholder='Select Team'
        fluid
        selection
        options={teamNames}
        onChange={teamChanged}
      />
    );
  };

  return teamsDropdown();
};
