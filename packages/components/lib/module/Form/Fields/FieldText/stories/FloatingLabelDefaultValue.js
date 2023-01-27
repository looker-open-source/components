import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "description", "detail", "defaultValue"];

import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import React from 'react';
import { FieldText } from '../..';
export default function FloatingLabelDefaultValue(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      description = 'Some important information about this field',
      detail = '0/50',
      defaultValue = 'My Name'
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
    defaultValue: defaultValue
  }, restProps)));
}
//# sourceMappingURL=FloatingLabelDefaultValue.js.map