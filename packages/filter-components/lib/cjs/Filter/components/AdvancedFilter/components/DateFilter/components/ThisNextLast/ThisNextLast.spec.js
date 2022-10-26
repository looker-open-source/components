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

describe('This Date filter test', function () {
  var expression = 'this year';
  it('filter is set to this date filter type', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: expression,
      name: "test",
      onChange: jest.fn(),
      field: _filter_test_utils.testField,
      expressionType: "date",
      config: _filter_test_utils.testFilterUIConfig,
      allowMultipleValues: true
    }));
    expect(_react.screen.getAllByRole('textbox')[0]).toHaveValue('is this');
  });
  it('should render a ThisNextLast component', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: expression,
      name: "test",
      onChange: jest.fn(),
      field: _filter_test_utils.testField,
      expressionType: "date",
      config: _filter_test_utils.testFilterUIConfig,
      allowMultipleValues: true
    }));

    var unitsDropdown = _react.screen.getAllByRole('textbox')[1];

    expect(unitsDropdown).toHaveValue('year');

    _react.fireEvent.click(unitsDropdown);

    expect((0, _componentsTestUtils.getAllComboboxOptionText)()).toMatchInlineSnapshot("\n      Array [\n        \"day\",\n        \"week\",\n        \"month\",\n        \"quarter\",\n        \"year\",\n      ]\n    ");
    (0, _componentsTestUtils.closeCombobox)();
  });
});
describe('Last Date filter test', function () {
  it('filter is set to last date filter type', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: 'last fiscal year',
      name: "test",
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, _filter_test_utils.testField), {}, {
        type: 'date_fiscal_quarter'
      }),
      expressionType: "date",
      config: _filter_test_utils.testFilterUIConfig,
      allowMultipleValues: true
    }));
    expect(_react.screen.getAllByRole('textbox')[0]).toHaveValue('is previous');
  });
  it('should render a ThisNextLast Last component with Fiscal unit options', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: 'last fiscal year',
      name: "test",
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, _filter_test_utils.testField), {}, {
        type: 'date_fiscal_quarter'
      }),
      expressionType: "date",
      config: _filter_test_utils.testFilterUIConfig,
      allowMultipleValues: true
    }));

    var unitsDropdown = _react.screen.getAllByRole('textbox')[1];

    expect(unitsDropdown).toHaveValue('fiscal year');

    _react.fireEvent.click(unitsDropdown);

    expect((0, _componentsTestUtils.getAllComboboxOptionText)()).toMatchInlineSnapshot("\n      Array [\n        \"second\",\n        \"minute\",\n        \"hour\",\n        \"day\",\n        \"week\",\n        \"month\",\n        \"quarter\",\n        \"year\",\n        \"fiscal quarter\",\n        \"fiscal year\",\n      ]\n    ");
    (0, _componentsTestUtils.closeCombobox)();
  });
});
describe('Next Date filter test', function () {
  it('filter is set to next date filter type', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: 'next week',
      name: "test",
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, _filter_test_utils.testField), {}, {
        type: 'date_fiscal_quarter'
      }),
      expressionType: "date",
      config: _filter_test_utils.testFilterUIConfig,
      allowMultipleValues: true
    }));
    expect(_react.screen.getAllByRole('textbox')[0]).toHaveValue('is next');
  });
  it('should render a ThisNextLast Next component with Fiscal unit options', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: 'next week',
      name: "test",
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, _filter_test_utils.testField), {}, {
        type: 'date_fiscal_quarter'
      }),
      expressionType: "date",
      config: _filter_test_utils.testFilterUIConfig,
      allowMultipleValues: true
    }));

    var unitsDropdown = _react.screen.getAllByRole('textbox')[1];

    expect(unitsDropdown).toHaveValue('week');

    _react.fireEvent.click(unitsDropdown);

    expect((0, _componentsTestUtils.getAllComboboxOptionText)()).toMatchInlineSnapshot("\n      Array [\n        \"day\",\n        \"week\",\n        \"month\",\n        \"quarter\",\n        \"year\",\n        \"fiscal quarter\",\n        \"fiscal year\",\n      ]\n    ");
    (0, _componentsTestUtils.closeCombobox)();
  });
});
//# sourceMappingURL=ThisNextLast.spec.js.map