
import React from 'react';
import { Fieldset } from '../';
import { FieldText } from '../../Form';
export default function Basic() {
  return React.createElement(Fieldset, {
    legend: "This is the Legend"
  }, React.createElement(FieldText, {
    label: "First Label"
  }), React.createElement(FieldText, {
    label: "Second Label"
  }), React.createElement(FieldText, {
    label: "Third Label"
  }));
}
//# sourceMappingURL=Basic.js.map