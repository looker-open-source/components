
import React from 'react';
import { Fieldset } from '../';
import { FieldText } from '../../Form';
export default function Inline() {
  return React.createElement(Fieldset, {
    legend: "This is the Legend"
  }, React.createElement(FieldText, {
    inline: true,
    label: "First Label"
  }), React.createElement(FieldText, {
    inline: true,
    label: "Second Label"
  }));
}
//# sourceMappingURL=InlineField.js.map