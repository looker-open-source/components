import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { useTheme } from 'styled-components';
import { render, screen } from '@testing-library/react';
import { mockBarConfig, mockFields, mockData } from '@looker/visualizations-adapters';
import { Visualization, defaultChartTypeMap } from './Visualization';
const CustomVis = () => {
  const theme = useTheme();
  return React.createElement(React.Fragment, null, React.createElement("p", null, "Rendered Without Error!"), React.createElement("dl", null, React.createElement("dt", null, "Background Color:"), React.createElement("dd", null, theme.colors.background)));
};
jest.mock('@looker/visualizations-adapters', () => _objectSpread(_objectSpread({}, jest.requireActual('@looker/visualizations-adapters')), {}, {
  Unsupported: jest.fn().mockReturnValue(React.createElement(CustomVis, null))
}));
jest.mock('@looker/visualizations-table', () => _objectSpread(_objectSpread({}, jest.requireActual('@looker/visualizations-table')), {}, {
  Table: jest.fn().mockReturnValue(React.createElement(CustomVis, null))
}));
jest.mock('@looker/visualizations-visx', () => _objectSpread(_objectSpread({}, jest.requireActual('@looker/visualizations-visx')), {}, {
  Area: jest.fn().mockReturnValue(React.createElement(CustomVis, null)),
  Bar: jest.fn().mockReturnValue(React.createElement(CustomVis, null)),
  Column: jest.fn().mockReturnValue(React.createElement(CustomVis, null)),
  Line: jest.fn().mockReturnValue(React.createElement(CustomVis, null)),
  Pie: jest.fn().mockReturnValue(React.createElement(CustomVis, null)),
  Sparkline: jest.fn().mockReturnValue(React.createElement(CustomVis, null)),
  Scatter: jest.fn().mockReturnValue(React.createElement(CustomVis, null))
}));
jest.mock('@looker/visualizations-single-value', () => _objectSpread(_objectSpread({}, jest.requireActual('@looker/visualizations-single-value')), {}, {
  SingleValue: jest.fn().mockReturnValue(null)
}));
beforeEach(() => {
  jest.clearAllMocks();
});
describe('Visualization', () => {
  it('wraps itself in ComponentsProvider if rendered outside of theme context', () => {
    render(React.createElement(Visualization, {
      data: mockData,
      fields: mockFields,
      config: mockBarConfig
    }));
    expect(screen.getByText('Rendered Without Error!')).toBeInTheDocument();
  });
});
describe('Visualization renders chart component based on type', () => {
  const visEntries = Object.entries(defaultChartTypeMap);
  test.each(visEntries)('render %i', (type, Component) => {
    renderWithTheme(React.createElement(Visualization, {
      data: mockData,
      fields: mockFields,
      config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
        type
      })
    }));
    expect(Component).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=Visualization.spec.js.map