import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

export const EXAMPLE_QUERY = gql`
  {
    rates(currency: "USD") {
      currency
      rate
      name
    }
  }
`;

export function ApolloExample() {
  const { loading, error, data } = useQuery(EXAMPLE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { rates } = data;

  return (
    <table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Name</th>
          <th>Rates</th>
        </tr>
      </thead>
      <tbody>
        {rates.map(({ currency, name, rate }) => (
          <tr key={currency}>
            <td>{currency}</td>
            <td>{name}</td>
            <td>{rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

export default function () {
  return (
    <ApolloProvider client={client}>
      <ApolloExample />
    </ApolloProvider>
  );
}
