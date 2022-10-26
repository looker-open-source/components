"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Box = require("../Layout/Box2");

var _Truncate = require("./Truncate");

var longLabel = 'This is a long label that should trigger truncation';
describe('Truncate', function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    jest.useRealTimers();
  });

  var runTimers = function runTimers() {
    return (0, _react2.act)(function () {
      jest.runOnlyPendingTimers();
    });
  };

  test('Basic', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Truncate.Truncate, null, "Hello world"));

    var trigger = _react2.screen.getByText('Hello world');

    _react2.fireEvent.mouseOver(trigger);

    runTimers();

    var tooltip = _react2.screen.getAllByText('Hello world');

    expect(tooltip.length).toEqual(1);
  });
  test.skip('Truncate active', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Box.Box2, {
      width: "5rem"
    }, _react["default"].createElement(_Truncate.Truncate, null, longLabel)));

    var trigger = _react2.screen.getAllByText(longLabel)[0];

    _react2.fireEvent.mouseOver(trigger);

    runTimers();

    var tooltip = _react2.screen.getAllByText(longLabel)[1];

    expect(tooltip).toBeVisible();

    _react2.fireEvent.mouseOut(tooltip);

    runTimers();
    expect(tooltip).not.toBeInTheDocument();
  });
  test('Truncate detail', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Truncate.Truncate, {
      description: "description text"
    }, "Hello World"));

    var trigger = _react2.screen.getByText('Hello World');

    _react2.fireEvent.mouseOver(trigger);

    runTimers();

    var tooltip = _react2.screen.getByText('description text');

    expect(tooltip).toBeVisible();

    _react2.fireEvent.mouseOut(tooltip);

    runTimers();
    expect(tooltip).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=Truncate.spec.js.map