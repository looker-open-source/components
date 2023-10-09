function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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