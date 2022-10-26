"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _StringInput = require("./StringInput");

describe('StringInput tests', function () {
  jest.useFakeTimers();

  var getMockedComponent = function getMockedComponent(_ref) {
    var props = (0, _extends2["default"])({}, _ref);
    return _react2["default"].createElement(_StringInput.StringInput, (0, _extends2["default"])({
      onChange: jest.fn(),
      item: {
        id: '1'
      },
      suggestions: ['Foo']
    }, props));
  };

  describe('showDropDownMenu', function () {
    it('should show options dropdown if there are suggestions available', function () {
      (0, _componentsTestUtils.renderWithTheme)(getMockedComponent({
        suggestions: ['Foo']
      }));

      var input = _react.screen.getByPlaceholderText('any value');

      _react.fireEvent.click(input);

      expect(_react.screen.getByRole('listbox')).toBeInTheDocument();
      expect(_react.screen.getByText('Foo')).toBeInTheDocument();

      _react.fireEvent.click(document);
    });
  });
  describe('event hanlders', function () {
    it('should hide the options popover on enter', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(getMockedComponent({
        suggestions: ['Foo'],
        onInputChange: onChangeMock
      }));

      var input = _react.screen.getByPlaceholderText('any value');

      _react.fireEvent.click(input);

      _react.fireEvent.change(input, {
        target: {
          value: 'bar'
        }
      });

      _react.fireEvent.keyDown(input, {
        key: 'Enter',
        code: 'Enter',
        charCode: 13
      });

      expect(_react.screen.queryByText('Foo')).not.toBeInTheDocument();
    });
  });
});
//# sourceMappingURL=StringInput.spec.js.map