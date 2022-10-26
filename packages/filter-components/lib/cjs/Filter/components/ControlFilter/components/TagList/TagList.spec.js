"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _TagList = require("./TagList");

describe('TagList tests', function () {
  jest.useFakeTimers();
  describe('on `inputchange`', function () {
    var filterOptions = function filterOptions(optionText) {
      var input = _react.screen.getByPlaceholderText('any value');

      _react.fireEvent.change(input, {
        target: {
          value: optionText
        }
      });
    };

    describe('when options are more than 999', function () {
      it('should trigger the input change handler', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
        var value, onInputChange, options1000, Component;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                value = [];
                onInputChange = jest.fn();
                options1000 = Array.from(Array(1000), function (_, i) {
                  return {
                    label: String(i),
                    value: String(i)
                  };
                });
                Component = _react2["default"].createElement(_TagList.TagList, {
                  value: value,
                  options: options1000,
                  onChange: jest.fn(),
                  onInputChange: onInputChange
                });
                (0, _componentsTestUtils.renderWithTheme)(Component);
                filterOptions('label1');
                (0, _react.act)(function () {
                  jest.runAllTimers();
                });
                _context.next = 9;
                return (0, _react.waitFor)(function () {
                  expect(onInputChange).toHaveBeenCalledWith('label1');
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    });
  });
});
//# sourceMappingURL=TagList.spec.js.map