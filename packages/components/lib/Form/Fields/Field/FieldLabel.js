import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["ariaLabelOnly", "hideLabel", "id", "label", "required"];

let _ = t => t,
    _t;

import React, { useContext } from 'react';
import styled from 'styled-components';
import { FieldsetContext } from '../../Fieldset';
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