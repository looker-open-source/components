

import React, { useState } from 'react';
import { FieldText, Form } from '../..';
export default function Validation() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const validate = (value1, value2) => {
    const errors = {};
    if (value1.length >= 5) {
      errors.val1 = {
        message: 'Error! String greater than 5 characters.',
        type: 'error'
      };
    }
    if (value2.length <= 5) {
      errors.val2 = {
        message: 'Error! String less than 5 characters.',
        type: 'error'
      };
    }
    setValidationErrors(errors);
  };
  const onChangeVal1 = event => {
    setVal1(event.currentTarget.value);
    validate(event.currentTarget.value, val2);
  };
  const onChangeVal2 = event => {
    setVal2(event.currentTarget.value);
    validate(val1, event.currentTarget.value);
  };
  return React.createElement(Form, {
    validationMessages: validationErrors
  }, React.createElement(FieldText, {
    name: "val1",
    value: val1,
    label: "A Field requiring less than 5 characters",
    onChange: onChangeVal1
  }), React.createElement(FieldText, {
    name: "val2",
    value: val2,
    label: "A Field requiring more than 5 characters",
    onChange: onChangeVal2
  }));
}
//# sourceMappingURL=Validation.js.map