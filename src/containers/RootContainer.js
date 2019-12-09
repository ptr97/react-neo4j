import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import { Sidebar } from "../components/sidebar/Sidebar";
import { Players } from "../components/players/Players";
import { Teams } from "../components/teams/Teams";
import './RootContainer.css'

export const RootContainer = () => {

  const playersTab = {
    name: "players",
    iconName: "user",
    displayName: "Players",
    component: <Players/>
  };

  const teamsTab = {
    name: "teams",
    iconName: "basketball ball",
    displayName: "Teams",
    component: <Teams/>
  };

  const appTabs = [
    playersTab,
    teamsTab
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
        <Grid.Column width={13} className='content'>
          {mainContent(sidebarState)}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
