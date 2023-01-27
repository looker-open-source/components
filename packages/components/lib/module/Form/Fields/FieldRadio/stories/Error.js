

import React from 'react';
import { FieldRadio } from '../';
export default function Error() {
  return React.createElement(FieldRadio, {
    id: "fieldRadioId",
    label: "Field Radio Example",
    name: "thumbsUp",
    validationMessage: {
      message: 'This is an error',
      type: 'error'
    }
  });
}
//# sourceMappingURL=Error.js.map