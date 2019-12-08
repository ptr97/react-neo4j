import React, { useEffect, useState } from "react";
import { TeamsTable } from "./TeamsTable";
import { getAllTeams } from "../../services/TeamService";
import { AddTeam } from "./AddTeam";


export const Teams = (props) => {

  const [teamsState, setTeams] = useState([]);

  useEffect(() => {
    getAllTeams().then(p => setTeams(p['data']['Team']));
  }, [teamsState]);


  const teamDeleted = (teamCode) => {
    const newState = teamsState.filter(t => t['code'] !== teamCode);
    setTeams(newState);
  };

  const teamInfoChanged = () => {
    getAllTeams().then(p => setTeams(p['data']['Team']));
  };


  return (
    <div>
      <h1>Teams</h1>
      <TeamsTable
        teams={teamsState}
        teamDeleted={(teamCode) => teamDeleted(teamCode)}
        teamInfoChanged={teamInfoChanged}
      />
      <AddTeam
        teamInfoChanged={teamInfoChanged}
      />
    </div>
  );
};
