const _excluded = ["description", "detail", "interval", "label", "required", "validationMessage"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { FieldTimeSelect } from '..';
export default function ValidationMessage(props) {
  const {
      description = 'this is the description is a very long one',
      detail = 'detail',
      interval = 10,
      label = 'Select Time',
      required = true,
      validationMessage = {
        message: 'validation Message',
        type: 'error'
      }
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldTimeSelect, _extends({
    description: description,
    detail: detail,
    interval: interval,
    label: label,
    required: required,
    validationMessage: validationMessage
  }, restProps));
}
//# sourceMappingURL=ValidationMessage.js.map