import { config } from "../Config";


export const graphQLRequest = (body) => {
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
