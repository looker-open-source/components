"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _componentsTestUtils = require("@looker/components-test-utils");
var _ = require(".");
var _fixtures = require("../fixtures");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('StaticTable', function () {
  it('renders StaticTable', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.StaticTable, {
      data: _fixtures.mockData,
      fields: _fixtures.mockFields,
      config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        type: 'table'
      })
    }));

    expect(_react2.screen.getAllByText('Orders')[0].tagName).toEqual('TH');
    expect(_react2.screen.getAllByText('California')[0].tagName).toEqual('TD');
  });
});
//# sourceMappingURL=StaticTable.spec.js.map