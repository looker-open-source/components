"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = require("@testing-library/react");

var _react2 = _interopRequireWildcard(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _designTokens = require("@looker/design-tokens");

var _Button = require("../../Button");

var _Prompt = require("./Prompt");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var onSaveCallback = jest.fn();
var requiredProps = {
  inputLabel: 'Foo',
  onSave: function onSave(_, close) {
    close();
    onSaveCallback();
  },
  title: 'Bar'
};
var optionalProps = {
  cancelColor: 'critical',
  cancelLabel: 'Cancel Cheese',
  defaultValue: 'Default Value Cheese',
  onCancel: jest.fn(),
  saveLabel: 'Save Cheese',
  secondary: _react2["default"].createElement("div", null, "Secondary Cheese")
};
afterEach(function () {
  onSaveCallback.mockClear();
});
test('<Prompt/> with defaults', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
  var opener, saveButton, input;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Prompt.Prompt, requiredProps, function (open) {
            return _react2["default"].createElement(_Button.Button, {
              onClick: open
            }, "Open Prompt");
          }));
          opener = _react.screen.getByText('Open Prompt');

          _react.fireEvent.click(opener);

          saveButton = _react.screen.getByText('Save');
          input = _react.screen.getByPlaceholderText(requiredProps.inputLabel);
          expect(input).toBeVisible();
          expect(_react.screen.getByText(requiredProps.title)).toBeVisible();
          expect(saveButton).toHaveStyleRule("background: ".concat(_designTokens.theme.colors.key));

          _react.fireEvent.click(saveButton);

          expect(onSaveCallback).toHaveBeenCalledTimes(0);

          _react.fireEvent.change(input, {
            target: {
              value: 'Has Text In It'
            }
          });

          _react.fireEvent.click(saveButton);

          expect(onSaveCallback).toHaveBeenCalledTimes(1);
          _context.next = 15;
          return (0, _react.waitForElementToBeRemoved)(function () {
            return _react.screen.queryByText(requiredProps.inputLabel);
          });

        case 15:
          expect(_react.screen.queryByText(requiredProps.inputLabel)).not.toBeInTheDocument();
          expect(_react.screen.queryByText(requiredProps.title)).not.toBeInTheDocument();

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
test('<Prompt/> with custom props', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Prompt.Prompt, (0, _extends2["default"])({}, optionalProps, requiredProps), function (open) {
    return _react2["default"].createElement(_Button.Button, {
      onClick: open
    }, "Open Prompt");
  }));

  var opener = _react.screen.getByText('Open Prompt');

  _react.fireEvent.click(opener);

  var saveButton = _react.screen.getByText(optionalProps.saveLabel);

  var cancelButton = _react.screen.getByText(optionalProps.cancelLabel);

  expect(cancelButton).toBeInTheDocument();
  expect(cancelButton).toHaveStyleRule("color: ".concat(_designTokens.theme.colors.critical));
  expect(saveButton).toBeInTheDocument();
  expect(saveButton).toHaveStyleRule("background: ".concat(_designTokens.theme.colors.key));
  expect(_react.screen.getByDisplayValue(optionalProps.defaultValue)).toBeInTheDocument();
  expect(_react.screen.getByText('Secondary Cheese')).toBeInTheDocument();

  _react.fireEvent.click(_react.screen.getByText('Cancel Cheese'));

  expect(optionalProps.onCancel).toHaveBeenCalledTimes(1);
  expect(onSaveCallback).toHaveBeenCalledTimes(0);
});
test('<Prompt /> does not clear value after closing', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Prompt.Prompt, requiredProps, function (open) {
    return _react2["default"].createElement(_Button.Button, {
      onClick: open
    }, "Open Prompt");
  }));

  var opener = _react.screen.getByText('Open Prompt');

  _react.fireEvent.click(opener);

  var cancelButton = _react.screen.getByText('Cancel');

  var input = _react.screen.getByPlaceholderText(requiredProps.inputLabel);

  _react.fireEvent.change(input, {
    target: {
      value: 'Hello World'
    }
  });

  expect(input).toHaveValue('Hello World');

  _react.fireEvent.click(cancelButton);

  _react.fireEvent.click(opener);

  input = _react.screen.getByPlaceholderText(requiredProps.inputLabel);
  expect(input).toHaveValue('Hello World');
});
test('<Prompt /> clears value after closing with clearOnCancel', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Prompt.Prompt, (0, _extends2["default"])({
    clearOnCancel: true
  }, requiredProps), function (open) {
    return _react2["default"].createElement(_Button.Button, {
      onClick: open
    }, "Open Prompt");
  }));

  var opener = _react.screen.getByText('Open Prompt');

  _react.fireEvent.click(opener);

  var cancelButton = _react.screen.getByText('Cancel');

  var input = _react.screen.getByPlaceholderText(requiredProps.inputLabel);

  _react.fireEvent.change(input, {
    target: {
      value: 'Hello World'
    }
  });

  expect(input).toHaveValue('Hello World');

  _react.fireEvent.click(cancelButton);

  _react.fireEvent.click(opener);

  input = _react.screen.getByPlaceholderText(requiredProps.inputLabel);
  expect(input).toHaveValue('');
});
test('<Prompt /> updates when defaultValue changes', function () {
  var PromptTest = function PromptTest() {
    var _useState = (0, _react2.useState)('Gouda'),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        defaultValue = _useState2[0],
        setDefaultValue = _useState2[1];

    return _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_Prompt.Prompt, (0, _extends2["default"])({}, requiredProps, {
      defaultValue: defaultValue
    }), function (open) {
      return _react2["default"].createElement(_Button.Button, {
        onClick: open
      }, "Open Prompt");
    }), _react2["default"].createElement(_Button.Button, {
      onClick: function onClick() {
        return setDefaultValue('Swiss');
      }
    }, "Set Default Value to Swiss"));
  };

  (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(PromptTest, null));

  _react.fireEvent.click(_react.screen.getByText('Open Prompt'));

  _react.screen.getByDisplayValue('Gouda');

  _react.fireEvent.click(_react.screen.getByText('Cancel'));

  _react.fireEvent.click(_react.screen.getByText('Set Default Value to Swiss'));

  _react.fireEvent.click(_react.screen.getByText('Open Prompt'));

  _react.screen.getByDisplayValue('Swiss');
});
//# sourceMappingURL=Prompt.spec.js.map