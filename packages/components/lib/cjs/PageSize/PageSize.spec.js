"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _PageSize = require("./PageSize");

var onChange = jest.fn();
afterEach(function () {
  onChange.mockClear();
});
describe('PageSize', function () {
  test('defaults', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_PageSize.PageSize, {
      value: 10,
      total: 1000,
      onChange: onChange
    }));

    var select = _react2.screen.getByDisplayValue('10');

    expect(_react2.screen.getByText('of 1000')).toBeInTheDocument();

    _react2.fireEvent.click(select);

    expect(_react2.screen.getByText('10')).toBeInTheDocument();
    expect(_react2.screen.getByText('25')).toBeInTheDocument();
    expect(_react2.screen.getByText('50')).toBeInTheDocument();
    expect(_react2.screen.getByText('100')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('50'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test('custom options prop', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_PageSize.PageSize, {
      value: 20,
      total: 1000,
      options: [20, 40, 60],
      onChange: onChange
    }));

    var select = _react2.screen.getByDisplayValue('20');

    expect(_react2.screen.getByText('of 1000')).toBeInTheDocument();

    _react2.fireEvent.click(select);

    expect(_react2.screen.getByText('20')).toBeInTheDocument();
    expect(_react2.screen.getByText('40')).toBeInTheDocument();
    expect(_react2.screen.getByText('60')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('40'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });
  test('does not load when smallest option >= total', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_PageSize.PageSize, {
      value: 100,
      total: 5,
      options: [100, 200, 300],
      onChange: jest.fn()
    }));
    expect(_react2.screen.queryByText('Display')).not.toBeInTheDocument();
    expect(_react2.screen.queryByDisplayValue('100')).not.toBeInTheDocument();
    expect(_react2.screen.queryByText('of 5')).not.toBeInTheDocument();
  });
  test('alwaysVisible', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_PageSize.PageSize, {
      value: 100,
      total: 5,
      options: [100, 200, 300],
      onChange: jest.fn(),
      alwaysVisible: true
    }));

    var select = _react2.screen.getByDisplayValue('5');

    expect(select).toBeInTheDocument();
    expect(_react2.screen.getByText('of 5')).toBeInTheDocument();

    _react2.fireEvent.click(select);

    expect(_react2.screen.queryByText('100')).not.toBeInTheDocument();
    expect(_react2.screen.queryByText('200')).not.toBeInTheDocument();
    expect(_react2.screen.queryByText('300')).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=PageSize.spec.js.map