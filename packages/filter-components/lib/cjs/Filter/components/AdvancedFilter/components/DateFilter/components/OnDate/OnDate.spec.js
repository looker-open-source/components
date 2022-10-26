"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _OnDate = require("./OnDate");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

describe('OnDate', function () {
  var mockItem = {
    id: '1',
    date: {
      year: 2018,
      month: 1,
      day: 1
    }
  };
  var onChangeMock = jest.fn();
  it('should render the passed in date', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_OnDate.OnDate, {
      item: mockItem,
      onChange: onChangeMock
    }));
    expect(_react.screen.getByText('2018/01/01')).toBeVisible();
  });
  it('should render now when no date is passed in', function () {
    jest.spyOn(Date, 'now').mockImplementation(function () {
      return 1516046400000;
    });
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_OnDate.OnDate, {
      item: {
        id: '1'
      },
      onChange: onChangeMock
    }));
    expect(_react.screen.getByText('2018/01/15')).toBeVisible();
  });
  it('should fire onChange with the new date when changed', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_OnDate.OnDate, {
      item: mockItem,
      onChange: onChangeMock
    }));

    _react.fireEvent.click(_react.screen.getByText('2018/01/01'));

    _react.fireEvent.click(_react.screen.getByText('Open calendar'));

    _react.fireEvent.click(_react.screen.getByText('next month'));

    _react.fireEvent.click(_react.screen.getByTitle('Thu Feb 15, 2018'));

    expect(onChangeMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"1\",\n          Object {\n            \"date\": Object {\n              \"day\": 15,\n              \"month\": 2,\n              \"year\": 2018,\n            },\n          },\n        ],\n      ]\n    ");

    _react.fireEvent.click(document);
  });
  it('should fire onChange with the new date without time (DX-5280)', function () {
    var time = {
      hour: 1,
      minute: 2,
      second: 3
    };

    var itemWithTime = _objectSpread(_objectSpread({}, mockItem), {}, {
      date: _objectSpread(_objectSpread({}, mockItem.date), time)
    });

    onChangeMock.mockReset();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_OnDate.OnDate, {
      item: itemWithTime,
      onChange: onChangeMock
    }));

    _react.fireEvent.click(_react.screen.getByText('2018/01/01'));

    _react.fireEvent.click(_react.screen.getByText('Open calendar'));

    _react.fireEvent.click(_react.screen.getByTitle('Mon Jan 15, 2018'));

    expect(onChangeMock).toHaveBeenCalledWith('1', {
      date: {
        year: 2018,
        month: 1,
        day: 15
      }
    });

    _react.fireEvent.click(document);
  });
});
//# sourceMappingURL=OnDate.spec.js.map