

import React from 'react';
import { MessageBar, ButtonOutline } from '../..';
import { useToggle } from '../../utils';
export default function Controlled() {
  const {
    value,
    setOff,
    setOn
  } = useToggle(true);
  return React.createElement(React.Fragment, null, React.createElement(MessageBar, {
    intent: "warn",
    onPrimaryClick: setOff,
    visible: value
  }, "I can be closed and reopened"), !value && React.createElement(ButtonOutline, {
    m: "u4",
    onClick: setOn
  }, "Show MessageBar"));
}
//# sourceMappingURL=Controlled.js.map