import { gql } from "@apollo/client";

export const GET_STOREIDBYNAME = gql`
  query StoreBySlug($slug: String!) {
    StoreBySlug(slug: $slug) {
      data {
        _id
      }
    }
  }
`;
