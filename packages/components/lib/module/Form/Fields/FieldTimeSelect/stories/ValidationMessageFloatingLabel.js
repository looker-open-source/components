import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["description", "detail", "interval", "label", "required", "validationMessage"];

import React from 'react';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { FieldTimeSelect } from '..';
export default function ValidationMessageFloatingLabel(props) {
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
  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, React.createElement(FieldTimeSelect, _extends({
    description: description,
    detail: detail,
    interval: interval,
    label: label,
    required: required,
    validationMessage: validationMessage
  }, restProps)));
}
//# sourceMappingURL=ValidationMessageFloatingLabel.js.map