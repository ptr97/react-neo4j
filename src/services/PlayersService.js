import { PlayerModel } from "../models/PlayerModel";
import { graphQLRequest } from "./QueryService";


export const getAllPlayers = () => {
  const playerValues = Object.keys(PlayerModel).join(' ');
  const body = {query: `query AllPlayers { Player { ${playerValues} team { name } } }`};
  return graphQLRequest(body);
};

export const deletePlayer = (playerFirstName) => {
  const body = {
    query: "mutation DeletePlayer($fName: String!) { DeletePlayer(firstName: $fName) { firstName lastName } }",
    variables: {
      "fName": playerFirstName
    }
  };
  return graphQLRequest(body);
};

export const addPlayer = (playerInfo) => {
  const body = {
    query: "mutation AddPlayer($fName: String!, $lName: String!, $h: Int!, $shirt: Int!) { CreatePlayer(firstName: $fName lastName: $lName height: $h shirtNumber: $shirt ) { firstName lastName height shirtNumber } } ",
    variables: {
      "fName": playerInfo.fName,
      "lName": playerInfo.lName,
      "h": parseInt(playerInfo.height),
      "shirt": parseInt(playerInfo.shirtNumber)
    }
  };
  return graphQLRequest(body);
};

export const addPlayerToTeam = (playerFirstName, teamCode) => {
  const body = {
    query: "mutation AddPlayerToTeam($player: _PlayerInput!, $team: _TeamInput!) { AddPlayerTeam(from: $player, to: $team) { from { firstName lastName } to { name code } } }",
    variables: {
      "player": {
        "firstName": playerFirstName
      },
      "team": {
        "code": teamCode
      }
    }
  };
  return graphQLRequest(body);
};

