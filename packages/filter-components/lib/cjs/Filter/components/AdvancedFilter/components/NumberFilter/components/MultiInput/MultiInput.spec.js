"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _components = require("@looker/components");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireWildcard(require("react"));

var _MultiInput = require("./MultiInput");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('MultiInput', function () {
  var item = {
    id: '1',
    type: '=',
    is: true,
    value: []
  };
  it('calls onChange with numbers', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_MultiInput.MultiInput, {
      item: item,
      onChange: onChange,
      placeholder: "any value"
    }));

    var input = _react.screen.getByPlaceholderText('any value');

    _react.fireEvent.change(input, {
      target: {
        value: '123,456,'
      }
    });

    expect(input).toHaveValue('');
    expect(onChange).toHaveBeenCalledWith('1', {
      value: [123, 456]
    });
  });
  it('calls onChange with valid inputValue when closed', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var onChange, ClosingComponent, input, button, closed;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            onChange = jest.fn();

            ClosingComponent = function ClosingComponent() {
              var _useState = (0, _react2.useState)(true),
                  _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
                  isOpen = _useState2[0],
                  setIsOpen = _useState2[1];

              var handleClick = function handleClick() {
                return setIsOpen(false);
              };

              return _react2["default"].createElement(_react2["default"].Fragment, null, isOpen ? _react2["default"].createElement(_components.Portal, null, _react2["default"].createElement(_MultiInput.MultiInput, {
                item: item,
                onChange: onChange,
                placeholder: "any value"
              })) : _react2["default"].createElement("div", null, "Closed"), _react2["default"].createElement("button", {
                onClick: handleClick
              }, "Close"));
            };

            (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(ClosingComponent, null));
            input = _react.screen.getByPlaceholderText('any value');

            _react.fireEvent.change(input, {
              target: {
                value: '123'
              }
            });

            expect(onChange).not.toHaveBeenCalled();
            button = _react.screen.getByText('Close');

            _react.fireEvent.click(button);

            _context.next = 10;
            return _react.screen.findByText('Closed');

          case 10:
            closed = _context.sent;
            expect(closed).toBeInTheDocument();
            expect(onChange).toHaveBeenCalledWith('1', {
              value: [123]
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('does not call onChange if a non-number is entered', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_MultiInput.MultiInput, {
      item: item,
      onChange: onChange,
      placeholder: "any value"
    }));

    var input = _react.screen.getByPlaceholderText('any value');

    _react.fireEvent.change(input, {
      target: {
        value: '100k,'
      }
    });

    expect(input).toHaveValue('100k');
    expect(onChange).not.toHaveBeenCalled();
  });
  it('calls onChange with a big integer', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_MultiInput.MultiInput, {
      item: item,
      onChange: onChange,
      placeholder: "any value"
    }));

    var input = _react.screen.getByPlaceholderText('any value');

    _react.fireEvent.change(input, {
      target: {
        value: '12345678901234567890,'
      }
    });

    expect(onChange.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"1\",\n          Object {\n            \"value\": Array [\n              12345678901234567890n,\n            ],\n          },\n        ],\n      ]\n    ");
  });
});
//# sourceMappingURL=MultiInput.spec.js.map