import React from 'react';
import { render } from '@testing-library/react';
import { TestingLibraryExample } from './TestingLibraryExample';

describe('testing-library tests', () => {
  it('should render', () => {
    render(<TestingLibraryExample />);
  });
});
