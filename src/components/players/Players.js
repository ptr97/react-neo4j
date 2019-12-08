import React, { useEffect, useState } from "react";
import { PlayersTable } from "./PlayersTable";
import { getAllPlayers } from "../../services/PlayersService";

export const Players = (props) => {

  const [playersState, setPlayers] = useState([]);

  useEffect(() => {
    getAllPlayers().then(p => setPlayers(p['data']['Player']));
  }, []);

  return (
    <div>
      <h1>Players</h1>
      <PlayersTable
        players={playersState}
      />
    </div>
  );
};
