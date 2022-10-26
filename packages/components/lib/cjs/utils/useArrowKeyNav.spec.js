"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _react2 = _interopRequireWildcard(require("react"));

var _useArrowKeyNav = require("./useArrowKeyNav");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ArrowKeyNavComponent = function ArrowKeyNavComponent(_ref) {
  var axis = _ref.axis,
      children = _ref.children;
  var navProps = (0, _useArrowKeyNav.useArrowKeyNav)({
    axis: axis
  });
  return _react2["default"].createElement("ul", (0, _extends2["default"])({
    role: "list"
  }, navProps), children, _react2["default"].createElement("li", {
    tabIndex: -1
  }, "first"), _react2["default"].createElement("li", {
    tabIndex: -1
  }, "second"), _react2["default"].createElement("li", {
    tabIndex: -1
  }, "third"));
};

describe('useArrowKeyNav', function () {
  test('tabbing', function () {
    (0, _react.render)(_react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement("button", null, "before"), _react2["default"].createElement(ArrowKeyNavComponent, null), _react2["default"].createElement("button", null, "after")));

    var before = _react.screen.getByText('before');

    var first = _react.screen.getByText('first');

    _userEvent["default"].click(before);

    _userEvent["default"].tab();

    expect(first).toHaveFocus();

    _userEvent["default"].tab();

    expect(_react.screen.getByText('after')).toHaveFocus();

    _userEvent["default"].tab({
      shift: true
    });

    expect(first).toHaveFocus();

    _userEvent["default"].tab({
      shift: true
    });

    expect(before).toHaveFocus();
  });
  test('up/down arrow keys', function () {
    (0, _react.render)(_react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement("button", null, "before"), _react2["default"].createElement(ArrowKeyNavComponent, null), _react2["default"].createElement("button", null, "after")));

    var before = _react.screen.getByText('before');

    var first = _react.screen.getByText('first');

    var second = _react.screen.getByText('second');

    var third = _react.screen.getByText('third');

    _userEvent["default"].click(before);

    _userEvent["default"].tab();

    _userEvent["default"].type(first, '{arrowdown}');

    expect(second).toHaveFocus();

    _userEvent["default"].type(second, '{arrowdown}');

    expect(third).toHaveFocus();

    _userEvent["default"].type(third, '{arrowdown}');

    expect(first).toHaveFocus();

    _userEvent["default"].type(first, '{arrowup}');

    expect(third).toHaveFocus();

    _userEvent["default"].type(third, '{arrowup}');

    expect(second).toHaveFocus();

    _userEvent["default"].tab({
      shift: true
    });

    expect(before).toHaveFocus();

    _userEvent["default"].tab();

    expect(second).toHaveFocus();
  });
  test('left/right arrow keys', function () {
    (0, _react.render)(_react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement("button", null, "before"), _react2["default"].createElement(ArrowKeyNavComponent, {
      axis: "horizontal"
    }), _react2["default"].createElement("button", null, "after")));

    var before = _react.screen.getByText('before');

    var first = _react.screen.getByText('first');

    var second = _react.screen.getByText('second');

    var third = _react.screen.getByText('third');

    _userEvent["default"].click(before);

    _userEvent["default"].tab();

    _userEvent["default"].type(first, '{arrowright}');

    expect(second).toHaveFocus();

    _userEvent["default"].type(second, '{arrowright}');

    expect(third).toHaveFocus();

    _userEvent["default"].type(third, '{arrowright}');

    expect(first).toHaveFocus();

    _userEvent["default"].type(first, '{arrowleft}');

    expect(third).toHaveFocus();

    _userEvent["default"].type(third, '{arrowleft}');

    expect(second).toHaveFocus();

    _userEvent["default"].tab({
      shift: true
    });

    expect(before).toHaveFocus();

    _userEvent["default"].tab();

    expect(second).toHaveFocus();
  });
  test('un-mounting the focused item', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var TestComponent, before, more, moreStuff;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            TestComponent = function TestComponent() {
              var _useState = (0, _react2.useState)(false),
                  _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
                  showMore = _useState2[0],
                  setShowMore = _useState2[1];

              return _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement("button", null, "before"), _react2["default"].createElement(ArrowKeyNavComponent, null, showMore ? _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement("li", {
                tabIndex: -1
              }, "more stuff"), _react2["default"].createElement("li", {
                tabIndex: -1,
                onClick: function onClick() {
                  return setShowMore(false);
                }
              }, "less")) : _react2["default"].createElement("li", {
                tabIndex: -1,
                onClick: function onClick() {
                  return setShowMore(true);
                }
              }, "more")));
            };

            (0, _react.render)(_react2["default"].createElement(TestComponent, null));
            before = _react.screen.getByText('before');
            more = _react.screen.getByText('more');

            _userEvent["default"].click(before);

            _userEvent["default"].tab();

            expect(more).toHaveFocus();

            _userEvent["default"].type(more, '{enter}');

            moreStuff = _react.screen.getByText('more stuff');
            _context.next = 11;
            return (0, _react.waitFor)(function () {
              return expect(moreStuff).toHaveFocus();
            });

          case 11:
            _userEvent["default"].type(moreStuff, '{arrowdown}');

            expect(_react.screen.getByText('less')).toHaveFocus();

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('Menu: focus landed on container after tab, moves to first item', function () {
    (0, _react.render)(_react2["default"].createElement(ArrowKeyNavComponent, null));

    var list = _react.screen.getByRole('list');

    var first = _react.screen.getByText('first');

    list.focus();
    expect(first).toHaveFocus();

    _userEvent["default"].type(first, '{arrowdown}');

    expect(_react.screen.getByText('second')).toHaveFocus();
  });
  test('Menu: focus landed on container after click, stays there', function () {
    var globalMatches = Element.prototype.matches;
    Element.prototype.matches = jest.fn(function () {
      return false;
    });
    (0, _react.render)(_react2["default"].createElement(ArrowKeyNavComponent, null));

    var list = _react.screen.getByRole('list');

    list.focus();
    expect(_react.screen.getByText('first')).not.toHaveFocus();

    _userEvent["default"].type(list, '{arrowdown}');

    expect(_react.screen.getByText('first')).toHaveFocus();
    Element.prototype.matches = globalMatches;
  });
});
//# sourceMappingURL=useArrowKeyNav.spec.js.map