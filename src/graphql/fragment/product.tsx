import { gql } from "@apollo/client";
export const ProductComponentsItems = gql`
  fragment ProductComponentsItems on ComponentItemsModel {
    title
    quantity
    media
    sku
    product_id
    variant_id
    collaborator
    collaborator_icon
    collaborator_id
    sort_order
    listprice
  }
`;

export const ImageFragment = gql`
  fragment ImageFragment on ImageOptionsModel {
    public_id
    url
    width
    height
    version
    format
    resource_type
    image_id
  }
`;

export const SocialCommentsModelFragment = gql`
  fragment SocialCommentsModelFragment on SocialCommentsModel {
    _id
    isactive
    shopper
    created_at
    store
    comment
    is_reply
    disabled_at
    disabled_reason
    likes
    images
    commentor {
      firstname
      avatar_image
      id
    }
  }
`;

export const MeasurementsFragment = gql`
  fragment MeasurementsFragment on MeasurementsModel {
    weight
    weight_unit
    cubic_unit
    cubic
    width
    height
    breadth
  }
`;

export const EngagementReportFragment = gql`
  fragment EngagementReportFragment on EngagementModel {
    clicks
    shares
    likes
    views
    comments
    re_posts
    not_interested
    muted
    blocked
    blocked
    other
    feedback
  }
`;
export const InventoryFragment = gql`
  fragment InventoryFragment on InventoryModel {
    _id
    isactive
    soh
    modified_at
    available_stock
    on_transfer
    incoming
    outgoing
    manage_stock
    tax_inclusive
    available_in
    qty_increments
    requested
    shipped
    deshelved
    returned
    max_backordered
    enable_backorder
    backordered
    tax_rate_id
    taxes {
      _id
      title
    }
  }
`;

export const ProductVariantFragment = gql`
  ${ImageFragment}
  ${MeasurementsFragment}
  fragment ProductVariantFragment on ProductVariantModel {
    _id
    _key
    isactive
    modified_at
    mutable {
      restricted_variant
      admin_notification_message
      sort_order
      tags
      taxable
      public {
        customer_notification_message
        identity {
          upc
          barcode
          barcode2
          sku
          import_image_id
          image {
            ...ImageFragment
          }
        }
        listprice
        payment_frequency
        title
        preorder {
          preorder_release_date
          preorder_message
          enabled
        }
        options {
          key
          value
        }
        compare_at_price
        measurements {
          ...MeasurementsFragment
        }
        shipping_handling {
          processing_time
          shipping_time
          bulky
          bin_picking_number
        }
      }
    }
    inventory {
      ...InventoryFragment
    }
  }
`;
