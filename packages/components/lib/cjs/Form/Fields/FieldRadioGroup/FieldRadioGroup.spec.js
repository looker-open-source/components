"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _map = _interopRequireDefault(require("lodash/map"));

var _CheckboxRadio = require("../../../fixtures/CheckboxRadio");

var _FieldRadioGroup = require("./FieldRadioGroup");

var fieldRadioProps = {
  defaultValue: 'cheddar',
  id: '1',
  name: 'group1',
  options: _CheckboxRadio.fieldOptions
};
test('FieldRadioGroup render a radio list', function () {
  var extractCheckboxFromDomList = function extractCheckboxFromDomList(list) {
    var options = list.getElementsByTagName('label');
    return (0, _map["default"])(options, function (el) {
      return el.textContent;
    });
  };

  var renderListContent = function renderListContent() {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldRadioGroup.FieldRadioGroup, (0, _extends2["default"])({}, fieldRadioProps, {
      required: true
    })));
    return _react2.screen.getByTestId('radio-list');
  };

  var view = renderListContent();
  expect(extractCheckboxFromDomList(view)).toEqual(['Cheddar', 'Gouda', 'Swiss', 'Roquefort']);
});
//# sourceMappingURL=FieldRadioGroup.spec.js.map