import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["value"];

import React, { useState } from 'react';
import { InputTimeSelect } from '../';
import { Space, Paragraph } from '../../../../';
export default function Controlled(props) {
  const {
      value: valueProp = '14:00'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [value, setValue] = useState(valueProp);
  return React.createElement(Space, null, React.createElement(InputTimeSelect, _extends({
    value: value,
    onChange: setValue
  }, restProps)), React.createElement(Paragraph, {
    color: "text2"
  }, value));
}
//# sourceMappingURL=Controlled.js.map