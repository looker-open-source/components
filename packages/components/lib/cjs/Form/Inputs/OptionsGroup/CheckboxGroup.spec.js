"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _map = _interopRequireDefault(require("lodash/map"));

var _CheckboxGroup = require("./CheckboxGroup");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var checkboxOptions = [{
  label: 'Cheddar',
  value: 'cheddar'
}, {
  label: 'Gouda',
  value: 'gouda'
}, {
  label: 'Swiss',
  value: 'swiss'
}, {
  label: 'Roquefort',
  value: 'roquefort'
}];
var checkboxProps = {
  defaultValue: ['swiss', 'cheddar'],
  id: '1',
  name: 'group1',
  options: checkboxOptions
};
test('FieldCheckboxGroup render a list of checkbox', function () {
  var extractCheckboxFromDomList = function extractCheckboxFromDomList(list) {
    var options = list.getElementsByTagName('label');
    return (0, _map["default"])(options, function (el) {
      return el.textContent;
    });
  };

  var renderListContent = function renderListContent() {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_CheckboxGroup.CheckboxGroup, checkboxProps));
    return _react2.screen.getByTestId('checkbox-list');
  };

  var view = renderListContent();
  expect(extractCheckboxFromDomList(view)).toEqual(['Cheddar', 'Gouda', 'Swiss', 'Roquefort']);
});
test('CheckboxGroup can be checked and unchecked when user clicks', function () {
  var handleChange = jest.fn();
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_CheckboxGroup.CheckboxGroup, (0, _extends2["default"])({}, checkboxProps, {
    defaultValue: [],
    onChange: handleChange
  })));

  var checkbox = _react2.screen.getByLabelText('Roquefort');

  _react2.fireEvent.click(checkbox);

  expect(handleChange).toHaveBeenCalledWith(['roquefort']);
  expect(checkbox).toBeChecked();

  _react2.fireEvent.click(checkbox);

  expect(handleChange).toHaveBeenCalledWith(['roquefort']);
  expect(checkbox).not.toBeChecked();
});
test('CheckboxGroup render a list of checkbox with defaultValue checked', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_CheckboxGroup.CheckboxGroup, (0, _extends2["default"])({}, checkboxProps, {
    defaultValue: ['cheddar']
  })));
  expect(_react2.screen.getByLabelText('Cheddar')).toBeChecked();
  expect(_react2.screen.getByLabelText('Gouda')).not.toBeChecked();
});
test('CheckboxGroup render a list of checkbox all unchecked after user clicked on defaultValue', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_CheckboxGroup.CheckboxGroup, checkboxProps));

  var Cheddar = _react2.screen.getByLabelText('Cheddar');

  _react2.fireEvent.click(Cheddar);

  expect(_react2.screen.getByLabelText('Cheddar')).not.toBeChecked();
});
test('CheckboxGroup disabled all checkbox', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_CheckboxGroup.CheckboxGroup, (0, _extends2["default"])({}, checkboxProps, {
    disabled: true
  })));
  expect(_react2.screen.getByLabelText('Cheddar')).toBeDisabled();
  expect(_react2.screen.getByLabelText('Gouda')).toBeDisabled();
  expect(_react2.screen.getByLabelText('Swiss')).toBeDisabled();
  expect(_react2.screen.getByLabelText('Roquefort')).toBeDisabled();
});
test('CheckboxGroup disabled one specific checkbox', function () {
  var options = checkboxOptions.map(function (option) {
    return _objectSpread({
      disabled: ['Roquefort'].includes(option.label)
    }, option);
  });
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_CheckboxGroup.CheckboxGroup, (0, _extends2["default"])({}, checkboxProps, {
    options: options
  })));
  expect(_react2.screen.getByLabelText('Cheddar')).toBeEnabled();
  expect(_react2.screen.getByLabelText('Roquefort')).toBeDisabled();
});
//# sourceMappingURL=CheckboxGroup.spec.js.map