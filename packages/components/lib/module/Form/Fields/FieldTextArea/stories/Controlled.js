import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "value"];

import React, { useState } from 'react';
import { Button, Space, SpaceVertical } from '../../../../';
import { FieldTextArea } from '../';
export default function Basic(props) {
  const {
      name: _name,
      label: _label,
      value: valueProp = 'Initial Value'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [value, setValue] = useState(valueProp);
  const handleReset = () => setValue(valueProp);
  const handleClear = () => setValue('');
  const handleChange = e => {
    setValue(e.currentTarget.value);
  };
  return React.createElement(SpaceVertical, null, React.createElement(Space, null, React.createElement(Button, {
    onClick: handleReset
  }, "Reset"), React.createElement(Button, {
    onClick: handleClear
  }, "Clear")), React.createElement(FieldTextArea, _extends({
    width: "100%",
    label: "Controlled",
    value: value,
    onChange: handleChange
  }, restProps)));
}
//# sourceMappingURL=Controlled.js.map