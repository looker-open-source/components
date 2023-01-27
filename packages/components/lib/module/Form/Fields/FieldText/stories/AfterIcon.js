import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "iconAfter"];

import * as MaterialIcons from '@styled-icons/material';
import React from 'react';
import { FieldText } from '../..';
export default function AfterIcon(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      iconAfter = React.createElement(MaterialIcons.Settings, null)
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldText, _extends({
    name: name,
    label: label,
    iconAfter: iconAfter
  }, restProps));
}
//# sourceMappingURL=AfterIcon.js.map