import React, { useEffect, useState } from "react";
import { getAllPlayers } from "../QueryService";
import { SimpleTable } from "./SimpleTable";
import { PlayerModel } from "../models/PlayerModel";

export const Players = (props) => {

  const [playersState, setPlayers] = useState([]);

  useEffect(() => {
    getAllPlayers().then(p => setPlayers(p['data']['Player']));
  }, []);

  return (
    <div>
      <h1>Players</h1>
      <SimpleTable
        model={PlayerModel}
        entities={playersState}
      />
    </div>
  );
};
