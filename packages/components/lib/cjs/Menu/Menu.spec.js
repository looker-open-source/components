"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("@testing-library/jest-dom/extend-expect");

var _react = require("@testing-library/react");

var _react2 = _interopRequireWildcard(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _materialOutlined = require("@styled-icons/material-outlined");

var _Tooltip = require("../Tooltip");

var _ = require("./");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var menu = _react2["default"].createElement(_.Menu, {
  content: _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_.MenuItem, {
    icon: _react2["default"].createElement(_materialOutlined.Favorite, null)
  }, "Gouda"), _react2["default"].createElement(_.MenuItem, {
    icon: _react2["default"].createElement(_materialOutlined.Favorite, null)
  }, "Swiss"))
}, _react2["default"].createElement(_Tooltip.Tooltip, {
  content: "Select your favorite kind"
}, _react2["default"].createElement("button", null, "Cheese")));

describe('<Menu />', function () {
  test('Menu Opens and Closes', function () {
    (0, _componentsTestUtils.renderWithTheme)(menu);

    var button = _react.screen.getByText('Cheese');

    expect(_react.screen.queryByText('Swiss')).not.toBeInTheDocument();

    _react.fireEvent.click(button);

    expect(_react.screen.getByText('Swiss')).toBeInTheDocument();

    _react.fireEvent.click(document);

    expect(_react.screen.queryByText('Swiss')).not.toBeInTheDocument();
  });
  test('Menu Button has the tooltip', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var button;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(menu);
            button = _react.screen.getByText('Cheese');
            expect(_react.screen.queryByText('Select your favorite kind')).not.toBeInTheDocument();

            _react.fireEvent.mouseOver(button);

            expect(_react.screen.getByText('Select your favorite kind')).toBeInTheDocument();

            _react.fireEvent.mouseOut(button);

            _context.next = 8;
            return (0, _react.waitForElementToBeRemoved)(function () {
              return _react.screen.queryByText('Select your favorite kind');
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('closes on MenuItem click', function () {
    var Closable = function Closable() {
      function handleClick(e) {
        e.preventDefault();
      }

      return _react2["default"].createElement(_.Menu, {
        content: _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_.MenuItem, {
          icon: _react2["default"].createElement(_materialOutlined.Favorite, null),
          onClick: handleClick
        }, "Gouda"), _react2["default"].createElement(_.MenuItem, {
          icon: _react2["default"].createElement(_materialOutlined.Favorite, null)
        }, "Swiss"))
      }, _react2["default"].createElement("button", null, "Cheese"));
    };

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(Closable, null));

    var button = _react.screen.getByText('Cheese');

    _react.fireEvent.click(button);

    var defaultPreventedItem = _react.screen.getByText('Gouda');

    var item = _react.screen.getByText('Swiss');

    _react.fireEvent.click(defaultPreventedItem);

    expect(defaultPreventedItem).toBeInTheDocument();
    expect(item).toBeInTheDocument();

    _react.fireEvent.click(item);

    expect(defaultPreventedItem).not.toBeInTheDocument();
    expect(item).not.toBeInTheDocument();

    _react.fireEvent.click(document);
  });
  test('Disabled Menu does not open when clicked', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.Menu, {
      disabled: true,
      content: _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_.MenuItem, {
        icon: _react2["default"].createElement(_materialOutlined.Favorite, null)
      }, "Gouda"), _react2["default"].createElement(_.MenuItem, {
        icon: _react2["default"].createElement(_materialOutlined.Favorite, null)
      }, "Swiss"))
    }, _react2["default"].createElement("div", null, "Cheese")));

    var trigger = _react.screen.getByText('Cheese');

    expect(_react.screen.queryByText('Swiss')).not.toBeInTheDocument();

    _react.fireEvent.click(trigger);

    expect(_react.screen.queryByText('Swiss')).not.toBeInTheDocument();

    _react.fireEvent.click(document);
  });
  test('Starting with Menu open', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.Menu, {
      isOpen: true,
      content: _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_.MenuItem, {
        icon: _react2["default"].createElement(_materialOutlined.Favorite, null)
      }, "Gouda"), _react2["default"].createElement(_.MenuItem, {
        icon: _react2["default"].createElement(_materialOutlined.Favorite, null)
      }, "Swiss"))
    }, _react2["default"].createElement("button", null, "Cheese")));
    expect(_react.screen.getByText('Swiss')).toBeInTheDocument();

    _react.fireEvent.click(document);
  });
  test('Trigger is shown/hidden on hover of hoverDisclosureRef', function () {
    var Component = function Component() {
      var hoverRef = (0, _react2.useRef)(null);
      return _react2["default"].createElement("div", {
        ref: hoverRef
      }, _react2["default"].createElement(_.Menu, {
        hoverDisclosureRef: hoverRef,
        content: _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_.MenuItem, {
          icon: _react2["default"].createElement(_materialOutlined.Favorite, null)
        }, "Gouda"), _react2["default"].createElement(_.MenuItem, {
          icon: _react2["default"].createElement(_materialOutlined.Favorite, null)
        }, "Swiss"))
      }, _react2["default"].createElement("button", null, "Cheese")), "Some text in the div");
    };

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(Component, null));

    var trigger = _react.screen.queryByText('Cheese');

    var div = _react.screen.getByText('Some text in the div');

    expect(trigger).not.toBeInTheDocument();
    (0, _react.fireEvent)(div, new MouseEvent('mouseenter', {
      bubbles: true,
      cancelable: true
    }));

    var triggerNew = _react.screen.getByText('Cheese');

    expect(_react.screen.queryByText('Gouda')).not.toBeInTheDocument();

    _react.fireEvent.click(triggerNew);

    expect(_react.screen.getByText('Gouda')).toBeInTheDocument();

    _react.fireEvent.click(document);
  });
  describe('MenuItem nestedMenu', function () {
    test('toggle on hover', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
      var button, parent, child;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.Menu, {
                content: _react2["default"].createElement(_.MenuItem, {
                  nestedMenu: _react2["default"].createElement(_.MenuItem, null, "Swiss")
                }, "Gouda")
              }, _react2["default"].createElement("button", null, "Cheese")));
              button = _react.screen.getByText('Cheese');

              _react.fireEvent.click(button);

              parent = _react.screen.getByText('Gouda');

              _react.fireEvent.mouseEnter(parent);

              _context2.next = 7;
              return _react.screen.findByText('Swiss');

            case 7:
              child = _react.screen.getByText('Swiss');
              expect(child).toBeVisible();

              _react.fireEvent.mouseMove(parent, {
                screenX: 8,
                screenY: 3
              });

              _react.fireEvent.mouseLeave(parent, {
                screenX: 9,
                screenY: 7
              });

              _react.fireEvent.mouseEnter(child);

              _context2.next = 14;
              return _react.screen.findByText('Swiss');

            case 14:
              expect(_react.screen.getByText('Swiss')).toBeVisible();

              _react.fireEvent.mouseLeave(child);

              expect(_react.screen.getByText('Swiss')).toBeVisible();

              _react.fireEvent.mouseEnter(parent);

              _react.fireEvent.mouseMove(parent, {
                screenX: 8,
                screenY: 3
              });

              _react.fireEvent.mouseLeave(parent, {
                screenX: 8,
                screenY: 6
              });

              expect(_react.screen.queryByText('Swiss')).not.toBeInTheDocument();

              _react.fireEvent.click(document);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    test('toggle on arrow keys', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee3() {
      var button, parent, child, child2;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.Menu, {
                content: _react2["default"].createElement(_.MenuItem, {
                  nestedMenu: _react2["default"].createElement(_.MenuItem, null, "Swiss")
                }, "Gouda")
              }, _react2["default"].createElement("button", null, "Cheese")));
              button = _react.screen.getByText('Cheese');
              button.focus();

              _react.fireEvent.click(button);

              parent = _react.screen.getByText('Gouda');

              _react.fireEvent.keyDown(parent, {
                key: 'ArrowRight'
              });

              child = _react.screen.getByText('Swiss');
              expect(child).toBeVisible();

              _react.fireEvent.keyDown(child, {
                key: 'ArrowLeft'
              });

              expect(_react.screen.queryByText('Swiss')).not.toBeInTheDocument();

              _react.fireEvent.keyDown(parent, {
                key: 'ArrowRight'
              });

              child2 = _react.screen.getByText('Swiss');
              expect(child2).toBeVisible();

              _react.fireEvent.keyDown(child2, {
                key: 'Escape'
              });

              expect(_react.screen.queryByText('Swiss')).not.toBeInTheDocument();
              expect(_react.screen.queryByText('Gouda')).not.toBeInTheDocument();
              _context3.next = 18;
              return (0, _react.waitFor)(function () {
                expect(button).toHaveFocus();
              });

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    test('toggle on click', function () {
      var onClick = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.Menu, {
        isOpen: true,
        content: _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_.MenuItem, {
          nestedMenu: _react2["default"].createElement(_.MenuItem, null, "Camembert")
        }, "French"), _react2["default"].createElement(_.MenuItem, {
          onClick: onClick,
          nestedMenu: _react2["default"].createElement(_.MenuItem, null, "Gouda")
        }, "Dutch"))
      }, _react2["default"].createElement("button", null, "Cheese")));

      _react.fireEvent.click(_react.screen.getByText('French'));

      expect(_react.screen.getByText('Camembert')).toBeVisible();

      _react.fireEvent.click(_react.screen.getByText('French'));

      expect(_react.screen.getByText('Camembert')).toBeVisible();

      _react.fireEvent.click(_react.screen.getByText('Cheese'));

      _react.fireEvent.click(_react.screen.getByText('Dutch'));

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(_react.screen.queryByRole('menu')).not.toBeInTheDocument();
    });
    test('clicking an item in the nested menu closes the parent menu', function () {
      var onClick = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.Menu, {
        content: _react2["default"].createElement(_.MenuItem, {
          nestedMenu: _react2["default"].createElement(_.MenuItem, {
            onClick: onClick
          }, "Camembert")
        }, "French")
      }, _react2["default"].createElement("button", null, "Cheese")));

      _react.fireEvent.click(_react.screen.getByText('Cheese'));

      _react.fireEvent.keyDown(_react.screen.getByText('French'), {
        key: 'ArrowRight'
      });

      _react.fireEvent.click(_react.screen.getByText('Camembert'));

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(_react.screen.queryByRole('menu')).not.toBeInTheDocument();
    });
    test('item with preventDefault', function () {
      var onClickMock = jest.fn();

      var handleClick = function handleClick(e) {
        onClickMock();
        e.preventDefault();
      };

      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.Menu, {
        content: _react2["default"].createElement(_.MenuItem, {
          nestedMenu: _react2["default"].createElement(_.MenuItem, {
            onClick: handleClick
          }, "Camembert")
        }, "French")
      }, _react2["default"].createElement("button", null, "Cheese")));

      _react.fireEvent.click(_react.screen.getByText('Cheese'));

      var parent = _react.screen.getByText('French');

      _react.fireEvent.keyDown(parent, {
        key: 'ArrowRight'
      });

      var child = _react.screen.getByText('Camembert');

      _react.fireEvent.click(_react.screen.getByText('Camembert'));

      expect(onClickMock).toHaveBeenCalledTimes(1);
      expect(child).toBeVisible();
      expect(parent).toBeVisible();

      _react.fireEvent.click(document);
    });
    test('3 levels deep', function () {
      var onClickMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.Menu, {
        content: _react2["default"].createElement(_.MenuItem, {
          nestedMenu: _react2["default"].createElement(_.MenuItem, {
            nestedMenu: _react2["default"].createElement(_.MenuItem, {
              onClick: onClickMock
            }, "Camembert")
          }, "Stinky")
        }, "French")
      }, _react2["default"].createElement("button", null, "Cheese")));

      _react.fireEvent.click(_react.screen.getByText('Cheese'));

      var first = _react.screen.getByText('French');

      _react.fireEvent.click(first);

      var second = _react.screen.getByText('Stinky');

      _react.fireEvent.click(second);

      var third = _react.screen.getByText('Camembert');

      _react.fireEvent.click(third);

      expect(_react.screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });
});
//# sourceMappingURL=Menu.spec.js.map