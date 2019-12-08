import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import { Sidebar } from "../components/Sidebar";
import { Players } from "../components/players/Players";
import { Teams } from "../components/teams/Teams";
import { AddTeam } from "../components/teams/AddTeam";
import { AddPlayer } from "../components/players/AddPlayer";


export const RootContainer = () => {

  const playersTab = {
    name: "players",
    displayName: "Players",
    component: <Players/>
  };

  const addPlayerTab = {
    name: "addPlayer",
    displayName: "Add Player",
    component: <AddPlayer/>
  };

  const teamsTab = {
    name: "teams",
    displayName: "Teams",
    component: <Teams/>
  };

  const addTeamTab = {
    name: "addTeam",
    displayName: "Add Team",
    component: <AddTeam/>
  };

  const appTabs = [
    playersTab,
    addPlayerTab,
    teamsTab,
    addTeamTab
  ];

  const [sidebarState, setSidebarState] = useState(playersTab.name);

  const navigate = (tabName) => {
    setSidebarState(tabName);
  };

  const mainContent = (tabName) => appTabs.filter(t => t.name === tabName).map(t => t.component)[0];

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={2}>
          <Sidebar mode={navigate} tabs={appTabs}/>
        </Grid.Column>
        <Grid.Column width={14}>
          {mainContent(sidebarState)}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
