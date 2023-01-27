import _extends from "@babel/runtime/helpers/extends";

import React from 'react';
import { Field } from '../../Field';
import { InputText } from '../../../Inputs';
import { Space } from '../../../../Layout';
export default function Basic(props) {
  const id = 'coolField';
  return React.createElement(Field, _extends({
    id: id,
    label: "A combo field",
    description: "Please fill out both inputs",
    detail: "with 2 inputs",
    validationMessage: {
      message: 'An error message',
      type: 'error'
    },
    width: 300
  }, props), React.createElement(Space, {
    gap: "u3"
  }, React.createElement(InputText, {
    id: id,
    "aria-describedby": `${id}-describedby`,
    width: 100
  }), React.createElement(InputText, {
    id: id,
    "aria-describedby": `${id}-describedby`,
    validationType: 'error'
  })));
}
//# sourceMappingURL=Basic.js.map