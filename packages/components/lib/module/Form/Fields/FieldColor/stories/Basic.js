import _extends from "@babel/runtime/helpers/extends";

import React, { useState } from 'react';
import { FieldColor } from '../../FieldColor';
export default function Basic(props) {
  const [value, setValue] = useState('purple');
  const handleChange = e => setValue(e.currentTarget.value);
  return React.createElement(FieldColor, _extends({}, props, {
    label: "Basic",
    value: value,
    onChange: handleChange
  }));
}
//# sourceMappingURL=Basic.js.map