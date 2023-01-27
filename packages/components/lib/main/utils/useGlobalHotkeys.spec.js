"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
require("@testing-library/jest-dom/extend-expect");
var _react = require("@testing-library/react");
require("jest-styled-components");
var _react2 = _interopRequireDefault(require("react"));
var _componentsTestUtils = require("@looker/components-test-utils");
var _CloseIconButton = _interopRequireDefault(require("../Dialog/stories/CloseIconButton"));
var _OverlayOpenDialog = _interopRequireDefault(require("../Popover/stories/OverlayOpenDialog"));

describe('useGlobalHotkeys', function () {
  test('intersecting elements', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var dialog, tooltip, tooltipSurface, spy;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_CloseIconButton["default"], null));
          _react.fireEvent.click(_react.screen.getByText('Open Dialog'));
          dialog = _react.screen.getByRole('dialog');
          expect(dialog).toBeVisible();

          _context.next = 6;
          return (0, _react.waitFor)(function () {
            expect(dialog).not.toHaveAttribute('aria-busy');
          });
        case 6:
          _react.fireEvent.mouseOver((0, _react.within)(dialog).getByRole('button'));
          _context.next = 9;
          return _react.screen.findByRole('tooltip');
        case 9:
          tooltip = _context.sent;
          tooltipSurface = tooltip.closest('div');
          spy = jest.spyOn(document, 'elementsFromPoint').mockReturnValue([tooltipSurface, dialog]);
          _react.fireEvent.keyDown(document, {
            key: 'Escape'
          });
          expect(_react.screen.getByRole('dialog')).toBeVisible();
          _context.next = 16;
          return (0, _react.waitFor)(function () {
            expect(_react.screen.queryByRole('tooltip')).not.toBeInTheDocument();
          });
        case 16:
          _react.fireEvent.keyDown(document, {
            key: 'Escape'
          });
          _context.next = 19;
          return (0, _react.waitForElementToBeRemoved)(function () {
            return _react.screen.queryByRole('dialog');
          });
        case 19:
          spy.mockRestore();
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  test('non-intersecting elements', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    var popoverButton, dialogButton, dialogs, dialogRect, popoverRect, rectSpy;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_OverlayOpenDialog["default"], null));
          popoverButton = _react.screen.getByText('Open Popover');
          _react.fireEvent.click(popoverButton);
          dialogButton = (0, _react.within)(_react.screen.getByRole('dialog')).getByText('Open Dialog');
          _react.fireEvent.click(dialogButton);
          dialogs = _react.screen.getAllByRole('dialog');
          expect(dialogs).toHaveLength(2);

          _context2.next = 9;
          return (0, _react.waitFor)(function () {
            expect(_react.screen.getByRole('textbox')).toHaveFocus();
          });
        case 9:
          dialogRect = {
            bottom: 506,
            height: 466,
            left: 429,
            right: 1069,
            toJSON: jest.fn(),
            top: 40,
            width: 640,
            x: 429,
            y: 40
          };
          popoverRect = {
            bottom: 528,
            height: 388,
            left: 227.5,
            right: 408.6171875,
            toJSON: jest.fn(),
            top: 140,
            width: 181.1171875,
            x: 227.5,
            y: 140
          };
          rectSpy = jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValueOnce(dialogRect).mockReturnValueOnce(popoverRect).mockReturnValueOnce(popoverRect).mockReturnValueOnce(dialogRect);
          _react.fireEvent.keyDown(document, {
            key: 'Escape'
          });
          rectSpy.mockRestore();
          _context2.next = 16;
          return (0, _react.waitForElementToBeRemoved)(function () {
            return _react.screen.queryByText('Toggle Scroll Lock');
          });
        case 16:
          expect(_react.screen.getByRole('dialog')).toBeVisible();
          _react.fireEvent.click(document);
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=useGlobalHotkeys.spec.js.map