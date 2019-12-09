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

export const addTeam = (teamInfo) => {
  const body = {
    query: "mutation AddTeam($teamCode: String!, $teamName: String!) { CreateTeam(name: $teamName, code: $teamCode) { name code } }",
    variables: {
      "teamCode": teamInfo.code,
      "teamName": teamInfo.name
    }
  };
  return graphQLRequest(body);
};

export const getPlayersForTeam = (teamCode) => {
  const body = {
    query: "query PlayersForTeamNested($teamCode: String) { Team(code: $teamCode) { players { firstName lastName shirtNumber height } }}",
    variables: {
      "teamCode": teamCode
    }
  };
  return graphQLRequest(body);
};
