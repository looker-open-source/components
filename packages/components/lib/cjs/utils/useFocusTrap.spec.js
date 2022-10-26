"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _componentsProviders = require("@looker/components-providers");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _react2 = _interopRequireDefault(require("react"));

var _Fields = require("../Form/Fields");

var _ = require("./");

beforeEach(function () {
  jest.useFakeTimers();
});
afterEach(function () {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

var Inner = function Inner(_ref) {
  var children = _ref.children,
      clickOutsideDeactivates = _ref.clickOutsideDeactivates;

  var _useFocusTrap = (0, _.useFocusTrap)({
    clickOutsideDeactivates: clickOutsideDeactivates
  }),
      _useFocusTrap2 = (0, _slicedToArray2["default"])(_useFocusTrap, 2),
      ref = _useFocusTrap2[1];

  var _useToggle = (0, _.useToggle)(),
      value = _useToggle.value,
      setOff = _useToggle.setOff,
      toggle = _useToggle.toggle;

  return _react2["default"].createElement(_react2["default"].Fragment, null, value && _react2["default"].createElement("div", {
    ref: ref
  }, children, _react2["default"].createElement("button", {
    tabIndex: -1,
    onClick: setOff
  }, "Close")), _react2["default"].createElement("button", {
    onClick: toggle
  }, "toggle"), _react2["default"].createElement("button", {
    onClick: setOff
  }, "Another button"));
};

var FocusTrapComponent = function FocusTrapComponent(props) {
  return _react2["default"].createElement(_componentsProviders.FocusTrapProvider, null, _react2["default"].createElement(Inner, props));
};

var Surface = function Surface(_ref2) {
  var children = _ref2.children;
  return _react2["default"].createElement("div", {
    tabIndex: -1,
    "data-testid": "surface",
    "data-overlay-surface": "true"
  }, children);
};

describe('useFocusTrap', function () {
  describe('initial focus', function () {
    test('focus starts on surface', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
      var toggle;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0, _react.render)(_react2["default"].createElement(FocusTrapComponent, null, _react2["default"].createElement(Surface, null)));
              toggle = _react.screen.getByText('toggle');

              _react.fireEvent.click(toggle);

              _context.next = 5;
              return (0, _react.waitFor)(function () {
                return expect(_react.screen.getByTestId('surface')).toHaveFocus();
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    test('focus starts on autoFocus element', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
      var toggle;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(FocusTrapComponent, null, _react2["default"].createElement(Surface, null, _react2["default"].createElement(_Fields.FieldText, {
                label: "Text field A"
              }), _react2["default"].createElement(_Fields.FieldText, {
                label: "Text field B",
                autoFocus: true
              }))));
              toggle = _react.screen.getByText('toggle');

              _react.fireEvent.click(toggle);

              _context2.next = 5;
              return (0, _react.waitFor)(function () {
                return expect(_react.screen.getByLabelText('Text field B')).toHaveFocus();
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    describe('focus starts on tabbable element by priority', function () {
      var inputElements = _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement("input", {
        type: "hidden"
      }), _react2["default"].createElement(_Fields.FieldText, {
        label: "Hidden text field",
        style: {
          display: 'none'
        }
      }), _react2["default"].createElement(_Fields.FieldText, {
        label: "Text field"
      }));

      var footerElement = _react2["default"].createElement("footer", null, _react2["default"].createElement("button", null, "Footer button"));

      var firstTabbableElement = _react2["default"].createElement("button", null, "First button");

      test('input element is 1st priority', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee3() {
        var toggle;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(FocusTrapComponent, null, _react2["default"].createElement(Surface, null, firstTabbableElement, footerElement, inputElements)));
                toggle = _react.screen.getByText('toggle');

                _react.fireEvent.click(toggle);

                _context3.next = 5;
                return (0, _react.waitFor)(function () {
                  return expect(_react.screen.getByLabelText('Text field')).toHaveFocus();
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));
      test('footer element is 2nd priority', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee4() {
        var toggle;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(FocusTrapComponent, null, _react2["default"].createElement(Surface, null, firstTabbableElement, footerElement)));
                toggle = _react.screen.getByText('toggle');

                _react.fireEvent.click(toggle);

                _context4.next = 5;
                return (0, _react.waitFor)(function () {
                  return expect(_react.screen.getByText('Footer button')).toHaveFocus();
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      })));
      test('first tabbable element is 3rd priority', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee5() {
        var toggle;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(FocusTrapComponent, null, _react2["default"].createElement(Surface, null, firstTabbableElement, _react2["default"].createElement("button", null, "Other button"), _react2["default"].createElement("footer", null))));
                toggle = _react.screen.getByText('toggle');

                _react.fireEvent.click(toggle);

                _context5.next = 5;
                return (0, _react.waitFor)(function () {
                  return expect(_react.screen.getByText('First button')).toHaveFocus();
                });

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      })));
    });
    test('error without autoFocus or surface', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee6() {
      var toggle;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(FocusTrapComponent, null));
              toggle = _react.screen.getByText('toggle');

              _react.fireEvent.click(toggle);

              (0, _react.act)(function () {
                try {
                  jest.runOnlyPendingTimers();
                } catch (e) {
                  expect(e).toMatchInlineSnapshot("[Error: Your focus trap needs to have at least one focusable element]");
                }
              });

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
  });
  describe('return focus', function () {
    test('focus returns to trigger', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee7() {
      var toggle;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              (0, _react.render)(_react2["default"].createElement(FocusTrapComponent, null, _react2["default"].createElement(Surface, null)));
              toggle = _react.screen.getByText('toggle');
              toggle.focus();

              _react.fireEvent.click(toggle);

              _context7.next = 6;
              return (0, _react.waitFor)(function () {
                return expect(_react.screen.getByTestId('surface')).toHaveFocus();
              });

            case 6:
              _react.fireEvent.click(toggle);

              _context7.next = 9;
              return (0, _react.waitFor)(function () {
                return expect(toggle).toHaveFocus();
              });

            case 9:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
    test('focus does not return to trigger', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee8() {
      var toggle, otherButton;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              (0, _react.render)(_react2["default"].createElement(FocusTrapComponent, null, _react2["default"].createElement(Surface, null)));
              toggle = _react.screen.getByText('toggle');
              toggle.focus();

              _react.fireEvent.click(toggle);

              _context8.next = 6;
              return (0, _react.waitFor)(function () {
                return expect(_react.screen.getByTestId('surface')).toHaveFocus();
              });

            case 6:
              otherButton = _react.screen.getByText('Another button');

              _react.fireEvent.click(otherButton);

              otherButton.focus();
              expect(otherButton).toHaveFocus();

            case 10:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    })));
    test('With nested traps', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee9() {
      var toggle, toggleInner, closeButtons;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              (0, _react.render)(_react2["default"].createElement(FocusTrapComponent, null, _react2["default"].createElement(Surface, null, _react2["default"].createElement(Inner, null, _react2["default"].createElement(Surface, null)))));
              toggle = _react.screen.getByText('toggle');
              toggle.focus();

              _react.fireEvent.click(toggle);

              toggleInner = _react.screen.getAllByText('toggle')[0];
              toggleInner.focus();

              _react.fireEvent.click(toggleInner);

              closeButtons = _react.screen.getAllByText('Close');

              _react.fireEvent.click(closeButtons[0]);

              _react.fireEvent.click(closeButtons[1]);

              _context9.next = 12;
              return (0, _react.waitFor)(function () {
                return expect(toggle).toHaveFocus();
              });

            case 12:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));
  });
  describe('cycle focus when tabbing', function () {
    var CycleFocus = function CycleFocus() {
      return _react2["default"].createElement(FocusTrapComponent, null, _react2["default"].createElement(Surface, null, _react2["default"].createElement("button", null, "First"), _react2["default"].createElement("input", {
        type: "text"
      }), _react2["default"].createElement("a", {
        href: "#"
      }, "Last"), _react2["default"].createElement("span", null, "Not tabbable")));
    };

    test('focus the first tabbable element after tabbing from the last', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee10() {
      var toggle, last;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              (0, _react.render)(_react2["default"].createElement(CycleFocus, null));
              toggle = _react.screen.getByText('toggle');

              _react.fireEvent.click(toggle);

              last = _react.screen.getByText('Last');
              last.focus();

              _react.fireEvent.keyDown(last, {
                key: 'Tab'
              });

              expect(_react.screen.getByText('First')).toHaveFocus();

            case 7:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    })));
    test('focus the last tabbable element after shift-tabbing from the first', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee11() {
      var toggle, first;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              (0, _react.render)(_react2["default"].createElement(CycleFocus, null));
              toggle = _react.screen.getByText('toggle');

              _react.fireEvent.click(toggle);

              first = _react.screen.getByText('First');
              first.focus();

              _react.fireEvent.keyDown(first, {
                key: 'Tab',
                shiftKey: true
              });

              expect(_react.screen.getByText('Last')).toHaveFocus();

            case 7:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    })));
    test('do nothing when not focused on first or last tabbable element', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee12() {
      var toggle, input;
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              (0, _react.render)(_react2["default"].createElement(CycleFocus, null));
              toggle = _react.screen.getByText('toggle');

              _react.fireEvent.click(toggle);

              input = _react.screen.getByRole('textbox');
              input.focus();

              _react.fireEvent.keyDown(input, {
                key: 'Tab'
              });

              expect(input).toHaveFocus();

            case 7:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    })));
  });
  describe('click outside', function () {
    test('does not deactivate by default', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee13() {
      var surface;
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              (0, _react.render)(_react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(FocusTrapComponent, null, _react2["default"].createElement(Surface, null)), _react2["default"].createElement("button", null, "outside")));

              _userEvent["default"].click(_react.screen.getByText('toggle'));

              surface = _react.screen.getByTestId('surface');
              _context13.next = 5;
              return (0, _react.waitFor)(function () {
                return expect(surface).toHaveFocus();
              });

            case 5:
              _userEvent["default"].click(_react.screen.getByText('outside'));

              expect(surface).toHaveFocus();

            case 7:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    })));
    test('with clickOutsideDeactivates', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee14() {
      var surface, outside;
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              (0, _react.render)(_react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(FocusTrapComponent, {
                clickOutsideDeactivates: true
              }, _react2["default"].createElement(Surface, null)), _react2["default"].createElement("button", null, "outside")));

              _userEvent["default"].click(_react.screen.getByText('toggle'));

              surface = _react.screen.getByTestId('surface');
              _context14.next = 5;
              return (0, _react.waitFor)(function () {
                return expect(surface).toHaveFocus();
              });

            case 5:
              outside = _react.screen.getByText('outside');

              _userEvent["default"].click(outside);

              expect(outside).toHaveFocus();

            case 8:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    })));
  });
});
test('Focus maintained with Select', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee15() {
  var select;
  return regeneratorRuntime.wrap(function _callee15$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(Inner, null, _react2["default"].createElement(_Fields.FieldText, {
            placeholder: "Input Text"
          }), _react2["default"].createElement(_Fields.FieldSelect, {
            options: [{
              label: '1',
              value: '1'
            }],
            placeholder: "Components Select"
          })));

          _react.fireEvent.click(_react.screen.getByText('toggle'));

          select = _react.screen.getByPlaceholderText('Components Select');

          _react.fireEvent.focus(select);

          _react.fireEvent.click(select);

          _react.fireEvent.click(_react.screen.getByText('1'));

          expect(select).not.toHaveFocus();
          _context15.next = 9;
          return (0, _react.waitFor)(function () {
            expect(select).toHaveFocus();
          });

        case 9:
        case "end":
          return _context15.stop();
      }
    }
  }, _callee15);
})));
//# sourceMappingURL=useFocusTrap.spec.js.map