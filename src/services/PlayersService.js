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
