"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _ModalFooter = require("../ModalFooter/ModalFooter");

describe('ModalFooter', function () {
  test('basic', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalFooter.ModalFooter, null, _react["default"].createElement("button", null, "Cancel")));
    expect(_react2.screen.getByRole('button')).toBeInTheDocument();
  });
  test('has correct flex style', function () {
    var _screen$getByRole;

    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalFooter.ModalFooter, null, _react["default"].createElement("button", null, "Cancel")));
    expect((_screen$getByRole = _react2.screen.getByRole('button')) === null || _screen$getByRole === void 0 ? void 0 : _screen$getByRole.closest('footer')).toHaveStyle('flex-direction: row-reverse');
  });
  test('secondary', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalFooter.ModalFooter, {
      secondary: _react["default"].createElement("button", null, "Done")
    }, _react["default"].createElement("button", null, "Cancel")));
    expect(_react2.screen.getByText('Done')).toBeInTheDocument();
  });
});
//# sourceMappingURL=ModalFooter.spec.js.map