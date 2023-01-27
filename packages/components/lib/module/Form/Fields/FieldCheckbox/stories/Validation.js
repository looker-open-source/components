

import React from 'react';
import { FieldCheckbox } from '../../FieldCheckbox';
export default function Validation() {
  return React.createElement(FieldCheckbox, {
    id: "id",
    label: "Validation error",
    name: "thumbsUp",
    validationMessage: {
      message: 'This is an error',
      type: 'error'
    }
  });
}
//# sourceMappingURL=Validation.js.map