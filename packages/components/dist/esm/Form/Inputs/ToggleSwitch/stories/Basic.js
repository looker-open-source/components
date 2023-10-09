function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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