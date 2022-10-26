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

var _FieldColor = require("./FieldColor");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('FieldColor', function () {
  var FieldColorValidationMessage = function FieldColorValidationMessage() {
    return _react["default"].createElement(_FieldColor.FieldColor, {
      validationMessage: {
        message: 'Error!',
        type: 'error'
      }
    });
  };

  test('with a validation message', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(FieldColorValidationMessage, null));
    expect(_react2.screen.getByText('Error!')).toBeInTheDocument();
  });
  test('A FieldColor with description has proper aria setup', function () {
    var _descriptionDom$paren;

    var description = 'This is a description';
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldColor.FieldColor, {
      id: "test",
      defaultValue: "example",
      description: description
    }));

    var input = _react2.screen.getByDisplayValue('example');

    var id = input.getAttribute('aria-describedby');
    expect(id).toBeDefined();

    var descriptionDom = _react2.screen.getByText(description);

    expect(descriptionDom.parentElement).toBeInTheDocument();
    expect((_descriptionDom$paren = descriptionDom.parentElement) === null || _descriptionDom$paren === void 0 ? void 0 : _descriptionDom$paren.id).toEqual(id);
  });
  test('A FieldColor with error has proper aria setup', function () {
    var _errorMessageDom$pare;

    var errorMessage = 'This is an error';
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldColor.FieldColor, {
      id: "test",
      defaultValue: "example",
      validationMessage: {
        message: errorMessage,
        type: 'error'
      }
    }));

    var input = _react2.screen.getByDisplayValue('example');

    var id = input.getAttribute('aria-describedby');
    expect(id).toBeDefined();

    var errorMessageDom = _react2.screen.getByText(errorMessage);

    expect(errorMessageDom.parentElement).toBeInTheDocument();
    expect((_errorMessageDom$pare = errorMessageDom.parentElement) === null || _errorMessageDom$pare === void 0 ? void 0 : _errorMessageDom$pare.id).toEqual(id);
  });
  test('with an onChange', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldColor.FieldColor, {
      onChange: onChangeMock,
      label: "Background Color"
    }));

    var input = _react2.screen.getByLabelText('Background Color');

    _react2.fireEvent.change(input, {
      target: {
        value: '#FFFF00'
      }
    });

    expect(onChangeMock).toHaveBeenCalledWith({
      currentTarget: {
        value: '#FFFF00'
      },
      target: {
        value: '#FFFF00'
      }
    });

    _react2.fireEvent.click(document);
  });
  test('with a defaultValue', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldColor.FieldColor, {
      defaultValue: "purple",
      label: "Background Color"
    }));

    var input = _react2.screen.getByLabelText('Background Color');

    expect(input).toHaveValue('purple');
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
      }, "Turn yellow"), _react["default"].createElement(_FieldColor.FieldColor, {
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
});
//# sourceMappingURL=FieldColor.spec.js.map