

import React, { useState } from 'react';
import { Paragraph } from '../../../../';
import { InputChips } from '..';
export default function Validation() {
  const emailValidator = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [values, setValues] = useState([]);
  const [invalidValue, setInvalidValue] = useState();
  const [duplicateValue, setDuplicateValue] = useState();
  function handleChange(newValues) {
    setValues(newValues);
    setInvalidValue(undefined);
    setDuplicateValue(undefined);
  }
  function validate(valueToValidate) {
    return emailValidator.test(valueToValidate);
  }
  function handleInvalid(draftValue) {
    setInvalidValue(draftValue);
  }
  function handleDuplicate(duplicateValue) {
    setDuplicateValue(duplicateValue);
  }
  return React.createElement(React.Fragment, null, React.createElement(InputChips, {
    placeholder: "Enter email addresses",
    values: values,
    validate: validate,
    onChange: handleChange,
    onValidationFail: handleInvalid,
    onDuplicate: handleDuplicate,
    mb: "u3"
  }), invalidValue && React.createElement(Paragraph, null, "You entered an invalid email: ", invalidValue), duplicateValue && React.createElement(Paragraph, null, duplicateValue, " has already been entered"));
}
//# sourceMappingURL=Validation.js.map