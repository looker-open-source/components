import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { useWindow, useToggle } from './';
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
jest.mock('lodash/throttle', () => fn => fn);
beforeEach(() => {
  jest.useFakeTimers();
  Element.prototype.getBoundingClientRect = jest.fn(() => {
    return {
      bottom: 0,
      height: 342,
      left: 0,
      right: 0,
      toJSON: jest.fn(),
      top: 0,
      width: 260,
      x: 0,
      y: 0
    };
  });
});
afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  jest.resetAllMocks();
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect;
});
const arr3000 = Array.from(Array(3000), (_, i) => i);

const WindowedComponent = ({
  children
}) => {
  const {
    value,
    toggle
  } = useToggle(true);
  const {
    after,
    before,
    end,
    start,
    ref
  } = useWindow({
    enabled: value,
    itemCount: 3000,
    itemHeight: 87,
    spacerTag: 'li'
  });
  return React.createElement(React.Fragment, null, React.createElement("ul", {
    ref: ref,
    "data-testid": "list"
  }, before, children.slice(start, end + 1), after), React.createElement("button", {
    onClick: toggle
  }, "toggle"));
};

describe('useWindow', () => {
  test('returns placeholders and children in "window"', () => {
    render(React.createElement(WindowedComponent, null, arr3000.map(num => React.createElement("li", {
      key: num
    }, num))));
    expect(screen.getByText('0')).toBeVisible();
    expect(screen.getByText('9')).toBeVisible();
    expect(screen.queryByText('10')).not.toBeInTheDocument();
    expect(screen.queryByTestId('before')).not.toBeInTheDocument();
    expect(screen.getByTestId('after')).toHaveStyle('height: 260130px;');
  });
  test('updates window on scroll', () => {
    render(React.createElement(WindowedComponent, null, arr3000.map(num => React.createElement("li", {
      key: num
    }, num))));
    const list = screen.getByTestId('list');
    Object.defineProperty(list, 'scrollTop', {
      value: 1514,
      writable: true
    });
    jest.runAllTimers();
    fireEvent.scroll(list);
    expect(screen.queryByText('11')).not.toBeInTheDocument();
    expect(screen.getByText('12')).toBeVisible();
    expect(screen.getByText('27')).toBeVisible();
    expect(screen.queryByText('28')).not.toBeInTheDocument();
    expect(screen.getByTestId('before')).toHaveStyle('height: 1044px;');
    expect(screen.getByTestId('after')).toHaveStyle('height: 258564px;');
  });
  test('updates window on scroll (to end)', () => {
    render(React.createElement(WindowedComponent, null, arr3000.map(num => React.createElement("li", {
      key: num
    }, num))));
    const list = screen.getByTestId('list');
    Object.defineProperty(list, 'scrollTop', {
      value: 260658,
      writable: true
    });
    jest.runAllTimers();
    fireEvent.scroll(list);
    expect(screen.queryByText('2990')).not.toBeInTheDocument();
    expect(screen.getByText('2991')).toBeVisible();
    expect(screen.getByText('2999')).toBeVisible();
    expect(screen.getByTestId('before')).toHaveStyle('height: 260217px;');
    expect(screen.queryByTestId('after')).not.toBeInTheDocument();
  });
  test('updates window on resize', () => {
    render(React.createElement(WindowedComponent, null, arr3000.map(num => React.createElement("li", {
      key: num
    }, num))));
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        bottom: 0,
        height: 873,
        left: 0,
        right: 0,
        toJSON: jest.fn(),
        top: 0,
        width: 260,
        x: 0,
        y: 0
      };
    });
    fireEvent(window, new Event('resize'));
    expect(screen.getByText('0')).toBeVisible();
    expect(screen.getByText('16')).toBeVisible();
    expect(screen.queryByText('17')).not.toBeInTheDocument();
    expect(screen.queryByTestId('before')).not.toBeInTheDocument();
    expect(screen.getByTestId('after')).toHaveStyle('height: 259521px;');
  });
});
//# sourceMappingURL=useWindow.spec.js.map