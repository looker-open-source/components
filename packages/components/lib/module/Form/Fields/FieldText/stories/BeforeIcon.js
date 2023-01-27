import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "iconBefore"];

import * as MaterialIcons from '@styled-icons/material';
import React from 'react';
import { FieldText } from '../..';
export default function BeforeIcon(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      iconBefore = React.createElement(MaterialIcons.Settings, null)
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldText, _extends({
    name: name,
    label: label,
    iconBefore: iconBefore
  }, restProps));
}
//# sourceMappingURL=BeforeIcon.js.map