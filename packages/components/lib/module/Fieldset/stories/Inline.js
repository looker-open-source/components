
import React from 'react';
import { Fieldset } from '../';
import { FieldText } from '../../Form';
export default function Inline() {
  return React.createElement(Fieldset, {
    inline: true,
    legend: "This is the Legend"
  }, React.createElement(FieldText, {
    label: "First Label"
  }), React.createElement(FieldText, {
    label: "Second Label"
  }), React.createElement(FieldText, {
    label: "Third Label",
    validationMessage: {
      message: 'This is an error',
      type: 'error'
    }
  }));
}
//# sourceMappingURL=Inline.js.map