import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["defaultValue", "interval", "label"];

import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import React from 'react';
import { FieldTimeSelect } from '../';
export default function FloatingLabel(props) {
  const {
      defaultValue = '14:30',
      interval = 10,
      label = 'Select Time'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, React.createElement(FieldTimeSelect, _extends({
    interval: interval,
    defaultValue: defaultValue,
    label: label
  }, restProps)));
}
//# sourceMappingURL=FloatingLabel.js.map