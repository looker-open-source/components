"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _YearList = require("./YearList");

describe('YearList', function () {
  var date = new Date('January 12, 2022');
  var defaultProps = {
    baseMonth: date,
    currentDate: date,
    locale: _enUS["default"],
    onMonthChange: jest.fn(),
    onMonthClick: jest.fn(),
    selectedMonth: date,
    setBaseMonth: jest.fn()
  };
  test('renders 10 years before & after', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_YearList.YearList, defaultProps));

    var first = _react2.screen.getByText('2012');

    var last = _react2.screen.getByText('2032');

    expect(first).toBeVisible();
    expect(last).toBeVisible();
    expect(_react2.screen.getAllByRole('button')).toHaveLength(36);
  });
});
//# sourceMappingURL=YearList.spec.js.map