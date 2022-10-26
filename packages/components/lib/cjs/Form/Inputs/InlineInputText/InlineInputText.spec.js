"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireWildcard(require("react"));

var _Button = require("../../../Button");

var _InlineInputText = require("./InlineInputText");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ControlledInlineInputText = function ControlledInlineInputText() {
  var _useState = (0, _react2.useState)('Type here...'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var onChange = function onChange(event) {
    setValue(event.currentTarget.value);
  };

  var onClick = function onClick() {
    setValue('You clicked the button');
  };

  return _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_InlineInputText.InlineInputText, {
    value: value,
    onChange: onChange
  }), _react2["default"].createElement(_Button.Button, {
    onClick: onClick
  }, "Click Me"));
};

describe('InlineInputText', function () {
  test('renders and displays placeholder', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InlineInputText.InlineInputText, {
      placeholder: "this is the placeholder"
    }));
    expect(_react.screen.getByPlaceholderText('this is the placeholder')).toBeInTheDocument();
  });
  test('renders and displays value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InlineInputText.InlineInputText, {
      value: "this is the value"
    }));
    expect(_react.screen.getByDisplayValue('this is the value')).toBeInTheDocument();
  });
  test('renders and displays when passed prop simple', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InlineInputText.InlineInputText, {
      simple: true,
      value: "this is the value"
    }));
    expect(_react.screen.getByDisplayValue('this is the value')).toBeInTheDocument();
  });
  test('renders and displays when passed prop readOnly', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InlineInputText.InlineInputText, {
      simple: true,
      value: "this is the value"
    }));
    expect(_react.screen.getByDisplayValue('this is the value')).toBeInTheDocument();
  });
  test('renders and displays when passed prop underlineOnlyOnHover', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InlineInputText.InlineInputText, {
      underlineOnlyOnHover: true,
      value: "this is the value"
    }));
    expect(_react.screen.getByDisplayValue('this is the value')).toBeInTheDocument();
  });
  test('applies style when prop disabled is passed', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InlineInputText.InlineInputTextBase, {
      placeholder: "type here..."
    }));
    expect(_react.screen.getByPlaceholderText('type here...').parentElement).toBeInTheDocument();
  });
  test('change value as user types', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InlineInputText.InlineInputTextBase, {
      placeholder: "type here..."
    }));
    expect(_react.screen.getByPlaceholderText('type here...')).toBeInTheDocument();

    _react.fireEvent.change(_react.screen.getByPlaceholderText('type here...').closest('input'), {
      target: {
        value: 'this is the new value'
      }
    });

    expect(_react.screen.getByText('this is the new value')).toBeInTheDocument();
  });
  test('onChange behaves as expected', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(ControlledInlineInputText, null));
    expect(_react.screen.getByText('Type here...')).toBeInTheDocument();

    _react.fireEvent.click(_react.screen.getByText('Click Me'));

    expect(_react.screen.queryByText('Type here...')).not.toBeInTheDocument();
    expect(_react.screen.getByText('You clicked the button')).toBeInTheDocument();
  });
});
//# sourceMappingURL=InlineInputText.spec.js.map