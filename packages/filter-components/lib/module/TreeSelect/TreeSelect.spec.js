

import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import WithoutDropdown from './stories/WithoutDropdown';
import Basic from './stories/Basic';
test('without dropdown', () => {
  const onSelectedFieldChangeMock = jest.fn();
  renderWithTheme(React.createElement(WithoutDropdown, {
    searchInputValue: "",
    onSelectedFieldChange: onSelectedFieldChangeMock
  }));
  const orders = screen.getByText('Orders');
  expect(orders).toBeVisible();
  expect(screen.getByText('Users')).toBeVisible();

  fireEvent.click(orders);
  const createdDate = screen.getByText('Created Date');
  expect(createdDate).toBeVisible();

  fireEvent.click(createdDate);
  expect(screen.getByText('Created Month')).toBeVisible();
  const input = screen.getByRole('textbox');
  fireEvent.change(input, {
    target: {
      value: 'zip'
    }
  });

  expect(screen.queryByText('Orders')).not.toBeInTheDocument();
  expect(screen.getByText('Users')).toBeVisible();
  const zip = screen.getByText('Zip');
  expect(zip).toBeVisible();
  expect(zip).toHaveStyle({
    textDecoration: 'underline'
  });
  fireEvent.click(zip);
  expect(onSelectedFieldChangeMock.mock.calls[0][0]).toMatchObject({
    field: 'users.zip'
  });
});
test('with dropdown', () => {
  const onSelectedFieldChangeMock = jest.fn();
  renderWithTheme(React.createElement(Basic, {
    searchInputValue: "",
    onSelectedFieldChange: onSelectedFieldChangeMock
  }));
  expect(screen.queryByText('Orders')).not.toBeInTheDocument();
  const input = screen.getByRole('textbox');
  fireEvent.click(input);

  fireEvent.click(screen.getByText('Orders'));
  fireEvent.click(screen.getByText('Created Date'));
  expect(screen.getByText('Created Month')).toBeVisible();
  fireEvent.change(input, {
    target: {
      value: 'zip'
    }
  });
  fireEvent.click(screen.getByText('Zip'));
  expect(onSelectedFieldChangeMock.mock.calls[0][0]).toMatchObject({
    field: 'users.zip'
  });
});
test('no matching fields', () => {
  const onSelectedFieldChangeMock = jest.fn();
  renderWithTheme(React.createElement(WithoutDropdown, {
    searchInputValue: "",
    onSelectedFieldChange: onSelectedFieldChangeMock
  }));
  const input = screen.getByRole('textbox');
  fireEvent.change(input, {
    target: {
      value: 'foo'
    }
  });
  expect(screen.getByText('No matching fields')).toBeVisible();
});
//# sourceMappingURL=TreeSelect.spec.js.map