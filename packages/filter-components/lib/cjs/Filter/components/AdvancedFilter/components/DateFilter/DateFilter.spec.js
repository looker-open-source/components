"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _DateFilter = require("./DateFilter");

describe('Date filter test', function () {
  it('should render a DateFilter', function () {
    var item = {
      id: '1',
      type: 'anyvalue'
    };
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_DateFilter.DateFilter, {
      item: item,
      filterType: "date",
      onChange: jest.fn(),
      showAdd: false,
      showName: true,
      showRemove: false,
      showOperator: false,
      showMatchesAdvanced: false,
      onAdd: jest.fn(),
      onRemove: jest.fn()
    }));
    expect(_react.screen.getByRole('textbox')).toHaveValue('is any time');
  });
  it('should render a DateFilter with type day', function () {
    var item = {
      id: '1',
      type: 'day',
      day: 'yesterday'
    };
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_DateFilter.DateFilter, {
      item: item,
      filterType: "date",
      onChange: jest.fn(),
      showAdd: false,
      showName: true,
      showRemove: false,
      showOperator: false,
      showMatchesAdvanced: false,
      onAdd: jest.fn(),
      onRemove: jest.fn()
    }));
    expect(_react.screen.getByDisplayValue('yesterday')).toBeVisible();
    expect(_react.screen.getByDisplayValue('matches (advanced)')).toBeVisible();
  });
  it('should render a DateFilter with time dropdown(s)', function () {
    var item = {
      id: '1',
      type: 'range'
    };
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_DateFilter.DateFilter, {
      item: item,
      filterType: "date_time",
      onChange: jest.fn(),
      showAdd: false,
      showName: true,
      showRemove: false,
      showOperator: false,
      showMatchesAdvanced: false,
      onAdd: jest.fn(),
      onRemove: jest.fn()
    }));
    expect(_react.screen.getAllByPlaceholderText('Select time')).toHaveLength(2);
  });
  it('New row should default to 1 month', function () {
    var item = {
      id: '1',
      is: true,
      type: 'past',
      value: [3],
      unit: 'week'
    };
    var onAddMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_DateFilter.DateFilter, {
      item: item,
      filterType: "date_time",
      onChange: jest.fn(),
      showAdd: true,
      showName: true,
      showRemove: false,
      showOperator: false,
      showMatchesAdvanced: false,
      onAdd: onAddMock,
      onRemove: jest.fn()
    }));

    _react.fireEvent.click(_react.screen.getByRole('button'));

    expect(onAddMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          Object {\n            \"id\": \"1\",\n            \"is\": true,\n            \"type\": \"past\",\n            \"unit\": \"month\",\n            \"value\": 1,\n          },\n          true,\n        ],\n      ]\n    ");
  });
});
//# sourceMappingURL=DateFilter.spec.js.map