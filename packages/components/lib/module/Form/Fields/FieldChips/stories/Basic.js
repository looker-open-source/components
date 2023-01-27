import _extends from "@babel/runtime/helpers/extends";

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