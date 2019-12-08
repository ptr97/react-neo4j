import { config } from "./Config";


const PlayerModel = {
  id: "_id",
  firstName: "firstName",
  lastName: "lastName",
  height: "height",
  shirtNumber: "shirtNumber"
};


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
  const playerValues = Object.values(PlayerModel).join(' ');
  const body = { query: `query AllPlayers { Player { ${playerValues} } }` };
  return graphQLRequest(body);
};
