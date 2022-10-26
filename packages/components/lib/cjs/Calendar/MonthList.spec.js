"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _MonthList = require("./MonthList");

describe('MonthList', function () {
  var date = new Date('January 12, 2022');
  var defaultProps = {
    baseMonth: date,
    currentDate: date,
    datesSelected: [],
    firstDayOfWeek: 0,
    locale: _enUS["default"],
    onDraftSelect: jest.fn(),
    onMonthChange: jest.fn(),
    onSelect: jest.fn(),
    setBaseMonth: jest.fn()
  };
  test('renders 6 months before & after', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MonthList.MonthList, defaultProps));

    var first = _react2.screen.getByText('Jul 2021');

    var last = _react2.screen.getByText('Jul 2022');

    expect(first).toBeVisible();
    expect(last).toBeVisible();
    expect(_react2.screen.getAllByRole('button')).toHaveLength(90);
  });
});
//# sourceMappingURL=MonthList.spec.js.map