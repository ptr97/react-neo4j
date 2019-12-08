import React, { useEffect, useState } from "react";
import { TeamsTable } from "./TeamsTable";
import { getAllTeams } from "../../services/TeamService";


export const Teams = (props) => {

  const [teamsState, setTeams] = useState([]);

  useEffect(() => {
    getAllTeams().then(p => setTeams(p['data']['Team']));
  }, []);


  const teamDeleted = (teamCode) => {
    const newState = teamsState.filter(t => t['code'] !== teamCode);
    setTeams(newState);
  };

  return (
    <div>
      <h1>Teams</h1>
      <TeamsTable
        teams={teamsState}
        teamDeleted={(teamCode) => teamDeleted(teamCode)}
      />
    </div>
  );
};
