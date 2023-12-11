import { gql } from "@apollo/client";

export const GET_CHARACTER = gql(`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      gender
      name
      image
      location {
        name
        type
      }
      origin { 
        name
        type
      }
      status
      type
      species
      episode {
        air_date
        episode
        name
      }
    }
  }
`);

