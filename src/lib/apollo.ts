import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o4enp10h9v01xxhksp8wyl/master',
    cache: new InMemoryCache()
})