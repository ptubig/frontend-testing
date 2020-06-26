# Apollo Testing

Example file followed the [Apollo Client Get Started guide](https://www.apollographql.com/docs/react/get-started/).

## How to test

### Render

You will need to wrap any React component that uses Apollo `useQuery` with [MockedProvider](https://www.apollographql.com/docs/react/development-testing/testing/#mockedprovider). Without it, the component will produce an error because Apollo client is not available on the context for the `useQuery` hook to consume.

When using `MockedProvider`, you will need to pass `addTypename` prop and set it to `false`. From the [doc](https://www.apollographql.com/docs/react/development-testing/testing/#addtypename), Apollo Client normally works by adding a `__typename` field to every object type requested. But when we are mocking, we're importing the raw queries _without typenames_ from the component files.

Note: Basic tests only tests the rendered **loading** state as the mock request does not yet resolve.

### Testing final states

To test final state, we will need to add a `wait` to wait for the fetch data promise to resolve, and to update the layout.

- https://www.apollographql.com/docs/react/development-testing/testing/#testing-final-state
- https://github.com/apollographql/apollo-client/issues/5920

## Resources

- [Apollo Testing React Components](https://www.apollographql.com/docs/react/development-testing/testing/)
