import dotenv from 'dotenv';

dotenv.config();

export const config = {
  API_URI: "http://68.183.145.245:3000/neo4j-graphql" || "http://localhost:5000/neo4j-graphql"
};
