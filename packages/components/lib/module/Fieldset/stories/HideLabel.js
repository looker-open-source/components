
import React from 'react';
import { Fieldset } from '../';
import { FieldText } from '../../Form';
export default function Inline() {
  return React.createElement(React.Fragment, null, React.createElement(Fieldset, {
    fieldsHideLabel: true,
    legend: "Group 1"
  }, React.createElement(FieldText, {
    label: "First Label"
  }), React.createElement(FieldText, {
    label: "Second Label"
  }), "Override the `fieldsHideLabel` prop in the parent:", React.createElement(FieldText, {
    label: "Third Label",
    hideLabel: false
  })), React.createElement(Fieldset, {
    legend: "Group 2"
  }, React.createElement(FieldText, {
    label: "First Label",
    hideLabel: true
  }), React.createElement(FieldText, {
    label: "Second Label"
  }), React.createElement(FieldText, {
    label: "Third Label"
  })));
}
//# sourceMappingURL=HideLabel.js.map