import _defineProperty from "@babel/runtime/helpers/defineProperty";
let _ = t => t,
  _t;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { screen } from '@testing-library/react';
import React from 'react';
import styled, { ThemeProvider, useTheme } from 'styled-components';
import { renderWithTheme } from '../../../components-test-utils/src';
import { reset } from './reset';
describe('reset', () => {
  test('resetFn', () => {
    const TestWrapper = ({
      children
    }) => {
      const theme = useTheme();
      return React.createElement(ThemeProvider, {
        theme: _objectSpread({}, theme)
      }, children);
    };
    const Test = styled.p.withConfig({
      displayName: "resetspec__Test",
      componentId: "sc-1psqag3-0"
    })(_t || (_t = _`
      ${0}
    `), reset);
    renderWithTheme(React.createElement(TestWrapper, null, React.createElement(Test, null, "Find me")));
    const test = screen.getByText('Find me');
    expect(test).toHaveStyle('font-family: inherit;');
  });
});
//# sourceMappingURL=reset.spec.js.map