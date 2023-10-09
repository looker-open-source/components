import React from 'react';
import { Accordion, Fieldset, FieldText } from '../..';
export default function DefaultOpen() {
  return React.createElement(Accordion, {
    defaultOpen: true,
    content: React.createElement(Fieldset, null, React.createElement(Fieldset, {
      inline: true
    }, React.createElement(FieldText, {
      label: "First name"
    }), React.createElement(FieldText, {
      label: "Middle"
    }), React.createElement(FieldText, {
      label: "Last name"
    })), React.createElement(FieldText, {
      label: "Email"
    }), React.createElement(FieldText, {
      label: "Phone"
    }))
  }, "Advanced Options");
}
//# sourceMappingURL=DefaultOpen.js.map