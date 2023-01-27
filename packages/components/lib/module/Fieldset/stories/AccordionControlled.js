
import React from 'react';
import { Fieldset } from '../';
import { FieldCheckbox } from '../../';
export default function AccordionControlled() {
  return React.createElement(Fieldset, {
    legend: "This is the Legend",
    accordion: true,
    defaultOpen: true,
    onOpen: () => alert('Opening the pod bay doors'),
    onClose: () => alert('Closing the pod bay doors')
  }, React.createElement(FieldCheckbox, {
    name: "box1",
    label: "you can click here"
  }), React.createElement(FieldCheckbox, {
    name: "box2",
    label: "here too"
  }), React.createElement(FieldCheckbox, {
    name: "box3",
    label: "also here"
  }));
}
//# sourceMappingURL=AccordionControlled.js.map