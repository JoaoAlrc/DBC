import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
query GetAllCharacters($page: Int!, $nameFilter: String) {
  characters(page: $page, filter: { name: $nameFilter }) {
    info {
      next
    }
    results {
      id
      name
      image
      species
      status
    }
  }
}
`;


