function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import { FieldChips } from '../../FieldChips';
export default function Basic(props) {
  const [values, setValues] = useState(['apples']);
  return React.createElement(FieldChips, _extends({}, props, {
    values: values,
    onChange: setValues
  }));
}
//# sourceMappingURL=Basic.js.map