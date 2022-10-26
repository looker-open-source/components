"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _materialOutlined = require("@styled-icons/material-outlined");

var _material = require("@styled-icons/material");

var _react2 = _interopRequireDefault(require("react"));

var _InputText = require("./InputText");

var globalConsole = global.console;
var warnMock = jest.fn();
beforeEach(function () {
  jest.useFakeTimers();
  global.console = {
    warn: warnMock
  };
});
afterEach(function () {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  jest.resetAllMocks();
  global.console = globalConsole;
});
describe('InputText', function () {
  test('with name and id', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
      name: "Bob",
      id: "Bobby"
    }));
    expect(_react.screen.getByRole('textbox')).toHaveAttribute('name', 'Bob');
    expect(_react.screen.getByRole('textbox')).toHaveAttribute('id', 'Bobby');
    expect(_react.screen.getByRole('textbox')).toHaveAttribute('type', 'text');
  });
  test('should accept disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
      disabled: true
    }));
    expect(_react.screen.getByRole('textbox')).toBeDisabled();
  });
  test('with a placeholder', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
      placeholder: "I am a placeholder"
    }));
    expect(_react.screen.getByPlaceholderText('I am a placeholder')).toBeInTheDocument();
  });
  test('should accept readOnly', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
      readOnly: true
    }));
    expect(_react.screen.getByRole('textbox')).toHaveAttribute('readonly');
  });
  test('should accept type', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
      type: "tel"
    }));
    expect(_react.screen.getByRole('textbox')).toHaveAttribute('type', 'tel');
  });
  test('should accept required', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
      required: true
    }));
    expect(_react.screen.getByRole('textbox')).toBeRequired();
  });
  test('should accept defaultValue', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
      defaultValue: "Some value"
    }));
    expect(_react.screen.getByRole('textbox')).toHaveValue('Some value');
  });
  test('with aria-describedby', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
      "aria-describedby": "some-id"
    }));
    expect(_react.screen.getByRole('textbox')).toHaveAttribute('aria-describedby', 'some-id');
  });
  test('autoResize', function () {
    var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
      autoResize: true,
      placeholder: "resize me"
    })),
        container = _renderWithTheme.container;

    expect(container.firstChild).toHaveStyleRule('width: auto');
    expect(_react.screen.getByPlaceholderText('resize me')).toHaveStyleRule('position: absolute');
    expect(_react.screen.getByText('resize me')).toBeVisible();
  });
  test('with an error validation', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
      placeholder: "Hello",
      validationType: "error"
    }));
    expect(_react.screen.getByPlaceholderText('Hello')).toHaveAttribute('aria-invalid');
  });
  describe('before & after', function () {
    test('ReactNode', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
        before: "before",
        after: "after"
      }));
      expect(_react.screen.getByText('before')).toBeVisible();
      expect(_react.screen.getByText('after')).toBeVisible();
    });
    test('Simple string', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
        before: "before",
        after: "after"
      }));
      expect(_react.screen.getByText('before')).toBeVisible();
      expect(_react.screen.getByText('after')).toBeVisible();
    });
    test('icons', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
        iconBefore: _react2["default"].createElement(_material.Favorite, {
          title: "Before Title"
        }),
        iconAfter: _react2["default"].createElement(_materialOutlined.AccountCircle, {
          title: "After Title"
        })
      }));
      expect(_react.screen.getByTitle('Before Title')).toBeInTheDocument();
      expect(_react.screen.getByTitle('After Title')).toBeInTheDocument();
    });
    test('redundant ones should not render', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_InputText.InputText, {
        placeholder: "Hello",
        iconBefore: _react2["default"].createElement(_material.Favorite, null),
        before: "$"
      }), _react2["default"].createElement(_InputText.InputText, {
        placeholder: "Goodbye",
        iconAfter: _react2["default"].createElement(_materialOutlined.AccountCircle, null),
        after: "%"
      })));
      expect(_react.screen.queryByPlaceholderText('Hello')).not.toBeInTheDocument();
      expect(_react.screen.queryByPlaceholderText('Goodbye')).not.toBeInTheDocument();
      expect(warnMock.mock.calls).toMatchInlineSnapshot("\n        Array [\n          Array [\n            \"Use before or iconBefore, but not both at the same time.\",\n          ],\n          Array [\n            \"Use after or iconAfter, but not both at the same time.\",\n          ],\n        ]\n      ");
    });
    test.skip('focus & blur behavior', function () {
      var handleBlur = jest.fn();
      var handleFocus = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
        onBlur: handleBlur,
        onFocus: handleFocus,
        after: "after"
      }));

      var after = _react.screen.getByText('after');

      _userEvent["default"].click(after);

      expect(handleFocus).toHaveBeenCalled();
      expect(_react.screen.getByRole('textbox')).toHaveFocus();

      _userEvent["default"].click(after);

      expect(handleBlur).not.toHaveBeenCalled();
      expect(_react.screen.getByRole('textbox')).toHaveFocus();
    });
  });
  test('Should trigger onChange handler', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InputText.InputText, {
      onChange: onChange
    }));

    _userEvent["default"].type(_react.screen.getByRole('textbox'), 'Hello world');

    expect(onChange).toHaveBeenCalled();
  });
  test('onBlur & onFocus callbacks', function () {
    var handleBlur = jest.fn();
    var handleFocus = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_InputText.InputText, {
      onBlur: handleBlur,
      onFocus: handleFocus
    }), _react2["default"].createElement("button", null, "click")));

    _userEvent["default"].click(_react.screen.getByRole('textbox'));

    expect(handleFocus).toHaveBeenCalled();
    expect(_react.screen.getByRole('textbox')).toHaveFocus();

    _userEvent["default"].click(_react.screen.getByText('click'));

    expect(handleBlur).toHaveBeenCalled();
    expect(_react.screen.getByRole('textbox')).not.toHaveFocus();
  });
});
//# sourceMappingURL=InputText.spec.js.map