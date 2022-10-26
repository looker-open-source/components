"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _es = _interopRequireDefault(require("date-fns/locale/es"));

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Month = require("./Month");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

describe('Month', function () {
  var date = new Date('May 1, 2022');
  var defaultProps = {
    date: date,
    datesSelected: [],
    firstDayOfWeek: 0,
    fullRender: true,
    index: 0,
    locale: _enUS["default"],
    onDraftSelect: jest.fn(),
    onSelect: jest.fn(),
    setItemPosition: jest.fn()
  };
  test('renders may 2022 with en locale', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Month.Month, defaultProps));
    expect(_react2.screen.getByText('May 2022')).toBeVisible();
    expect(_react2.screen.getByText('1')).toBeVisible();
  });
  test('renders may 2022 with es locale', function () {
    var esProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
      firstDayOfWeek: 1,
      locale: _es["default"]
    });

    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Month.Month, esProps));
    expect(_react2.screen.getByText('may 2022')).toBeVisible();
    expect(_react2.screen.getByText('1')).toBeVisible();
  });
});
//# sourceMappingURL=Month.spec.js.map