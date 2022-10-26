import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { useBoundedRipple } from './useBoundedRipple';

const RippleComponent = props => {
  const {
    callbacks: {
      startBG,
      endBG,
      startFG,
      endFG
    },
    className,
    ref,
    style
  } = useBoundedRipple(props);
  return React.createElement("div", {
    ref: ref
  }, React.createElement("div", {
    "data-testid": "startBG",
    onClick: startBG
  }), React.createElement("div", {
    "data-testid": "endBG",
    onClick: endBG
  }), React.createElement("div", {
    "data-testid": "startFG",
    onClick: startFG
  }), React.createElement("div", {
    "data-testid": "endFG",
    onClick: endFG
  }), React.createElement("div", {
    "data-testid": "className"
  }, className), React.createElement("div", {
    style: style
  }, "style"));
};

const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
beforeEach(() => {
  Element.prototype.getBoundingClientRect = jest.fn(() => {
    return {
      bottom: 0,
      height: 30,
      left: 0,
      right: 0,
      toJSON: jest.fn(),
      top: 0,
      width: 360,
      x: 0,
      y: 0
    };
  });
});
afterEach(() => {
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect;
});
describe('useRipple', () => {
  test('bounded animation values', () => {
    renderWithTheme(React.createElement(RippleComponent, null));
    expect(screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'hidden',
      '--ripple-scale-end': '12.041594578792294',
      '--ripple-scale-start': '1',
      '--ripple-size': '30px',
      '--ripple-translate': '165px, 0'
    });
  });
});
//# sourceMappingURL=useBoundedRipple.spec.js.map