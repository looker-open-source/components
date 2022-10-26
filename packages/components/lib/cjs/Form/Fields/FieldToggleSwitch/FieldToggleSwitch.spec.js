"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _testingReact = require("@storybook/testing-react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _FieldToggleSwitch = require("./FieldToggleSwitch");

var stories = _interopRequireWildcard(require("./FieldToggleSwitch.stories"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _composeStories = (0, _testingReact.composeStories)(stories),
    Tabstops = _composeStories.Tabstops;

describe('FieldToggleSwitch', function () {
  test('error has proper aria setup', function () {
    var errorMessage = 'This is an error';

    var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldToggleSwitch.FieldToggleSwitch, {
      id: "test",
      defaultValue: "example",
      validationMessage: {
        message: errorMessage,
        type: 'error'
      }
    })),
        container = _renderWithTheme.container;

    var input = _react2.screen.getByDisplayValue('example');

    var id = input.getAttribute('aria-describedby');
    expect(id).toBeDefined();
    expect(id).toEqual('describedby-test');
    expect(container).toHaveTextContent(errorMessage);
  });
  test('disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldToggleSwitch.FieldToggleSwitch, {
      disabled: true,
      id: "FieldToggleSwitchID",
      label: "Toggle Switch"
    }));
    expect(_react2.screen.getByLabelText('Toggle Switch')).toBeDisabled();
  });
  test('required', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldToggleSwitch.FieldToggleSwitch, {
      id: "FieldToggleSwitchID",
      label: "Toggle Switch",
      required: true
    }));
    expect(_react2.screen.getByTestId('requiredStar')).toBeVisible();
  });
  test('tabStops', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Tabstops, null));

    var input = _react2.screen.getByRole('switch');

    var detail = _react2.screen.getByRole('button');

    var link = _react2.screen.getByText('Link');

    _userEvent["default"].tab();

    expect(input).toHaveFocus();

    _userEvent["default"].tab();

    expect(detail).toHaveFocus();

    _userEvent["default"].tab();

    expect(link).toHaveFocus();
  });
});
//# sourceMappingURL=FieldToggleSwitch.spec.js.map