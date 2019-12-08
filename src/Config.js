import dotenv from 'dotenv';

dotenv.config();

export const config = {
  API_URI: process.env.API_URI || "http://localhost:5000/neo4j-graphql"
};
