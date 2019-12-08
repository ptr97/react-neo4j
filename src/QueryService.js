import { config } from "./Config";
import { PlayerModel } from "./models/PlayerModel";
import { TeamModel } from "./models/TeamModel";


const graphQLRequest = (body) => {
  return fetch(`${config.API_URI}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .catch(err => {
      console.error(err);
      throw err;
    })
};

export const getAllPlayers = () => {
  const playerValues = Object.keys(PlayerModel).join(' ');
  const body = { query: `query AllPlayers { Player { ${playerValues} } }` };
  return graphQLRequest(body);
};

export const getAllTeams = () => {
  const teamsValues = Object.keys(TeamModel).join(' ');
  const body = { query: `query AllTeams { Team { ${teamsValues} } }` };
  return graphQLRequest(body);
};
