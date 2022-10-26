"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireWildcard(require("react"));

var _ButtonItem = require("./ButtonItem");

var _ButtonToggle = require("./ButtonToggle");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('ButtonToggle', function () {
  test('controlled', function () {
    function TestComponent() {
      var _useState = (0, _react2.useState)('Bananas'),
          _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
          value = _useState2[0],
          setValue = _useState2[1];

      return _react2["default"].createElement(_ButtonToggle.ButtonToggle, {
        value: value,
        onChange: setValue
      }, _react2["default"].createElement(_ButtonItem.ButtonItem, null, "Apples"), _react2["default"].createElement(_ButtonItem.ButtonItem, null, "Oranges"), _react2["default"].createElement(_ButtonItem.ButtonItem, null, "Bananas"));
    }

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(TestComponent, null));

    var apples = _react.screen.getByText('Apples');

    var bananas = _react.screen.getByText('Bananas');

    var oranges = _react.screen.getByText('Oranges');

    expect(apples).toHaveAttribute('aria-pressed', 'false');
    expect(bananas).toHaveAttribute('aria-pressed', 'true');
    expect(oranges).toHaveAttribute('aria-pressed', 'false');

    _react.fireEvent.click(apples);

    expect(apples).toHaveAttribute('aria-pressed', 'true');
    expect(bananas).toHaveAttribute('aria-pressed', 'false');
    expect(oranges).toHaveAttribute('aria-pressed', 'false');

    _react.fireEvent.click(bananas);

    expect(apples).toHaveAttribute('aria-pressed', 'false');
    expect(bananas).toHaveAttribute('aria-pressed', 'true');
    expect(oranges).toHaveAttribute('aria-pressed', 'false');

    _react.fireEvent.click(oranges);

    expect(apples).toHaveAttribute('aria-pressed', 'false');
    expect(bananas).toHaveAttribute('aria-pressed', 'false');
    expect(oranges).toHaveAttribute('aria-pressed', 'true');
  });
  test('options', function () {
    var options = [{
      label: 'Smoked Gouda',
      value: 'Gouda'
    }, {
      value: 'Cheddar'
    }, {
      disabled: true,
      value: 'Swiss'
    }];
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_ButtonToggle.ButtonToggle, {
      options: options,
      value: "Cheddar",
      onChange: onChangeMock
    }));

    var goudaButton = _react.screen.getByText('Smoked Gouda');

    var cheddarButton = _react.screen.getByText('Cheddar');

    var swissButton = _react.screen.getByText('Swiss');

    expect(goudaButton).toHaveAttribute('aria-pressed', 'false');
    expect(cheddarButton).toHaveAttribute('aria-pressed', 'true');
    expect(swissButton).toHaveAttribute('aria-pressed', 'false');
    expect(swissButton).toBeDisabled();

    _react.fireEvent.click(goudaButton);

    expect(onChangeMock).toBeCalledWith('Gouda');
    onChangeMock.mockClear();

    _react.fireEvent.click(cheddarButton);

    expect(onChangeMock).not.toHaveBeenCalled();
    onChangeMock.mockClear();

    _react.fireEvent.click(swissButton);

    expect(onChangeMock).not.toHaveBeenCalled();
  });
  test('disabled', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_ButtonToggle.ButtonToggle, {
      disabled: true,
      onChange: onChangeMock
    }, _react2["default"].createElement(_ButtonItem.ButtonItem, null, "Apples")));

    var applesButton = _react.screen.getByText('Apples');

    _react.fireEvent.click(applesButton);

    expect(onChangeMock).not.toHaveBeenCalled();
  });
  test('nullable', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_ButtonToggle.ButtonToggle, {
      nullable: true,
      onChange: onChangeMock,
      value: "Oranges"
    }, _react2["default"].createElement(_ButtonItem.ButtonItem, null, "Apples"), _react2["default"].createElement(_ButtonItem.ButtonItem, null, "Oranges"), _react2["default"].createElement(_ButtonItem.ButtonItem, null, "Bananas")));

    var orangesButton = _react.screen.getByText('Oranges');

    expect(orangesButton).toHaveAttribute('aria-pressed', 'true');

    _react.fireEvent.click(orangesButton);

    expect(onChangeMock).toHaveBeenCalledWith('');
  });
});
//# sourceMappingURL=ButtonToggle.spec.js.map