import React from 'react';
import { Chip, Space } from '../..';
export default function IconLabel() {
  const alertTrigger = () => alert('You click on the X');

  return React.createElement(Space, {
    gap: "u1"
  }, React.createElement(Chip, {
    iconLabel: "remove chip",
    onDelete: alertTrigger
  }, "hover the x"), React.createElement(Chip, {
    onDelete: alertTrigger
  }, "hover the x"));
}
//# sourceMappingURL=IconLabel.js.map