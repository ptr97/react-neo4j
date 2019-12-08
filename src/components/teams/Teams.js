import React, { useEffect, useState } from "react";
import { getAllTeams } from "../../QueryService";
import { TeamsTable } from "./TeamsTable";


export const Teams = (props) => {

  const [teamsState, setTeams] = useState([]);

  useEffect(() => {
    getAllTeams().then(p => setTeams(p['data']['Team']));
  }, []);


  return (
    <div>
      <h1>Teams</h1>
      <TeamsTable
        teams={teamsState}
      />
    </div>
  );
};
