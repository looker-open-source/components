"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _Filter = require("../../../../../../Filter");

var _filter_test_utils = require("../../../../../../utils/filter_test_utils");

var _BeforeAfter = require("./BeforeAfter");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

describe('BeforeAfter Date filter test', function () {
  it('should render a BeforeAfter component', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: 'before 3 day ago',
      name: "test",
      onChange: jest.fn(),
      field: _filter_test_utils.testField,
      expressionType: "date",
      config: _filter_test_utils.testFilterUIConfig,
      allowMultipleValues: true
    }));

    var inputs = _react.screen.getAllByRole('textbox');

    expect(inputs[0]).toHaveValue('is before');
    expect(inputs[1]).toHaveValue('(relative)');
    expect(inputs[2]).toHaveValue('days ago');
    expect(_react.screen.queryByTestId('number-value')).toHaveValue(3);

    _react.fireEvent.click(inputs[2]);

    expect((0, _componentsTestUtils.getAllComboboxOptionText)()).toMatchInlineSnapshot("\n      Array [\n        \"years ago\",\n        \"quarters ago\",\n        \"months ago\",\n        \"weeks ago\",\n        \"days ago\",\n        \"hours ago\",\n        \"minutes ago\",\n        \"seconds ago\",\n        \"now\",\n        \"seconds from now\",\n        \"minutes from now\",\n        \"hours from now\",\n        \"days from now\",\n        \"weeks from now\",\n        \"months from now\",\n        \"quarters from now\",\n        \"years from now\",\n      ]\n    ");
    (0, _componentsTestUtils.closeCombobox)();
  });
  it('should render a BeforeAfter component with FiscalUnit options', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: 'before 3 days ago',
      name: "test",
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, _filter_test_utils.testField), {}, {
        fiscal_month_offset: 1
      }),
      expressionType: "date",
      config: _filter_test_utils.testFilterUIConfig,
      allowMultipleValues: true
    }));

    _react.fireEvent.click(_react.screen.getAllByRole('textbox')[2]);

    expect((0, _componentsTestUtils.getAllComboboxOptionText)()).toMatchInlineSnapshot("\n      Array [\n        \"fiscal years ago\",\n        \"fiscal quarters ago\",\n        \"years ago\",\n        \"quarters ago\",\n        \"months ago\",\n        \"weeks ago\",\n        \"days ago\",\n        \"hours ago\",\n        \"minutes ago\",\n        \"seconds ago\",\n        \"now\",\n        \"seconds from now\",\n        \"minutes from now\",\n        \"hours from now\",\n        \"days from now\",\n        \"weeks from now\",\n        \"months from now\",\n        \"quarters from now\",\n        \"years from now\",\n        \"fiscal quarter from now\",\n        \"fiscal years from now\",\n      ]\n    ");
    (0, _componentsTestUtils.closeCombobox)();
  });
});
describe('BeforeAfter can render now option', function () {
  var beforeNowItem = {
    id: '0',
    type: 'before',
    is: true,
    unit: 'now',
    range: 'relative'
  };
  it('should render a Before now time unit', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_BeforeAfter.BeforeAfter, {
      item: beforeNowItem,
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, _filter_test_utils.testField), {}, {
        fiscal_month_offset: 1
      }),
      filterType: "date"
    }));
    expect(_react.screen.getAllByRole('textbox')[1]).toHaveValue('now');
  });
  it('should not render value component for before now item', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_BeforeAfter.BeforeAfter, {
      item: beforeNowItem,
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, _filter_test_utils.testField), {}, {
        fiscal_month_offset: 1
      }),
      filterType: "date"
    }));
    expect(_react.screen.queryByTestId('number-value')).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=BeforeAfter.spec.js.map