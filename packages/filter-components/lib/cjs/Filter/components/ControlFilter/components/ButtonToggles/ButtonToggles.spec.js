"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _ButtonToggles = require("./ButtonToggles");

var options = [{
  label: 'label1',
  value: 'value1'
}, {
  label: 'label2',
  value: 'value2'
}, {
  label: 'label3',
  value: 'value3'
}];
describe('ButtonToggles tests', function () {
  it('ButtonToggles with values pre-selected are selected', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_ButtonToggles.ButtonToggles, {
      value: 'value1',
      options: options,
      onChange: jest.fn()
    }));
    expect(_react.screen.getByText('label1')).toHaveAttribute('aria-pressed', 'true');
    expect(_react.screen.getByText('label2')).toHaveAttribute('aria-pressed', 'false');
    expect(_react.screen.getByText('label3')).toHaveAttribute('aria-pressed', 'false');
  });
  it('passes onChange newly selected value', function () {
    var mock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_ButtonToggles.ButtonToggles, {
      value: '',
      options: options,
      onChange: mock
    }));

    _react.fireEvent.click(_react.screen.getByText('label1'));

    expect(mock).toHaveBeenCalledWith('value1');
  });
  it('passes onChange new value when other value is clicked', function () {
    var mock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_ButtonToggles.ButtonToggles, {
      value: 'value1',
      options: options,
      onChange: mock
    }));

    _react.fireEvent.click(_react.screen.getByText('label2'));

    expect(mock).toHaveBeenCalledWith('value2');
  });
  it('handles loading state', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_ButtonToggles.ButtonToggles, {
      isLoading: true,
      value: 'value1',
      options: options,
      onChange: jest.fn()
    }));
    expect(_react.screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
//# sourceMappingURL=ButtonToggles.spec.js.map