import React, { useEffect, useState } from "react";
import { SimpleTable } from "./SimpleTable";
import { getAllTeams } from "../QueryService";
import { TeamModel } from "../models/TeamModel";


export const Teams = (props) => {

  const [teamsState, setTeams] = useState([]);

  useEffect(() => {
    getAllTeams().then(p => setTeams(p['data']['Team']));
  }, []);


  return (
    <div>
      <h1>Teams</h1>
      <SimpleTable
        model={TeamModel}
        entities={teamsState}
      />
    </div>
  );
};
