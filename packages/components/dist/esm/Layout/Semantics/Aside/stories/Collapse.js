function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { useToggle } from '../../../../utils';
import { Aside, FieldToggleSwitch, Space } from '../../../..';
export default function AsideCollapse(props) {
  const {
    value,
    toggle
  } = useToggle(false);
  return React.createElement(Space, null, React.createElement(Aside, _extends({
    collapse: !value
  }, props), "Aside content"), React.createElement(FieldToggleSwitch, {
    m: "small",
    label: "Show Aside",
    onChange: toggle,
    on: value
  }));
}
//# sourceMappingURL=Collapse.js.map