"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _designTokens = require("@looker/design-tokens");

var _Button = require("../../Button");

var _locales = require("../../locales");

var _Confirm = require("./Confirm");

var requiredProps = {
  message: 'Foo',
  onConfirm: jest.fn(),
  title: 'Bar'
};
var optionalProps = {
  cancelLabel: "Don't Delete",
  confirmLabel: 'Delete',
  message: 'This is permanent',
  onCancel: jest.fn(),
  title: 'Delete the thing?'
};
afterEach(function () {
  requiredProps.onConfirm.mockClear();
  optionalProps.onCancel.mockClear();
});
describe('Confirm', function () {
  test('with defaults', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var opener, button;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Confirm.Confirm, requiredProps, function (open) {
              return _react2["default"].createElement(_Button.Button, {
                onClick: open
              }, "Do Something");
            }));
            opener = _react.screen.getByText('Do Something');

            _react.fireEvent.click(opener);

            button = _react.screen.getByText('Confirm');
            expect(_react.screen.getByText(requiredProps.title)).toBeVisible();
            expect(_react.screen.getByText(requiredProps.message)).toBeVisible();
            expect(button).toHaveStyleRule("background: ".concat(_designTokens.theme.colors.key));

            _react.fireEvent.click(button);

            expect(requiredProps.onConfirm).toHaveBeenCalledTimes(1);

            _react.fireEvent.click(_react.screen.getByText('Cancel'));

            _context.next = 12;
            return (0, _react.waitForElementToBeRemoved)(function () {
              return _react.screen.queryByText(requiredProps.title);
            });

          case 12:
            expect(_react.screen.queryByText(requiredProps.title)).not.toBeInTheDocument();

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('with custom props', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Confirm.Confirm, (0, _extends2["default"])({}, requiredProps, optionalProps, {
      buttonColor: "critical"
    }), function (open) {
      return _react2["default"].createElement(_Button.Button, {
        onClick: open
      }, "Do Something");
    }));

    var opener = _react.screen.getByText('Do Something');

    _react.fireEvent.click(opener);

    var button = _react.screen.getByText(optionalProps.confirmLabel || '');

    expect(button).toHaveStyleRule("background: ".concat(_designTokens.theme.colors.critical));

    _react.fireEvent.click(_react.screen.getByText(optionalProps.cancelLabel || ''));

    _react.fireEvent.click(button);

    expect(requiredProps.onConfirm).toHaveBeenCalledTimes(1);
    expect(optionalProps.onCancel).toHaveBeenCalledTimes(1);
  });
  test('i18n', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Confirm.Confirm, requiredProps, function (open) {
      return _react2["default"].createElement(_Button.Button, {
        onClick: open
      }, "Do Something");
    }), undefined, _locales.jaJP);

    var opener = _react.screen.getByText('Do Something');

    _react.fireEvent.click(opener);

    var buttons = _react.screen.getAllByRole('button');

    expect(buttons[0]).toHaveTextContent('確認');
    expect(buttons[1]).toHaveTextContent('キャンセル');
  });
});
//# sourceMappingURL=Confirm.spec.js.map