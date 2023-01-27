
import React from 'react';
import { Fieldset } from '../';
import { FieldCheckbox } from '../../Form';
export default function Accordion() {
  return React.createElement(Fieldset, {
    legend: "This is the Legend",
    accordion: true
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
//# sourceMappingURL=Accordion.js.map