"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _map = _interopRequireDefault(require("lodash/map"));

var _CheckboxRadio = require("../../../fixtures/CheckboxRadio");

var _FieldCheckboxGroup = require("./FieldCheckboxGroup");

var fieldCheckboxProps = {
  defaultValue: ['swiss', 'cheddar'],
  id: '1',
  name: 'group1',
  options: _CheckboxRadio.fieldOptions
};
test('FieldCheckboxGroup render a list of checkbox', function () {
  var extractCheckboxFromDomList = function extractCheckboxFromDomList(list) {
    var options = list.getElementsByTagName('label');
    return (0, _map["default"])(options, function (el) {
      return el.textContent;
    });
  };

  var renderListContent = function renderListContent() {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldCheckboxGroup.FieldCheckboxGroup, fieldCheckboxProps));
    return _react2.screen.getByTestId('checkbox-list');
  };

  var view = renderListContent();
  expect(extractCheckboxFromDomList(view)).toEqual(['Cheddar', 'Gouda', 'Swiss', 'Roquefort']);
});
test('FieldCheckboxGroup checkbox onChange is working as expected', function () {
  var handleChange = jest.fn();
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldCheckboxGroup.FieldCheckboxGroup, (0, _extends2["default"])({}, fieldCheckboxProps, {
    defaultValue: [],
    onChange: handleChange
  })));

  var Cheddar = _react2.screen.getByLabelText('Cheddar');

  var Gouda = _react2.screen.getByLabelText('Gouda');

  _react2.fireEvent.click(Cheddar);

  expect(handleChange).toHaveBeenCalledWith(['cheddar']);

  _react2.fireEvent.click(Gouda);

  expect(handleChange).toHaveBeenCalledWith(['cheddar', 'gouda']);
});
//# sourceMappingURL=FieldCheckboxGroup.spec.js.map