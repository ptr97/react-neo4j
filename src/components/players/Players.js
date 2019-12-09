import React, { useEffect, useState } from "react";
import { PlayersTable } from "./PlayersTable";
import { addPlayerToTeam, getAllPlayers } from "../../services/PlayersService";
import { AddPlayer } from "./AddPlayer";
import { getAllTeams } from "../../services/TeamService";


export const Players = (props) => {

  const [playersState, setPlayers] = useState([]);

  const [allTeams, setAllTeams] = useState([]);

  useEffect(() => {
    getAllPlayers().then(p => setPlayers(p['data']['Player']));
    getAllTeams().then(t => setAllTeams(t['data']['Team']));
  }, []);

  const playerDeleted = (playerFirstName) => {
    const newState = playersState.filter(t => t['firstName'] !== playerFirstName);
    setPlayers(newState);
  };

  const teamChanged = (playerFirstName, newTeamCode) => {
    addPlayerToTeam(playerFirstName, newTeamCode).then(e =>
      getAllPlayers().then(p => setPlayers(p['data']['Player']))
    );
  };


  const playerInfoChanged = () => {
    getAllPlayers().then(p => setPlayers(p['data']['Player']));
  };

  return (
    <div>
      <h1>Players</h1>
      <PlayersTable
        players={playersState}
        allTeams={allTeams}
        teamChanged={(playerName, newTeamCode) => teamChanged(playerName, newTeamCode)}
        playerDeleted={(playerFirstName) => playerDeleted(playerFirstName)}
        playerInfoChanged={playerInfoChanged}
      />
      <AddPlayer
        playerInfoChanged={playerInfoChanged}
      />
    </div>
  );
};
