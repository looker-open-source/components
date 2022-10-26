import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { act, fireEvent, screen } from '@testing-library/react';
import { renderWithTheme, withThemeProvider } from '@looker/components-test-utils';
import { RangeSlider } from './RangeSlider';
import { RerenderRepro } from './RangeSlider.stories';
const globalConsole = global.console;
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
beforeEach(() => {
  jest.useFakeTimers();
  global.console = _objectSpread(_objectSpread({}, globalConsole), {}, {
    warn: jest.fn()
  });
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
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  jest.resetAllMocks();
  global.console = globalConsole;
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect;
});

const runTimers = () => act(() => {
  jest.runOnlyPendingTimers();
});

test('it selects the entire range by default', () => {
  const handleChange = jest.fn();
  renderWithTheme(React.createElement(RangeSlider, {
    onChange: handleChange,
    min: 5,
    max: 100
  }));
  const minThumb = screen.getByLabelText('Minimum Value');
  const maxThumb = screen.getByLabelText('Maximum Value');
  expect(minThumb).toHaveAttribute('aria-valuenow', '5');
  expect(maxThumb).toHaveAttribute('aria-valuenow', '100');
});
test('warns the developer if value prop falls outside of possible min/max range', () => {
  expect(console.warn).not.toHaveBeenCalled();
  const handleChange = jest.fn();
  const {
    rerender
  } = renderWithTheme(React.createElement(RangeSlider, {
    value: [0, 1000],
    min: 10,
    max: 20,
    onChange: handleChange
  }));
  expect(console.warn).toHaveBeenCalled();
  expect(handleChange).toHaveBeenCalledWith([10, 20]);
  rerender(withThemeProvider(React.createElement(RangeSlider, {
    onChange: handleChange,
    min: 10,
    max: 20,
    value: [-1, 1]
  })));
  expect(handleChange).toHaveBeenCalledWith([10, 10]);
});
test('fires onChange callback on mouseMove', () => {
  const handleChange = jest.fn();
  renderWithTheme(React.createElement(RangeSlider, {
    onChange: handleChange
  }));
  const wrapper = screen.getByTestId('range-slider-wrapper');
  fireEvent.mouseDown(wrapper);
  runTimers();
  fireEvent.mouseMove(wrapper, {
    clientX: 100,
    clientY: 10
  });
  fireEvent.mouseUp(wrapper);
  runTimers();
  expect(handleChange).toHaveBeenLastCalledWith([3, 10]);
});
test('fires onChange callback on touchMove', () => {
  const handleChange = jest.fn();
  renderWithTheme(React.createElement(RangeSlider, {
    onChange: handleChange
  }));
  const wrapper = screen.getByTestId('range-slider-wrapper');
  fireEvent.touchStart(wrapper);
  runTimers();
  fireEvent.touchMove(wrapper, {
    touches: [{
      clientX: 100,
      clientY: 10
    }]
  });
  fireEvent.touchEnd(wrapper);
  runTimers();
  expect(handleChange).toHaveBeenLastCalledWith([3, 10]);
});
test('increments point by STEP value during keyboard navigation', () => {
  const handleChange = jest.fn();
  renderWithTheme(React.createElement(RangeSlider, {
    onChange: handleChange,
    min: 0,
    max: 100,
    step: 10
  }));
  const minThumb = screen.getByLabelText('Minimum Value');
  const maxThumb = screen.getByLabelText('Maximum Value');
  expect(minThumb).toHaveAttribute('aria-valuenow', '0');
  expect(maxThumb).toHaveAttribute('aria-valuenow', '100');
  minThumb.focus();
  fireEvent.keyDown(document.activeElement, {
    key: 'ArrowUp'
  });
  expect(handleChange).toHaveBeenLastCalledWith([10, 100]);
  fireEvent.keyDown(document.activeElement, {
    key: 'ArrowRight'
  });
  expect(handleChange).toHaveBeenLastCalledWith([20, 100]);
  maxThumb.focus();
  fireEvent.keyDown(document.activeElement, {
    key: 'ArrowLeft'
  });
  expect(handleChange).toHaveBeenLastCalledWith([20, 90]);
  fireEvent.keyDown(document.activeElement, {
    key: 'ArrowDown'
  });
  expect(handleChange).toHaveBeenLastCalledWith([20, 80]);
});
test('prevents value from going outside of min/max range', () => {
  const handleChange = jest.fn();
  renderWithTheme(React.createElement(RangeSlider, {
    onChange: handleChange,
    min: 9,
    max: 10,
    value: [0, 100]
  }));
  expect(handleChange).toHaveBeenCalledWith([9, 10]);
});
describe('readOnly prop', () => {
  test('readOnly component does not respond to MOUSE input', () => {
    const handleChange = jest.fn();
    renderWithTheme(React.createElement(RangeSlider, {
      onChange: handleChange,
      readOnly: true
    }));
    const wrapper = screen.getByTestId('range-slider-wrapper');
    fireEvent.mouseDown(wrapper);
    runTimers();
    fireEvent.mouseMove(wrapper, {
      clientX: 100,
      clientY: 10
    });
    expect(handleChange).not.toHaveBeenCalled();
  });
  test('readOnly component does not respond to KEYBOARD input', () => {
    const handleChange = jest.fn();
    renderWithTheme(React.createElement(RangeSlider, {
      onChange: handleChange,
      min: 0,
      max: 10,
      readOnly: true
    }));
    const minThumb = screen.getByLabelText('Minimum Value');
    minThumb.focus();
    fireEvent.keyDown(document.activeElement, {
      key: 'ArrowUp'
    });
    expect(handleChange).not.toHaveBeenCalled();
  });
});
describe('disabled prop', () => {
  test('disabled component does not respond to MOUSE input', () => {
    const handleChange = jest.fn();
    renderWithTheme(React.createElement(RangeSlider, {
      onChange: handleChange,
      disabled: true
    }));
    const wrapper = screen.getByTestId('range-slider-wrapper');
    fireEvent.mouseDown(wrapper);
    runTimers();
    fireEvent.mouseMove(wrapper, {
      clientX: 100,
      clientY: 10
    });
    expect(handleChange).not.toHaveBeenCalled();
  });
  test('disabled component does not respond to KEYBOARD input', () => {
    const handleChange = jest.fn();
    renderWithTheme(React.createElement(RangeSlider, {
      onChange: handleChange,
      min: 0,
      max: 10,
      disabled: true
    }));
    const minThumb = screen.getByLabelText('Minimum Value');
    minThumb.focus();
    fireEvent.keyDown(document.activeElement, {
      key: 'ArrowUp'
    });
    expect(handleChange).not.toHaveBeenCalled();
  });
  test('disabled component does not respond to TOUCH input', () => {
    const handleChange = jest.fn();
    renderWithTheme(React.createElement(RangeSlider, {
      onChange: handleChange,
      disabled: true
    }));
    const wrapper = screen.getByTestId('range-slider-wrapper');
    fireEvent.touchStart(wrapper);
    runTimers();
    fireEvent.touchMove(wrapper, {
      touches: [{
        clientX: 100,
        clientY: 10
      }]
    });
    expect(handleChange).not.toHaveBeenCalled();
  });
  test('intermediate re-render does not cause value to revert', () => {
    renderWithTheme(React.createElement(RerenderRepro, null));
    const minThumb = screen.getByLabelText('Minimum Value');
    const maxThumb = screen.getByLabelText('Maximum Value');
    expect(minThumb).toHaveAttribute('aria-valuenow', '0');
    expect(maxThumb).toHaveAttribute('aria-valuenow', '10');
    maxThumb.focus();
    fireEvent.keyDown(maxThumb, {
      key: 'ArrowRight'
    });
    expect(minThumb).toHaveAttribute('aria-valuenow', '0');
    expect(maxThumb).toHaveAttribute('aria-valuenow', '11');
  });
});
//# sourceMappingURL=RangeSlider.spec.js.map