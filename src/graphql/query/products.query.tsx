import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts {
    adminGridProducts(first: 50) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          _key
          _id
          mutable {
            public {
              title
              image {
                public_id
                url
              }
            }
          }
          total_variants
          soh
          formatted_price
          reporting {
            engagement {
              clicks
              shares
              views
              comments
              feedback
            }
            feedback {
              reaction
              len
            }
          }
          internal {
            reach {
              paid
              organic
              fans
              non_fans
            }
            conversion {
              sales
              ad_cost
              ad_spent
              added_to_cart
              removed_from_cart
              sold
              removed_at_checkout
              cost_per_view
              cost_per_click
            }
            status {
              isactive
              disabled_reason
            }
            total_stock
          }
        }
      }
    }
  }
`;
