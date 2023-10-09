const _excluded = ["ariaLabelOnly", "hideLabel", "id", "label", "required"];
let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useContext } from 'react';
import styled from 'styled-components';
import { FieldsetContext } from '../../../Fieldset';
import { VisuallyHidden } from '../../../VisuallyHidden';
import { Label } from '../../Label';
import { RequiredStar } from './RequiredStar';
export const FieldLabel = styled(_ref => {
  let {
      ariaLabelOnly,
      hideLabel,
      id,
      label,
      required
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  if (!label) return null;
  const {
    fieldsHideLabel
  } = useContext(FieldsetContext);
  const shouldHideLabel = (fieldsHideLabel || hideLabel) && hideLabel !== false;
  const labelComponent = React.createElement(Label, _extends({
    htmlFor: ariaLabelOnly ? undefined : id,
    id: `labelledby-${id}`
  }, props), label, required && React.createElement(RequiredStar, null));
  return shouldHideLabel ? React.createElement(VisuallyHidden, null, labelComponent) : labelComponent;
}).withConfig({
  displayName: "FieldLabel",
  componentId: "sc-y1qssl-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldLabel.js.map