"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _ModalLayout = require("./ModalLayout");

describe('ModalLayout', function () {
  test('basic ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalLayout.ModalLayout, {
      header: "Header",
      footer: "Footer"
    }, "Modal Layout"));
    expect(_react2.screen.getByText(/Modal Layout/)).toBeInTheDocument();
  });
  test('renders Header', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalLayout.ModalLayout, {
      footer: "Footer",
      header: "Header"
    }, "Modal Layout"));
    expect(_react2.screen.getByText(/Header/)).toBeInTheDocument();
    expect(_react2.screen.getByText(/Footer/)).toBeInTheDocument();
  });
  test('renders ModalLoading', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalLayout.ModalLoading, null));
    expect(_react2.screen.getAllByTestId('loading-spinner')[0]).toBeInTheDocument();
  });
});
//# sourceMappingURL=ModalLayout.spec.js.map