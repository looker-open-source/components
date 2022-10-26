import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { screen, render } from '@testing-library/react';
import { useListWidths } from './useListWidths';
const getBoundingClientRectMock = jest.fn();
const mockWrapper = {
  getBoundingClientRect: getBoundingClientRectMock
};

function TestComponent(props) {
  const {
    minWidth,
    width
  } = useListWidths(_objectSpread(_objectSpread({}, props), {}, {
    wrapperElement: mockWrapper
  }));
  return React.createElement("div", null, React.createElement("span", {
    "data-testid": "minWidth"
  }, minWidth), React.createElement("span", {
    "data-testid": "width"
  }, width));
}

describe('useListWidths', () => {
  beforeEach(() => {
    getBoundingClientRectMock.mockImplementation(() => ({
      width: 1234
    }));
  });
  afterEach(() => {
    getBoundingClientRectMock.mockClear();
  });
  test('getBoundingClientRect is not called when list is closed', () => {
    render(React.createElement(TestComponent, null));
    expect(screen.getByTestId('width')).toHaveTextContent('auto');
    expect(screen.getByTestId('minWidth')).toHaveTextContent('');
    expect(mockWrapper.getBoundingClientRect).not.toHaveBeenCalled();
  });
  test('getBoundingClientRect is not called when width prop is defined (except auto)', () => {
    render(React.createElement(TestComponent, {
      isVisible: true,
      width: "90vw"
    }));
    expect(screen.getByTestId('width')).toHaveTextContent('90vw');
    expect(screen.getByTestId('minWidth')).toHaveTextContent('');
    expect(mockWrapper.getBoundingClientRect).not.toHaveBeenCalled();
  });
  test('getBoundingClientRect is not called when width prop is auto and minWidth is defined', () => {
    render(React.createElement(TestComponent, {
      isVisible: true,
      width: "auto",
      minWidth: 101
    }));
    expect(screen.getByTestId('width')).toHaveTextContent('auto');
    expect(screen.getByTestId('minWidth')).toHaveTextContent('101');
    expect(mockWrapper.getBoundingClientRect).not.toHaveBeenCalled();
  });
  test('getBoundingClientRect is called when width prop is undefined', () => {
    render(React.createElement(TestComponent, {
      isVisible: true
    }));
    expect(screen.getByTestId('width')).toHaveTextContent('1234');
    expect(screen.getByTestId('minWidth')).toHaveTextContent('');
    expect(mockWrapper.getBoundingClientRect).toHaveBeenCalledTimes(1);
  });
  test('getBoundingClientRect is called when width prop is auto', () => {
    render(React.createElement(TestComponent, {
      isVisible: true,
      width: "auto"
    }));
    expect(screen.getByTestId('width')).toHaveTextContent('auto');
    expect(screen.getByTestId('minWidth')).toHaveTextContent('1234');
    expect(mockWrapper.getBoundingClientRect).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=useListWidths.spec.js.map