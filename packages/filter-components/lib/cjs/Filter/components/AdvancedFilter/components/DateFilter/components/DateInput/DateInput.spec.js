"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _DateInput = require("./DateInput");

test('renders a DateInput', function () {
  var onChangeMock = jest.fn();
  (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_DateInput.DateInput, {
    date: new Date(1863, 0, 1),
    onChange: onChangeMock
  }));

  _react.fireEvent.click(_react.screen.getByText('1863/01/01'));

  _react.fireEvent.click(_react.screen.getByText('Open calendar'));

  _react.fireEvent.click(_react.screen.getByTitle(/Jan 04, 1863/));

  expect(onChangeMock.mock.calls).toEqual([[new Date(1863, 0, 4)]]);

  _react.fireEvent.click(document);
});
//# sourceMappingURL=DateInput.spec.js.map