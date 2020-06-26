import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, wait } from '@testing-library/react';
import { ApolloExample, EXAMPLE_QUERY } from './ApolloExample';

describe('Apollo tests', () => {
  const mocks = [
    {
      request: {
        query: EXAMPLE_QUERY,
      },
      result: {
        data: {
          rates: [
            {
              currency: 'AED',
              name: 'United Arab Emirates Dirham',
              rate: '3.6732',
            },
          ],
        },
      },
    },
  ];

  it('should render an Apollo component', async () => {
    const { container, queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ApolloExample />
      </MockedProvider>
    );

    expect(container).toBeDefined();

    // Loader should be rendered
    const loadingText = await queryByText('Loading...');
    expect(loadingText).not.toBeNull();
  });

  it('should be able to test layout upon completed GraphQL request', async () => {
    const { queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ApolloExample />
      </MockedProvider>
    );

    // Let's delay until the next "tick" of the event loop so the GraphQL request to resolve.
    await wait();

    // Loader should not be rendered
    const loadingText = await queryByText('Loading...');
    expect(loadingText).toBeNull();
  });
});
