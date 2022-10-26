"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _index = require("./stories/index.stories");

describe('CalendarNav', function () {
  test('expected month displayed', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Basic, null));

    var month = _react2.screen.getAllByText('Jul 2021');

    expect(month[0]).toBeInTheDocument();
    expect(month.length).toBe(2);
  });
  test('button next and previous exist', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Basic, null));

    var next = _react2.screen.getByText('next month');

    var previous = _react2.screen.getByText('previous month');

    expect(next).toBeInTheDocument();
    expect(previous).toBeInTheDocument();
  });
  test('button next changes displayed month', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Basic, null));

    var next = _react2.screen.getByText('next month');

    _react2.fireEvent.click(next);

    var nextMonth = _react2.screen.getAllByText('Aug 2021');

    expect(nextMonth[0]).toBeInTheDocument();
  });
  test('button previous changes displayed month', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Basic, null));

    var previous = _react2.screen.getByText('previous month');

    _react2.fireEvent.click(previous);

    var previousMonth = _react2.screen.getAllByText('Jun 2021');

    expect(previousMonth[0]).toBeInTheDocument();
  });
});
//# sourceMappingURL=CalendarNav.spec.js.map