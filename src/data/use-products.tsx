import { GraphQLClient } from "graphql-request";

import { GET_PRODUCTS } from "graphql/query/products.query";
const url = "https://www.splitchek.com/stores/graphql";

export async function getProducts() {
  const client = new GraphQLClient(url, {
    headers: {
      "x-store-id": "6049c8262544a8f2a6f8182e",
    },
  });
  const res = await client.request(GET_PRODUCTS).then((data) => {
    console.log("111", data);
    return data.adminGridProducts;
  });
}
