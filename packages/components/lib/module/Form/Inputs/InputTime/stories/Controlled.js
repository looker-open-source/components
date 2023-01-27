import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["value"];

import React, { useState } from 'react';
import { InputTime } from '..';
import { Button, Space, Paragraph } from '../../../..';
export default function Controlled(props) {
  const {
      value: valueProp = '14:34'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [value, setValue] = useState(valueProp);
  const handle1400Click = () => setValue('14:00');
  const handle1515Click = () => setValue('15:15');
  const handle1632Click = () => setValue('16:32');
  return React.createElement(Space, null, React.createElement(Button, {
    onClick: handle1400Click
  }, "2:00pm"), React.createElement(Button, {
    onClick: handle1515Click
  }, "3:15pm"), React.createElement(Button, {
    onClick: handle1632Click
  }, "4:32pm"), React.createElement(InputTime, _extends({
    value: value
  }, restProps)), React.createElement(Paragraph, null, "Selected: ", value));
}
//# sourceMappingURL=Controlled.js.map