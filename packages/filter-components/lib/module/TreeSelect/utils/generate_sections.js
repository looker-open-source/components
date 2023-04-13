
import React from 'react';
import { Field } from '../Field';
import { Section } from '../Section';
export const generateSections = (trees, depth, onSectionClick, onFieldClick) => trees.map(tree =>
tree.children ? tree.hide ? null : React.createElement(Section, {
  key: tree.id
  ,
  id: tree.id,
  detail: tree.detail,
  isOpen: !!tree.isOpen,
  onClick: onSectionClick,
  title: tree.label
}, generateSections(tree.children, depth + 1, onSectionClick, onFieldClick)) : tree.hide ? null : React.createElement(Field, {
  key: tree.id,
  isSecondary: tree.isSecondary,
  detail: tree.detail,
  disabled: tree.disabled,
  displayLabel: tree.label,
  label: tree.value,
  payload: tree.payload,
  alignItems: "center",
  pl: "medium",
  onClick: onFieldClick
}));
//# sourceMappingURL=generate_sections.js.map