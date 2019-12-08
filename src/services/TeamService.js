import { TeamModel } from "../models/TeamModel";
import { graphQLRequest } from "./QueryService";

export const getAllTeams = () => {
  const teamsValues = Object.keys(TeamModel).join(' ');
  const body = {query: `query AllTeams { Team { ${teamsValues} } }`};
  return graphQLRequest(body);
};

export const deleteTeam = (teamCode) => {
  const body = {
    query: "mutation DeleteTeam($teamCode: String!) { DeleteTeam(code: $teamCode) { name code } }",
    variables: {
      "teamCode": teamCode
    }
  };
  return graphQLRequest(body);
};

export const updateTeam = (teamInfo) => {
  const body = {
    query: "mutation UpdateTeam($teamName: String!, $teamCode: String!) { UpdateTeam(name: $teamName, code: $teamCode) { name code }}",
    variables: {
      "teamName": teamInfo.name,
      "teamCode": teamInfo.code
    }
  };
  return graphQLRequest(body);
};
