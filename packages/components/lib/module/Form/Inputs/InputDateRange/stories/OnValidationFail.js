

import React, { useState } from 'react';
import { Divider } from '../../../../Divider';
import { SpaceVertical } from '../../../../Layout';
import { Heading, Paragraph } from '../../../../Text';
import { InputDateRange } from '../InputDateRange';
export default function OnValidationFail() {
  const [value, setValue] = useState({});
  const [isValid, setIsValid] = useState(true);
  const handleChange = newValue => {
    setValue(newValue);
    setIsValid(true);
  };
  const handleValidationFail = () => setIsValid(false);
  const message = isValid ? 'Valid Input' : 'Invalid Input';
  const color = isValid ? undefined : 'critical';
  return React.createElement(SpaceVertical, null, React.createElement(Paragraph, {
    color: "text2"
  }, "INSTRUCTIONS: Try typing an invalid date string (ex: 'not/a/valid/date') and clicking or tabbing away to trigger blur event."), React.createElement(Heading, null, "Result:"), React.createElement(Paragraph, {
    color: color
  }, message), React.createElement(Divider, null), React.createElement(InputDateRange, {
    value: value,
    onChange: handleChange,
    onValidationFail: handleValidationFail
  }));
}
//# sourceMappingURL=OnValidationFail.js.map