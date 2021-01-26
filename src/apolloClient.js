import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'https://evident-racer-53.hasura.app/v1/graphql'
});

export default apolloClient;
