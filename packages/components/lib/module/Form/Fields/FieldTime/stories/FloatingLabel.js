import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["description", "detail", "label"];

import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import React from 'react';
import { FieldTime } from '../';
export default function FloatingLabel(props) {
  const {
      description = 'this is the description',
      detail = 'detail',
      label = 'Label'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, React.createElement(FieldTime, _extends({
    detail: detail,
    description: description,
    label: label
  }, restProps)));
}
//# sourceMappingURL=FloatingLabel.js.map