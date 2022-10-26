"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _componentsProviders = require("@looker/components-providers");

var _react2 = require("@testing-library/react");

var _designTokens = require("@looker/design-tokens");

var _FloatingLabelField = require("./FloatingLabelField");

var _excluded = ["children"];

var TestComponent = function TestComponent(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? _react["default"].createElement("input", {
    id: "test",
    type: "text"
  }) : _ref$children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, _react["default"].createElement(_FloatingLabelField.FloatingLabelField, (0, _extends2["default"])({
    id: "test",
    label: "hello!"
  }, props), children));
};

describe('FloatingLabelField', function () {
  test('No value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(TestComponent, null));
    expect(_react2.screen.getByText('hello!').closest('div')).toHaveClass('label-down');
  });
  test('With value (controlled)', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(TestComponent, {
      hasValue: true
    }, _react["default"].createElement("input", {
      id: "test",
      type: "text",
      defaultValue: "test"
    })));
    expect(_react2.screen.getByText('hello!').closest('div')).toHaveClass('label-up');
  });
  test('externalLabel', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(TestComponent, {
      hasValue: true,
      externalLabel: true
    }, _react["default"].createElement("input", {
      id: "test",
      type: "text",
      defaultValue: "test"
    })));
    expect(_react2.screen.getByText('hello!').closest('div')).not.toHaveClass('label-up');
  });
  test('Focus/change/blur', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(TestComponent, null));

    var input = _react2.screen.getByLabelText('hello!');

    var label = _react2.screen.getByText('hello!');

    var wrapper = label.closest('div');
    expect(wrapper).toHaveClass('label-down');

    _react2.fireEvent.focus(input);

    expect(label).toHaveStyle("color: ".concat(_designTokens.theme.colors.key));
    expect(wrapper).toHaveClass('label-up');

    _react2.fireEvent.blur(input, {
      relatedTarget: document.body
    });

    expect(wrapper).toHaveClass('label-down');

    _react2.fireEvent.focus(input);

    _react2.fireEvent.change(input, {
      target: {
        value: 'Hello World'
      }
    });

    _react2.fireEvent.blur(input);

    expect(wrapper).toHaveClass('label-up');
  });
  test('Error', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(TestComponent, {
      validationMessage: {
        message: 'Oops',
        type: 'error'
      }
    }));

    var label = _react2.screen.getByText('hello!');

    expect(label).toHaveStyle("color: ".concat(_designTokens.theme.colors.critical));
  });
  test('Detail', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(TestComponent, {
      detail: "0/50"
    }));

    _react2.screen.getByText('0/50');
  });
});
//# sourceMappingURL=FloatingLabelField.spec.js.map