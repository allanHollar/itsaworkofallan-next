import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm9lfoiu3004907wal31udt6s/master",
  cache: new InMemoryCache(),
});
