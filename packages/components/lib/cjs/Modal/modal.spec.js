"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _ModalHeaderCloseButton = require("./ModalHeaderCloseButton");

describe('ModalHeaderCloseButton', function () {
  test('render ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalHeaderCloseButton.ModalHeaderCloseButton, null));
    expect(_react2.screen.getByRole('button')).toBeInTheDocument();
    expect(_react2.screen.getByText('Close')).toBeInTheDocument();
  });
});
//# sourceMappingURL=modal.spec.js.map