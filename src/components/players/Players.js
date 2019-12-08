import React, { useEffect, useState } from "react";
import { PlayersTable } from "./PlayersTable";
import { getAllPlayers } from "../../services/PlayersService";
import { AddPlayer } from "./AddPlayer";

export const Players = (props) => {

  const [playersState, setPlayers] = useState([]);

  useEffect(() => {
    getAllPlayers().then(p => setPlayers(p['data']['Player']));
  }, []);

  const playerDeleted = (playerFirstName) => {
    const newState = playersState.filter(t => t['firstName'] !== playerFirstName);
    setPlayers(newState);
  };

  const playerInfoChanged = () => {
    getAllPlayers().then(p => setPlayers(p['data']['Player']));
  };

  return (
    <div>
      <h1>Players</h1>
      <PlayersTable
        players={playersState}
        playerDeleted={(playerFirstName) => playerDeleted(playerFirstName)}
        playerInfoChanged={playerInfoChanged}
      />
      <AddPlayer
        playerInfoChanged={playerInfoChanged}
      />
    </div>
  );
};
