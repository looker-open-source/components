import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "description", "detail", "defaultValue", "iconBefore", "validationMessage"];

import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { FieldText } from '../..';
export default function FloatingLabelDefaultValue(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      description = 'Some important information about this field',
      detail = '0/50',
      defaultValue = 'My Name',
      iconBefore = React.createElement(MaterialIcons.VerifiedUser, null),
      validationMessage = {
        message: 'Error Message',
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
  }, React.createElement(FieldText, _extends({
    detail: detail,
    description: description,
    name: name,
    label: label,
    defaultValue: defaultValue,
    iconBefore: iconBefore,
    validationMessage: validationMessage
  }, restProps)));
}
//# sourceMappingURL=FloatingLabelValidation.js.map