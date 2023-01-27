import _extends from "@babel/runtime/helpers/extends";

import React from 'react';
import { Button, FieldText, Form } from '../..';
export default function Basic(props) {
  return React.createElement(Form, _extends({
    validationMessages: {
      alpha: {
        message: 'This is an error',
        type: 'error'
      },
      bravo: {
        message: 'This is another error',
        type: 'error'
      }
    }
  }, props), React.createElement(FieldText, {
    label: "Alpha",
    name: "alpha"
  }), React.createElement(FieldText, {
    label: "Bravo",
    name: "bravo"
  }), React.createElement(FieldText, {
    label: "Charlie",
    name: "charlie"
  }), React.createElement(Button, null, "Submit"));
}
//# sourceMappingURL=Basic.js.map