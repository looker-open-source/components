"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("jest-styled-components");

var _react = _interopRequireWildcard(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _DialogContentSimple = require("../fixtures/DialogContentSimple");

var _DialogMediumContent = require("../fixtures/DialogMediumContent");

var _Dialog = require("./Dialog");

var _Controlled = require("./stories/Controlled");

var _Dialog2 = require("./stories/Dialog.stories");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Dialog', function () {
  test('Verify initial state', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, {
      content: _react["default"].createElement(_DialogContentSimple.SimpleContent, null)
    }));
    expect(_react2.screen.queryByText('Dialog content')).not.toBeInTheDocument();
  });
  test('Placement functions', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, {
      isOpen: true,
      placement: "top",
      content: _react["default"].createElement(_DialogContentSimple.SimpleContent, null)
    }));
    expect(_react2.screen.getByText('Dialog content')).toBeInTheDocument();
  });
  test('defaultOpen', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var doneButton;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, {
              defaultOpen: true,
              content: _react["default"].createElement(_DialogMediumContent.DialogMediumContent, null)
            }));
            expect(_react2.screen.getByText(/We the People/)).toBeInTheDocument();
            expect(_react2.screen.getByLabelText(/The Constitution/, {
              selector: '[role="dialog"]'
            })).toBeInTheDocument();
            doneButton = _react2.screen.getByText('Done Reading');

            _react2.fireEvent.click(doneButton);

            _context.next = 7;
            return (0, _react2.waitForElementToBeRemoved)(function () {
              return _react2.screen.queryByText(/We the People/);
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('Dialog can be opened & closed', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    var link, doneButton;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, {
              content: _react["default"].createElement(_DialogContentSimple.SimpleContent, null)
            }, _react["default"].createElement("a", null, "Open Dialog")));
            expect(_react2.screen.queryByText('Dialog content')).not.toBeInTheDocument();
            link = _react2.screen.getByText('Open Dialog');
            expect(link).toBeInTheDocument();

            _react2.fireEvent.click(link);

            expect(_react2.screen.getByText('Dialog content')).toBeInTheDocument();
            doneButton = _react2.screen.getByText('Done');

            _react2.fireEvent.click(doneButton);

            _context2.next = 10;
            return (0, _react2.waitForElementToBeRemoved)(function () {
              return _react2.screen.queryByText('Dialog content');
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('Backdrop can be clicked to close', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, {
              defaultOpen: true,
              content: _react["default"].createElement(_DialogContentSimple.SimpleContent, null)
            }, _react["default"].createElement("a", null, "Open Dialog")));
            expect(_react2.screen.getByText('Dialog content')).toBeInTheDocument();

            _react2.fireEvent.click(_react2.screen.getByTestId('backdrop'));

            _context3.next = 5;
            return (0, _react2.waitForElementToBeRemoved)(function () {
              return _react2.screen.queryByText('Dialog content');
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  test('Render props style', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee4() {
    var link, doneButton;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, {
              content: _react["default"].createElement(_DialogContentSimple.SimpleContent, null)
            }, function (dialogProps) {
              return _react["default"].createElement("a", dialogProps, "Open Dialog");
            }));
            link = _react2.screen.getByText('Open Dialog');

            _react2.fireEvent.click(link);

            expect(_react2.screen.getByText('Dialog content')).toBeInTheDocument();
            doneButton = _react2.screen.getByText('Done');

            _react2.fireEvent.click(doneButton);

            _context4.next = 8;
            return (0, _react2.waitForElementToBeRemoved)(function () {
              return _react2.screen.queryByText('Dialog content');
            });

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  test('Controlled', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee5() {
    var link, doneButton;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Controlled.Controlled, null));
            link = _react2.screen.getByText('Open Dialog');

            _react2.fireEvent.click(link);

            expect(_react2.screen.getByText(/We the People/)).toBeInTheDocument();
            doneButton = _react2.screen.getByText('Done Reading');

            _react2.fireEvent.click(doneButton);

            _context5.next = 8;
            return (0, _react2.waitForElementToBeRemoved)(function () {
              return _react2.screen.queryByText(/We the People/);
            });

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  test('Controlled no callbacks', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee6() {
    var SimpleControlled, link;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            SimpleControlled = function SimpleControlled() {
              var _useState = (0, _react.useState)(false),
                  _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
                  isOpen = _useState2[0],
                  setOpen = _useState2[1];

              return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Dialog.Dialog, {
                content: _react["default"].createElement(_DialogMediumContent.DialogMediumContent, null),
                isOpen: isOpen
              }), _react["default"].createElement("button", {
                onClick: function onClick() {
                  return setOpen(true);
                }
              }, "Open Dialog"));
            };

            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(SimpleControlled, null));
            link = _react2.screen.getByText('Open Dialog');

            _react2.fireEvent.click(link);

            expect(_react2.screen.getByText(/We the People/)).toBeInTheDocument();

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  test('Controlled - no children', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee7() {
    var link, doneButton;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Controlled.ControlledNoChildren, null));
            link = _react2.screen.getByText('Open Dialog');

            _react2.fireEvent.click(link);

            expect(_react2.screen.getByText(/We the People/)).toBeInTheDocument();
            doneButton = _react2.screen.getByText('Done Reading');

            _react2.fireEvent.click(doneButton);

            _context7.next = 8;
            return (0, _react2.waitForElementToBeRemoved)(function () {
              return _react2.screen.queryByText(/We the People/);
            });

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
  test('Controlled - legacy', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee8() {
    var link, doneButton;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Controlled.ControlledLegacy, null));
            link = _react2.screen.getByText('Open Dialog');

            _react2.fireEvent.click(link);

            expect(_react2.screen.getByText(/We the People/)).toBeInTheDocument();
            doneButton = _react2.screen.getByText('Done Reading');

            _react2.fireEvent.click(doneButton);

            _context8.next = 8;
            return (0, _react2.waitForElementToBeRemoved)(function () {
              return _react2.screen.queryByText(/We the People/);
            });

          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
  describe('Animation behavior', function () {
    beforeEach(function () {
      jest.useFakeTimers();
    });

    var runTimers = function runTimers() {
      return (0, _react2.act)(function () {
        jest.runOnlyPendingTimers();
      });
    };

    afterEach(function () {
      runTimers();
      jest.useRealTimers();
    });
    test('props onAfterClose and onAfterOpen are called', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee9() {
      var onAfterClose, onAfterOpen;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              onAfterClose = jest.fn();
              onAfterOpen = jest.fn();
              (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, {
                onAfterClose: onAfterClose,
                onAfterOpen: onAfterOpen,
                content: _react["default"].createElement(_DialogContentSimple.SimpleContent, null)
              }, _react["default"].createElement("a", null, "Open Dialog")));

              _react2.fireEvent.click(_react2.screen.getByText('Open Dialog'));

              runTimers();
              expect(onAfterOpen).toBeCalled();

              _react2.fireEvent.click(_react2.screen.getByText('Done'));

              _context9.next = 9;
              return (0, _react2.waitForElementToBeRemoved)(function () {
                return _react2.screen.queryByText('Dialog content');
              });

            case 9:
              expect(onAfterClose).toBeCalled();

            case 10:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));
    test('Close IconButton does not have tooltip when auto-focused', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog2.CloseIconButton, null));

      _react2.fireEvent.click(_react2.screen.getByText('Open Dialog'));

      runTimers();
      var closeButton = (0, _react2.within)(_react2.screen.getByRole('dialog')).getByRole('button');
      expect(closeButton).toHaveFocus();
      expect(_react2.screen.queryByRole('tooltip')).not.toBeInTheDocument();

      _react2.fireEvent.blur(closeButton);

      _react2.fireEvent.focus(closeButton);

      expect(_react2.screen.getByRole('tooltip')).toBeInTheDocument();

      _react2.fireEvent.click(closeButton);

      runTimers();
    });
  });
  test('onClose callback', function () {
    var onClose = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, {
      content: _react["default"].createElement(_DialogContentSimple.SimpleContent, null),
      defaultOpen: true,
      onClose: onClose
    }));

    _react2.fireEvent.click(_react2.screen.getByText('Done'));

    expect(onClose).toBeCalledTimes(1);
  });
  test('onClose callback called when canClose=true', function () {
    var onClose = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, {
      content: _react["default"].createElement(_DialogContentSimple.SimpleContent, null),
      defaultOpen: true,
      canClose: function canClose() {
        return true;
      },
      onClose: onClose
    }));

    _react2.fireEvent.click(_react2.screen.getByText('Done'));

    expect(onClose).toBeCalledTimes(1);
  });
  test('onClose callback not called when canClose=false', function () {
    var onClose = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, {
      content: _react["default"].createElement(_DialogContentSimple.SimpleContent, null),
      defaultOpen: true,
      canClose: function canClose() {
        return false;
      },
      onClose: onClose
    }));

    _react2.fireEvent.click(_react2.screen.getByText('Done'));

    expect(onClose).toBeCalledTimes(0);
  });
  describe('width', function () {
    test('xsmall', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, {
        content: _react["default"].createElement(_DialogContentSimple.SimpleContent, null),
        defaultOpen: true,
        width: "xxsmall"
      }));
      expect(_react2.screen.getByText('Dialog content')).toHaveStyleRule('width', '16rem');
    });
    test('small', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, {
        content: _react["default"].createElement(_DialogContentSimple.SimpleContent, null),
        defaultOpen: true,
        width: "small"
      }));
      expect(_react2.screen.getByText('Dialog content')).toHaveStyleRule('width', '28rem');
    });
    test('large', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, {
        content: _react["default"].createElement(_DialogContentSimple.SimpleContent, null),
        defaultOpen: true,
        width: "large"
      }));
      expect(_react2.screen.getByText('Dialog content')).toHaveStyleRule('width', '50rem');
    });
    test('arbitrary', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, {
        content: _react["default"].createElement(_DialogContentSimple.SimpleContent, null),
        defaultOpen: true,
        width: "24.5rem"
      }));
      expect(_react2.screen.getByText('Dialog content')).toHaveStyleRule('width', '24.5rem');
    });
    test('Dialog without content throws console warning', function () {
      var globalConsole = global.console;
      var errorMock = jest.fn();
      global.console = {
        error: errorMock
      };
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Dialog.Dialog, null));
      expect(errorMock.mock.calls).toMatchInlineSnapshot("\n         Array [\n           Array [\n             \"Dialog cannot be used without specifying content\",\n           ],\n         ]\n       ");
      global.console = globalConsole;
    });
  });
});
//# sourceMappingURL=Dialog.spec.js.map