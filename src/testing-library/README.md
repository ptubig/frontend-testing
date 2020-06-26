# Testing Library

The [guiding principle](https://testing-library.com/docs/guiding-principles).

[testing-library](https://testing-library.com/docs/dom-testing-library/intro) follows the black box testing paradigm where testing is focused on behavior. This testing ideally avoids knowing any implementationd details on how a component is built. The inner workings is "black boxed" to us.

testing-library will rely on the final product where we would query against DOM nodes (vs querying against React component instances).

## React

The one thing we will always do is render a React component using the [render](https://testing-library.com/docs/react-testing-library/api#render) function.

All queries are available on the return object for a `render` function.

```
const { container, findByTestId, ...queries } = render(<Component />);
```

One initial test is to see if an exception occurs when rendering a component.

```
it('should render', () => {
  render(<Component />);
});
```

## Queries

- [testing-library queries](https://testing-library.com/docs/dom-testing-library/api-queries) can be found here.
- [queries cheetsheet](https://testing-library.com/docs/react-testing-library/cheatsheet#queries)

Here is the order one should be querying [sorted by priority](https://testing-library.com/docs/guide-which-query).

- **role**: Elements exposed in the accessibility tree.
- **label text**: Good for querying for form fields
- **placeholder text**: An alternative for label (if label doesn't exist)
- **text**: #1 method to use to query for most non-interactive elements (ie. divs and spans)
- **display value**: Current value of a form element. May be usefule when navigating a page with filled-in values.
- **alt text**: Querying for elements that are `img`, `area`, `input`
- **title**: Not very common
- **test ids**: Last resort. The user cannot see (or hear) these. Only recommended if it doesn't make sense you can't match by role or text (ie. text is dynamic).
