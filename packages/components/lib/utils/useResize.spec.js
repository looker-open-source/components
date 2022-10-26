import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { render } from '@testing-library/react';
import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { useResize, SafeSSRProvider } from './';
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

const ResizeComponent = ({
  callback
}) => {
  const [element, ref] = useState(null);
  useResize(element, callback);
  return React.createElement("div", {
    ref: ref
  });
};

describe('useResize', () => {
  test('calls the callback', () => {
    const callback = jest.fn();
    render(React.createElement(ResizeComponent, {
      callback: callback
    }));
    expect(callback).toHaveBeenCalledTimes(1);
  });
  test('No useLayoutEffect warning with SSR', () => {
    const globalConsole = global.console;
    global.console = _objectSpread(_objectSpread({}, globalConsole), {}, {
      error: message => {
        throw new Error(message);
      }
    });
    const callback = jest.fn();
    ReactDOMServer.renderToString(React.createElement(SafeSSRProvider, null, React.createElement(ResizeComponent, {
      callback: callback
    })));
    expect(callback).not.toHaveBeenCalled();
    global.console = globalConsole;
  });
});
//# sourceMappingURL=useResize.spec.js.map