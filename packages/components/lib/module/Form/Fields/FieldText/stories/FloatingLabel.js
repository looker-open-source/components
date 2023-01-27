import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "description", "detail"];

import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import React from 'react';
import { FieldText } from '../..';
export default function FloatingLabel(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      description = 'Some important information about this field',
      detail = '0/50'
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
    label: label
  }, restProps)));
}
//# sourceMappingURL=FloatingLabel.js.map