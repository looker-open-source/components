
import React from 'react';
import { InputText } from '../InputText';
export default function ReadOnly() {
  return React.createElement(InputText, {
    value: "You can't change me.",
    readOnly: true
  });
}
//# sourceMappingURL=ReadOnly.js.map