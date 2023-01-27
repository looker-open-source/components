import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["value"];

import React, { useState } from 'react';
import { InputTime } from '..';
import { Code, Space, Paragraph } from '../../../..';
export default function Validation(props) {
  const {
      value: valueProp = 'Stardate 2004.14'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [value, setValue] = useState(valueProp);
  const [validationType, setValidationType] = useState();
  const handleValidationFail = () => {
    setValidationType('error');
  };
  return React.createElement(Space, null, React.createElement(InputTime, _extends({
    validationType: validationType,
    value: value,
    onValidationFail: handleValidationFail,
    onChange: setValue
  }, restProps)), validationType === 'error' && React.createElement(Paragraph, {
    color: "critical"
  }, "Error: ", React.createElement(Code, {
    fontSize: "small"
  }, value), " is not a valid 24-hour time string"));
}
//# sourceMappingURL=OnValidationFail.js.map