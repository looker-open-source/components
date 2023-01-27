import _extends from "@babel/runtime/helpers/extends";

import React from 'react';
import { useToggle } from '../../../../utils/useToggle';
import { ToggleSwitch } from '../..';
export default function Basic(props) {
  const {
    value,
    toggle
  } = useToggle(false);
  return React.createElement(ToggleSwitch, _extends({
    onChange: toggle,
    on: value
  }, props));
}
//# sourceMappingURL=Basic.js.map