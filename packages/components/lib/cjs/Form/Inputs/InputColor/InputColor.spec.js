"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("jest-styled-components");

require("@testing-library/jest-dom/extend-expect");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _Button = require("../../../Button");

var _InputColor = require("./InputColor");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('InputColor', function () {
  test('starts with a named color value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputColor.InputColor, {
      value: "green"
    }));
    expect(_react2.screen.getByDisplayValue('green')).toBeInTheDocument();
  });
  test('responds to input value change', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputColor.InputColor, {
      value: "green"
    }));

    var input = _react2.screen.getByDisplayValue('green');

    input.focus();

    _react2.fireEvent.change(input, {
      target: {
        value: 'blue'
      }
    });

    expect(_react2.screen.getByDisplayValue('blue')).toBeInTheDocument();

    _react2.fireEvent.click(document);
  });
  test('with controlled state', function () {
    function Wrapper() {
      var _useState = (0, _react.useState)(''),
          _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
          value = _useState2[0],
          setValue = _useState2[1];

      function handleClick() {
        setValue('yellow');
      }

      function handleChange(e) {
        setValue(e.currentTarget.value);
      }

      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button.Button, {
        onClick: handleClick
      }, "Turn yellow"), _react["default"].createElement(_InputColor.InputColor, {
        value: value,
        onChange: handleChange,
        placeholder: "Select a color"
      }));
    }

    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Wrapper, null));

    var button = _react2.screen.getByText('Turn yellow');

    var input = _react2.screen.getByPlaceholderText('Select a color');

    expect(input).toHaveValue('');

    _react2.fireEvent.click(button);

    expect(input).toHaveValue('yellow');

    _react2.fireEvent.change(input, {
      target: {
        value: 'purple'
      }
    });

    expect(input).toHaveValue('purple');

    _react2.fireEvent.click(document);
  });
  test('opens on swatch click', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputColor.InputColor, {
      value: "green"
    }));

    _react2.fireEvent.click(_react2.screen.getByTestId('swatch'));

    expect(_react2.screen.getByTestId('color-picker')).toBeInTheDocument();

    _react2.fireEvent.click(document);
  });
  test('can receive focus and blur handlers', function () {
    var onBlur = jest.fn();
    var onFocus = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputColor.InputColor, {
      onBlur: onBlur,
      onFocus: onFocus,
      value: "green"
    }));

    var input = _react2.screen.getByDisplayValue('green');

    input.focus();
    expect(input).toHaveFocus();
    expect(onFocus).toHaveBeenCalled();
    input.blur();
    expect(input).not.toHaveFocus();
    expect(onBlur).toHaveBeenCalled();
  });
  test('changes color on <ColorPicker/> click', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputColor.InputColor, {
      placeholder: "Select a color"
    }));

    var input = _react2.screen.getByPlaceholderText('Select a color');

    _react2.fireEvent.click(_react2.screen.getByTestId('swatch'));

    var lightSaturationPreview = _react2.screen.getByTestId('light-saturation-preview');

    _react2.fireEvent.mouseDown(lightSaturationPreview, {
      clientX: 0,
      clientY: 0
    });

    expect(input.value).toBe('#ffffff');

    _react2.fireEvent.click(document);

    _react2.fireEvent.click(document);
  });
  test.skip('changes color on <ColorPicker/> mouse drag', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputColor.InputColor, {
      placeholder: "Select a color"
    }));

    var input = _react2.screen.getByPlaceholderText('Select a color');

    _react2.fireEvent.click(_react2.screen.getByTestId('swatch'));

    var lightSaturationPreview = _react2.screen.getByTestId('light-saturation-preview');

    _react2.fireEvent.mouseDown(lightSaturationPreview);

    _react2.fireEvent.mouseMove(lightSaturationPreview, {
      clientX: 200,
      clientY: 0
    });

    expect(input.value).toBe('#ff0000');

    _react2.fireEvent.mouseUp(lightSaturationPreview);

    _react2.fireEvent.click(document);

    _react2.fireEvent.click(document);
  });
  test('disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputColor.InputColor, {
      disabled: true,
      value: "green"
    }));
    expect(_react2.screen.getByRole('textbox')).toBeDisabled();

    _react2.fireEvent.click(_react2.screen.getByTestId('swatch'));

    expect(_react2.screen.queryByTestId('color-picker')).not.toBeInTheDocument();
  });
  test('readOnly', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputColor.InputColor, {
      readOnly: true,
      value: "green"
    }));
    expect(_react2.screen.getByRole('textbox')).toHaveAttribute('readonly');

    _react2.fireEvent.click(_react2.screen.getByTestId('swatch'));

    expect(_react2.screen.queryByTestId('color-picker')).not.toBeInTheDocument();
  });
  test('clear value', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputColor.InputColor, {
      value: "green",
      onChange: onChangeMock
    }));

    _react2.fireEvent.change(_react2.screen.getByRole('textbox'), {
      target: {
        value: ''
      }
    });

    expect(onChangeMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          Object {\n            \"currentTarget\": Object {\n              \"name\": undefined,\n              \"value\": \"\",\n            },\n            \"target\": Object {\n              \"name\": undefined,\n              \"value\": \"\",\n            },\n          },\n        ],\n      ]\n    ");

    _react2.fireEvent.click(document);
  });
  test('clear value with button', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputColor.InputColor, {
      value: "green",
      onChange: onChangeMock
    }));

    _react2.fireEvent.click(_react2.screen.getByRole('button'));

    expect(onChangeMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          Object {\n            \"currentTarget\": Object {\n              \"name\": undefined,\n              \"value\": \"\",\n            },\n            \"target\": Object {\n              \"name\": undefined,\n              \"value\": \"\",\n            },\n          },\n        ],\n      ]\n    ");
  });
});
//# sourceMappingURL=InputColor.spec.js.map