"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _componentsTestUtils = require("@looker/components-test-utils");
var _styledComponents = require("styled-components");
var _react2 = require("@testing-library/react");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _Visualization = require("./Visualization");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var CustomVis = function CustomVis() {
  var theme = (0, _styledComponents.useTheme)();
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("p", null, "Rendered Without Error!"), _react["default"].createElement("dl", null, _react["default"].createElement("dt", null, "Background Color:"), _react["default"].createElement("dd", null, theme.colors.background)));
};
jest.mock('@looker/visualizations-adapters', function () {
  return _objectSpread(_objectSpread({}, jest.requireActual('@looker/visualizations-adapters')), {}, {
    Unsupported: jest.fn().mockReturnValue(_react["default"].createElement(CustomVis, null))
  });
});
jest.mock('@looker/visualizations-table', function () {
  return _objectSpread(_objectSpread({}, jest.requireActual('@looker/visualizations-table')), {}, {
    Table: jest.fn().mockReturnValue(_react["default"].createElement(CustomVis, null))
  });
});
jest.mock('@looker/visualizations-visx', function () {
  return _objectSpread(_objectSpread({}, jest.requireActual('@looker/visualizations-visx')), {}, {
    Area: jest.fn().mockReturnValue(_react["default"].createElement(CustomVis, null)),
    Bar: jest.fn().mockReturnValue(_react["default"].createElement(CustomVis, null)),
    Column: jest.fn().mockReturnValue(_react["default"].createElement(CustomVis, null)),
    Line: jest.fn().mockReturnValue(_react["default"].createElement(CustomVis, null)),
    Pie: jest.fn().mockReturnValue(_react["default"].createElement(CustomVis, null)),
    Sparkline: jest.fn().mockReturnValue(_react["default"].createElement(CustomVis, null)),
    Scatter: jest.fn().mockReturnValue(_react["default"].createElement(CustomVis, null))
  });
});
jest.mock('@looker/visualizations-single-value', function () {
  return _objectSpread(_objectSpread({}, jest.requireActual('@looker/visualizations-single-value')), {}, {
    SingleValue: jest.fn().mockReturnValue(null)
  });
});
beforeEach(function () {
  jest.clearAllMocks();
});
describe('Visualization', function () {
  it('wraps itself in ComponentsProvider if rendered outside of theme context', function () {
    (0, _react2.render)(_react["default"].createElement(_Visualization.Visualization, {
      data: _visualizationsAdapters.mockData,
      fields: _visualizationsAdapters.mockFields,
      config: _visualizationsAdapters.mockBarConfig
    }));
    expect(_react2.screen.getByText('Rendered Without Error!')).toBeInTheDocument();
  });
});
describe('Visualization renders chart component based on type', function () {
  var visEntries = Object.entries(_Visualization.defaultChartTypeMap);
  test.each(visEntries)('render %i', function (type, Component) {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Visualization.Visualization, {
      data: _visualizationsAdapters.mockData,
      fields: _visualizationsAdapters.mockFields,
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockBarConfig), {}, {
        type: type
      })
    }));
    expect(Component).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=Visualization.spec.js.map