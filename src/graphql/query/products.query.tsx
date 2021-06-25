import { gql } from "@apollo/client";
import {
  EngagementReportFragment,
  ImageFragment,
  InventoryFragment,
  MeasurementsFragment,
  ProductComponentsItems,
  ProductVariantFragment,
  SocialCommentsModelFragment,
} from "graphql/fragment/product";
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

export const GET_AGEBRACKET = gql`
  query get_ageBracket {
    ageBracket {
      data {
        key
        value
      }
    }
  }
`;

export const GET_PRODUCTBYID = gql`
  ${ProductVariantFragment}
  ${ProductComponentsItems}
  ${ImageFragment}
  ${SocialCommentsModelFragment}
  ${EngagementReportFragment}
  ${InventoryFragment}
  query get_productById($oid: OID!) {
    productById(id: $oid) {
      success
      errors {
        message
      }
      data {
        _key
        _id
        isactive
        created_at
        modified_at
        publish_start
        publish_end
        age_bracket
        coarse_language
        adult_content
        mutable {
          max_download
          add_width_length_height_manually
          click_and_collect_from
          notify_stock_qty
          direct_costs
          canonical
          published_scope
          download_link
          admin_notification_message
          public {
            title
            taxes {
              _id
              title
            }
            open_graph {
              title
              description
              image
              image_id
              url
              video
            }
            variants {
              ...ProductVariantFragment
            }
            short_description
            requires_shipping
            is_price_hidden
            price_hidden_label
            availability
            condition
            show_tabs
            display_tags
            marketing_tags
            categories
            brand
            link_type
            frequency_text
            frequency
            terms_and_conditions
            listprice
            tax_inclusive
            compare_at_price
            campaign_id
            linking_page {
              id
              title
              media
              url
            }
            bg {
              enabled
              max_discount
              max_orders
              discount
              price
              disable_price_rules
              free_shipping
              notes
            }
            component {
              _id
              _key
              isactive
              parent_id
              qty_editable
              show_lines
              show_price
              use_components_total
              slug
              shipping_cost
              modified_at
              items {
                ...ProductComponentsItems
              }
            }
            image {
              ...ImageFragment
            }
            images {
              _id
              isactive
              views
              created_at
              options {
                ...ImageFragment
              }
            }
          }
        }
        store {
          _id
          name
          legal_name
          favicon
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
          demographics {
            age_bracket
            under_15
            over_15
            over_21
          }
          impression
          comments {
            ...SocialCommentsModelFragment
          }
          total_stock
        }
        immutable {
          engagement {
            ...EngagementReportFragment
          }
          import_id
          rating {
            rate
            colors
          }
        }
        services {
          _id
          price
          modified_at
          parent_id
          position
          title
        }
      }
    }
  }
`;
