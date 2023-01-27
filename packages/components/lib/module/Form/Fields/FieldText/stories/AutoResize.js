import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["autoResize", "name", "label", "placeholder", "inline"];

import React from 'react';
import { Space } from '../../../../';
import { FieldText } from '../..';
export default function AutoResize(props) {
  const {
      autoResize = true,
      name = 'firstName',
      label = 'First Name',
      placeholder = 'Start typing and watch me scale to fit content',
      inline: _inline
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(Space, null, React.createElement(FieldText, _extends({
    autoResize: autoResize,
    name: name,
    label: label,
    placeholder: placeholder
  }, restProps)), React.createElement(FieldText, _extends({
    autoResize: autoResize,
    name: name,
    label: label,
    placeholder: placeholder,
    inline: true
  }, restProps)));
}
//# sourceMappingURL=AutoResize.js.map