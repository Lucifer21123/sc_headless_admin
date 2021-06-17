import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
  ApolloLink,
  createHttpLink,
  concat,
} from "@apollo/client";
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(
    ({
      headers = {
        "x-store-id": "6049c8262544a8f2a6f8182e",
      },
    }) => ({
      headers: {
        ...headers,
      },
    })
  );
  return forward(operation);
});

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createIsomorphLink() {
  return new HttpLink({
    uri: "https://www.splitchek.com/stores/graphql", // Server URL (must be absolute)
  });
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: "https://www.splitchek.com/stores/graphql",
      credentials: "same-origin",
      headers: {
        "x-store-id": "6049c8262544a8f2a6f8182e",
      },
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient();
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
