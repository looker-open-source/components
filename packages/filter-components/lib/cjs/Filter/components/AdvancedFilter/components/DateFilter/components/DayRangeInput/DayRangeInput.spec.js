"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _DayRangeInput = require("./DayRangeInput");

var onChangeMock = jest.fn();
beforeEach(function () {
  onChangeMock.mockReset();
});
test('renders a DayRangeInput', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_DayRangeInput.DayRangeInput, {
    onChange: onChangeMock,
    value: {
      from: new Date(1914, 6, 28),
      to: new Date(1919, 5, 28)
    }
  }));

  _react.fireEvent.click(_react.screen.getByText('1914/07/28 – 1919/06/28'));

  _react.fireEvent.click(_react.screen.getByText('Open calendar'));

  _react.fireEvent.click(document);
});
//# sourceMappingURL=DayRangeInput.spec.js.map