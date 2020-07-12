import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, {ButtonProps} from './Button';

test('renders learn react link', () => {
  const { getByText } = render(<Button>信息</Button>);
  const linkElement = getByText(/信息/i);
  expect(linkElement).toBeInTheDocument();
});
