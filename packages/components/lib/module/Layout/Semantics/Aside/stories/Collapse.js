import _extends from "@babel/runtime/helpers/extends";
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