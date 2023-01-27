

import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { Box2 } from '../Layout/Box2';
import { isOverflowing } from '../utils';
import { Truncate } from './Truncate';

jest.mock('../utils/isOverflowing', () => ({
  isOverflowing: jest.fn()
}));
const longLabel = 'This is a long label that should trigger truncation';
describe('Truncate', () => {
  test('Basic', async () => {
    ;
    isOverflowing.mockImplementation(() => false);
    renderWithTheme(React.createElement(Truncate, null, "Hello world"));
    const trigger = screen.getByText('Hello world');
    fireEvent.mouseOver(trigger);
    const tooltip = screen.queryByRole('tooltip');
    expect(tooltip).not.toBeInTheDocument();
  });
  test('Truncate active', async () => {
    ;
    isOverflowing.mockImplementation(() => true);
    renderWithTheme(React.createElement(Box2, {
      width: "5rem"
    }, React.createElement(Truncate, null, longLabel)));
    const trigger = screen.getAllByText(longLabel)[0];
    fireEvent.mouseOver(trigger);
    const tooltip = screen.getAllByText(longLabel)[1];
    await waitFor(() => expect(tooltip).toBeVisible());
    fireEvent.mouseOut(tooltip);
    await waitForElementToBeRemoved(() => screen.queryByRole('tooltip'));
  });
  test('Truncate detail', async () => {
    ;
    isOverflowing.mockImplementation(() => true);
    renderWithTheme(React.createElement(Truncate, {
      description: "description text"
    }, "Hello World"));
    const trigger = screen.getByText('Hello World');
    fireEvent.mouseOver(trigger);
    const tooltip = screen.getByText('description text');
    await waitFor(() => expect(tooltip).toBeVisible());
    fireEvent.mouseOut(tooltip);
    await waitForElementToBeRemoved(() => screen.queryByRole('tooltip'));
  });
});
//# sourceMappingURL=Truncate.spec.js.map