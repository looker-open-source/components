
import React from 'react';
import { FieldCheckbox } from '../../FieldCheckbox';
export default function ReadOnly() {
  return React.createElement(FieldCheckbox, {
    id: "id",
    label: "read only",
    name: "thumbsUp",
    readOnly: true
  });
}
//# sourceMappingURL=ReadOnly.js.map