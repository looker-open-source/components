"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _DateRange = require("./DateRange");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

describe('DateRange', function () {
  var mockItem = {
    id: '1',
    start: {
      year: 2018,
      month: 1,
      day: 1,
      hour: 12,
      minute: 2
    },
    end: {
      year: 2018,
      month: 2,
      day: 1,
      hour: 13,
      minute: 4
    }
  };
  var onChangeMock = jest.fn();
  beforeEach(function () {
    onChangeMock.mockReset();
  });
  it('should render the start and end date', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_DateRange.DateRange, {
      item: mockItem,
      onChange: onChangeMock
    }));
    expect(_react.screen.getByText('2018/01/01')).toBeVisible();
    expect(_react.screen.getByText('2018/02/01')).toBeVisible();
  });
  it('should render the start and end date and time when showTime is set', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_DateRange.DateRange, {
      item: mockItem,
      onChange: onChangeMock,
      showTime: true
    }));
    expect(_react.screen.getByText('2018/01/01')).toBeVisible();
    expect(_react.screen.getByText('2018/02/01')).toBeVisible();
    expect(_react.screen.getByDisplayValue('12:02 pm')).toBeVisible();
    expect(_react.screen.getByDisplayValue('01:04 pm')).toBeVisible();
  });
  it('should default to now when start date is not specified', function () {
    jest.spyOn(Date, 'now').mockImplementation(function () {
      return 1516046400000;
    });

    var item = _objectSpread(_objectSpread({}, mockItem), {}, {
      start: undefined
    });

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_DateRange.DateRange, {
      item: item,
      onChange: onChangeMock
    }));
    expect(_react.screen.getByText('2018/01/15')).toBeVisible();
    expect(_react.screen.getByText('2018/02/01')).toBeVisible();
  });
  it('should default to now when end date is not specified', function () {
    jest.spyOn(Date, 'now').mockImplementation(function () {
      return 1518724800000;
    });

    var item = _objectSpread(_objectSpread({}, mockItem), {}, {
      end: undefined
    });

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_DateRange.DateRange, {
      item: item,
      onChange: onChangeMock
    }));
    expect(_react.screen.getByText('2018/01/01')).toBeVisible();
    expect(_react.screen.getByText('2018/02/15')).toBeVisible();
  });
  it('should call our callback function when the start time changes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_DateRange.DateRange, {
      item: mockItem,
      onChange: onChangeMock,
      showTime: true
    }));

    var startTime = _react.screen.getByDisplayValue('12:02 pm');

    _react.fireEvent.click(startTime);

    var newStartTime = _react.screen.getByText('01:00 pm');

    _react.fireEvent.click(newStartTime);

    expect(onChangeMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"1\",\n          Object {\n            \"start\": Object {\n              \"day\": 1,\n              \"hour\": 13,\n              \"minute\": 0,\n              \"month\": 1,\n              \"second\": 0,\n              \"year\": 2018,\n            },\n          },\n        ],\n      ]\n    ");
  });
  it('should call our callback function when the end time changes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_DateRange.DateRange, {
      item: mockItem,
      onChange: onChangeMock,
      showTime: true
    }));

    var endTime = _react.screen.getByDisplayValue('01:04 pm');

    _react.fireEvent.click(endTime);

    var newEndTime = _react.screen.getByText('02:00 pm');

    _react.fireEvent.click(newEndTime);

    expect(onChangeMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"1\",\n          Object {\n            \"end\": Object {\n              \"day\": 1,\n              \"hour\": 14,\n              \"minute\": 0,\n              \"month\": 2,\n              \"second\": 0,\n              \"year\": 2018,\n            },\n          },\n        ],\n      ]\n    ");
  });
  it('should push the end time when start time is set after end', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_DateRange.DateRange, {
      item: mockItem,
      onChange: onChangeMock
    }));

    _react.fireEvent.click(_react.screen.getByText('2018/01/01'));

    _react.fireEvent.click(_react.screen.getByText('Open calendar'));

    _react.fireEvent.click(_react.screen.getByText('next month'));

    _react.fireEvent.click(_react.screen.getByTitle('Thu Feb 15, 2018'));

    expect(onChangeMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"1\",\n          Object {\n            \"end\": Object {\n              \"day\": 16,\n              \"hour\": 12,\n              \"minute\": 2,\n              \"month\": 2,\n              \"second\": 0,\n              \"year\": 2018,\n            },\n            \"start\": Object {\n              \"day\": 15,\n              \"hour\": 12,\n              \"minute\": 2,\n              \"month\": 2,\n              \"second\": 0,\n              \"year\": 2018,\n            },\n          },\n        ],\n      ]\n    ");

    _react.fireEvent.click(document);
  });
  it('should push the start time when end time is set before start', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_DateRange.DateRange, {
      item: mockItem,
      onChange: onChangeMock
    }));

    _react.fireEvent.click(_react.screen.getByText('2018/02/01'));

    _react.fireEvent.click(_react.screen.getByText('Open calendar'));

    _react.fireEvent.click(_react.screen.getByText('previous month'));

    _react.fireEvent.click(_react.screen.getByText('previous month'));

    _react.fireEvent.click(_react.screen.getByTitle('Fri Dec 15, 2017'));

    expect(onChangeMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"1\",\n          Object {\n            \"end\": Object {\n              \"day\": 15,\n              \"hour\": 13,\n              \"minute\": 4,\n              \"month\": 12,\n              \"second\": 0,\n              \"year\": 2017,\n            },\n            \"start\": Object {\n              \"day\": 14,\n              \"hour\": 13,\n              \"minute\": 4,\n              \"month\": 12,\n              \"second\": 0,\n              \"year\": 2017,\n            },\n          },\n        ],\n      ]\n    ");

    _react.fireEvent.click(document);
  });
});
//# sourceMappingURL=DateRange.spec.js.map