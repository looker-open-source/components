import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["disabled", "placeholder", "value"];

import React from 'react';
import { InputSearch } from '../';
import { SpaceVertical } from '../../../../';
export default function Disable(props) {
  const {
      disabled = true,
      placeholder = 'Type your search',
      value = 'Value Disabled'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(SpaceVertical, {
    align: "start"
  }, React.createElement(InputSearch, {
    disabled: disabled
  }), React.createElement(InputSearch, {
    disabled: disabled,
    value: value
  }), React.createElement(InputSearch, _extends({
    disabled: disabled,
    placeholder: placeholder
  }, restProps)));
}
//# sourceMappingURL=Disable.js.map