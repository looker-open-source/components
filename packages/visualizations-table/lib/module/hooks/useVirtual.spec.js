

import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen } from '@testing-library/react';
import { useVirtual } from './useVirtual';
const wrapper = ({
  children
}) => React.createElement(React.Fragment, null, children);
const mockDomRect = {
  x: 146,
  y: 50,
  width: 440,
  height: 50,
  top: 50,
  right: 586,
  bottom: 290,
  left: 146,
  toJSON: () => ({})
};
it('Configures virtual scrolling object', () => {
  const {
    result
  } = renderHook(() => useVirtual({
    data: Array(15).fill({}),
    scrollContainer: {
      current: {
        addEventListener: () => null,
        removeEventListener: () => null,
        getBoundingClientRect: () => mockDomRect
      }
    }
  }), {
    wrapper
  });
  expect(result.current.virtualRows.length).toEqual(15);
});
it('Simulates scroll height with OffsetBottom component', () => {
  const {
    result
  } = renderHook(() => useVirtual({
    data: Array(30).fill({}),
    scrollContainer: {
      current: {
        addEventListener: () => null,
        removeEventListener: () => null,
        getBoundingClientRect: () => mockDomRect
      }
    }
  }), {
    wrapper
  });
  const {
    OffsetBottom
  } = result.current;
  const MockTableComponent = () => React.createElement("table", null, React.createElement("tbody", null, React.createElement(OffsetBottom, null)));
  render(React.createElement(MockTableComponent, null));
  const spacer = screen.getByRole('cell');
  expect(spacer).toHaveAttribute('height', '150');
});
it('Simulates scroll height with OffsetTop component', () => {
  const {
    result
  } = renderHook(() => useVirtual({
    data: Array(30).fill({}),
    scrollContainer: {
      current: {
        addEventListener: () => null,
        removeEventListener: () => null,
        getBoundingClientRect: () => mockDomRect
      }
    }
  }), {
    wrapper
  });
  const {
    OffsetTop
  } = result.current;
  const MockTableComponent = () => React.createElement("table", null, React.createElement("tbody", null, React.createElement(OffsetTop, null)));
  render(React.createElement(MockTableComponent, null));
  const spacer = screen.getByRole('cell');
  expect(spacer).toHaveAttribute('height', '120');
});
//# sourceMappingURL=useVirtual.spec.js.map