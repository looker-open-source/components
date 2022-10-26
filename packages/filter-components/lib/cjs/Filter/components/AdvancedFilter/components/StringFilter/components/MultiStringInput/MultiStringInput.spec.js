"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _MultiStringInput = require("./MultiStringInput");

describe('MultiStringInput tests', function () {
  jest.useFakeTimers();

  var getMockedComponent = function getMockedComponent(_ref) {
    var props = (0, _extends2["default"])({}, _ref);
    return _react2["default"].createElement(_MultiStringInput.MultiStringInput, (0, _extends2["default"])({
      onChange: jest.fn(),
      onInputChange: jest.fn(),
      item: {
        id: '1'
      },
      suggestions: ['Foo']
    }, props));
  };

  describe('showDropDownMenu', function () {
    it('defaults true, show options', function () {
      (0, _componentsTestUtils.renderWithTheme)(getMockedComponent({
        suggestions: ['Foo']
      }));

      var input = _react.screen.getByPlaceholderText('any value');

      _react.fireEvent.click(input);

      expect(_react.screen.getByRole('listbox')).toBeInTheDocument();
      expect(_react.screen.getByText('Foo')).toBeInTheDocument();

      _react.fireEvent.click(document);
    });
    it('no menu when false', function () {
      (0, _componentsTestUtils.renderWithTheme)(getMockedComponent({
        showDropDownMenu: false,
        suggestions: ['Foo']
      }));

      var input = _react.screen.getByPlaceholderText('any value');

      _react.fireEvent.click(input);

      expect(_react.screen.queryByRole('listbox')).not.toBeInTheDocument();
      expect(_react.screen.queryByText('Foo')).not.toBeInTheDocument();
    });
  });
  describe('disableCreate', function () {
    it('defaults false, allow free input', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(getMockedComponent({
        onChange: onChangeMock
      }));

      var input = _react.screen.getByPlaceholderText('any value');

      _react.fireEvent.change(input, {
        target: {
          value: 'bar,'
        }
      });

      expect(input).toHaveValue('');
      expect(onChangeMock).toHaveBeenCalledWith('1', {
        value: ['bar']
      });

      _react.fireEvent.click(document);
    });
    it('no free input when true', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(getMockedComponent({
        disableCreate: true,
        onChange: onChangeMock
      }));

      var input = _react.screen.getByPlaceholderText('any value');

      _react.fireEvent.change(input, {
        target: {
          value: 'bar,'
        }
      });

      expect(input).toHaveValue('bar,');
      expect(onChangeMock).not.toHaveBeenCalled();

      _react.fireEvent.click(document);
    });
  });
});
//# sourceMappingURL=MultiStringInput.spec.js.map