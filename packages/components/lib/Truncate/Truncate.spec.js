import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { act, fireEvent, screen } from '@testing-library/react';
import { Box2 } from '../Layout/Box2';
import { Truncate } from './Truncate';
const longLabel = 'This is a long label that should trigger truncation';
describe('Truncate', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  const runTimers = () => act(() => {
    jest.runOnlyPendingTimers();
  });

  test('Basic', () => {
    renderWithTheme(React.createElement(Truncate, null, "Hello world"));
    const trigger = screen.getByText('Hello world');
    fireEvent.mouseOver(trigger);
    runTimers();
    const tooltip = screen.getAllByText('Hello world');
    expect(tooltip.length).toEqual(1);
  });
  test.skip('Truncate active', () => {
    renderWithTheme(React.createElement(Box2, {
      width: "5rem"
    }, React.createElement(Truncate, null, longLabel)));
    const trigger = screen.getAllByText(longLabel)[0];
    fireEvent.mouseOver(trigger);
    runTimers();
    const tooltip = screen.getAllByText(longLabel)[1];
    expect(tooltip).toBeVisible();
    fireEvent.mouseOut(tooltip);
    runTimers();
    expect(tooltip).not.toBeInTheDocument();
  });
  test('Truncate detail', () => {
    renderWithTheme(React.createElement(Truncate, {
      description: "description text"
    }, "Hello World"));
    const trigger = screen.getByText('Hello World');
    fireEvent.mouseOver(trigger);
    runTimers();
    const tooltip = screen.getByText('description text');
    expect(tooltip).toBeVisible();
    fireEvent.mouseOut(tooltip);
    runTimers();
    expect(tooltip).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=Truncate.spec.js.map