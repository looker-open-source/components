"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _Filter = require("../../../../../../Filter");

var _filter_test_utils = require("../../../../../../utils/filter_test_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

describe('Interval Date filter test', function () {
  it('should render an Interval component', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: '3 days ago for 6 hours',
      name: "test",
      onChange: jest.fn(),
      field: _filter_test_utils.testField,
      expressionType: "date",
      config: _filter_test_utils.testFilterUIConfig,
      allowMultipleValues: true
    }));

    _react.fireEvent.click(_react.screen.getAllByRole('textbox')[1]);

    expect((0, _componentsTestUtils.getAllComboboxOptionText)()).toMatchInlineSnapshot("\n      Array [\n        \"seconds\",\n        \"minutes\",\n        \"hours\",\n        \"days\",\n        \"weeks\",\n        \"months\",\n        \"quarters\",\n        \"years\",\n      ]\n    ");
    (0, _componentsTestUtils.closeCombobox)();
  });
  it('should render an Interval component with Fiscal unit options', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: '3 days ago for 6 hours',
      name: "test",
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, _filter_test_utils.testField), {}, {
        fiscal_month_offset: 1
      }),
      expressionType: "date",
      config: _filter_test_utils.testFilterUIConfig,
      allowMultipleValues: true
    }));

    _react.fireEvent.click(_react.screen.getAllByRole('textbox')[1]);

    expect((0, _componentsTestUtils.getAllComboboxOptionText)()).toMatchInlineSnapshot("\n      Array [\n        \"seconds\",\n        \"minutes\",\n        \"hours\",\n        \"days\",\n        \"weeks\",\n        \"months\",\n        \"quarters\",\n        \"years\",\n        \"fiscal quarters\",\n        \"fiscal years\",\n      ]\n    ");
    (0, _componentsTestUtils.closeCombobox)();
  });
});
//# sourceMappingURL=Interval.spec.js.map