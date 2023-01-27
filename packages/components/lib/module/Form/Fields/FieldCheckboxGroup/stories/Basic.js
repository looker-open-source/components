import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["options"];
import React from 'react';
import { FieldCheckboxGroup } from '../../FieldCheckboxGroup';
export default function Basic(props) {
  const {
      options = [{
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
      }]
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldCheckboxGroup, _extends({
    autoFocus: true,
    defaultValue: ['cheddar'],
    description: "Pick all your cheeses",
    label: "Cheeses",
    options: options
  }, rest));
}
//# sourceMappingURL=Basic.js.map