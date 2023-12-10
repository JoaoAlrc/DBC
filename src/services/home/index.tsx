import { gql } from "@apollo/client";

export type Character = {
  id: number;
  name: string;
  image: string;
  status?: CharacterStatus;
  type?: string;
  species?: string;
  gender?: string;
  origin?: string;
  location?: string;
};

export enum CharacterStatus {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}


export const GET_CHARACTERS = gql(/* GraphQL */ `
  query GetAllCharacters($page: Int!) {
    characters(page: $page) {
      info {
        next
      }
      results {
        name
        id
        status
        type
        episode {
          id
        }
        species
        image
      }
    }
  }
`);
