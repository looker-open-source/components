function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import { FieldColor } from '../../FieldColor';
export default function Basic(props) {
  const [value, setValue] = useState('purple');
  const handleChange = e => setValue(e.target.value);
  return React.createElement(FieldColor, _extends({}, props, {
    label: "Basic",
    value: value,
    onChange: handleChange
  }));
}
//# sourceMappingURL=Basic.js.map