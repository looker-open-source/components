"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _ko = _interopRequireDefault(require("date-fns/locale/ko"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _MonthTitle = require("./MonthTitle");

var defaultProps = {
  inline: false,
  locale: _enUS["default"],
  month: new Date('July 1, 2021'),
  rangeType: 'draft'
};
test('above 1st week', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MonthTitle.MonthTitle, (0, _extends2["default"])({}, defaultProps, {
    month: new Date('Jan 12, 2022')
  })));

  var title = _react2.screen.getByText('Jan 2022');

  expect(title).toHaveStyle('margin-bottom: 0.125rem');
});
test('inline with 1st week', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MonthTitle.MonthTitle, (0, _extends2["default"])({}, defaultProps, {
    inline: true
  })));

  var title = _react2.screen.getByText('Jul 2021');

  expect(title).toHaveStyle('margin-bottom: -2rem');
});
test('localization', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MonthTitle.MonthTitle, (0, _extends2["default"])({}, defaultProps, {
    locale: _ko["default"]
  })));
  expect(_react2.screen.getByText('7월 2021')).toBeVisible();
});
test('month names do not overlap days on the same line', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MonthTitle.MonthTitle, defaultProps));
  expect(_react2.screen.getByText('Jul 2021')).toHaveStyle('width: fit-content');
});
//# sourceMappingURL=MonthTitle.spec.js.map