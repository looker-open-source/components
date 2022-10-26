import { Box2 } from '@looker/components';
import React from 'react';
import { AddRemoveButtons } from '../AddRemoveButtons';
import { OperatorLabel } from '../OperatorLabel';
export const ItemLayout = ({
  children,
  item,
  onAdd,
  onRemove,
  showOperator,
  showAdd,
  showRemove
}) => {
  const handleAdd = () => onAdd(item);

  const handleRemove = () => onRemove(item.id);

  return React.createElement(Box2, {
    role: "group",
    display: "flex",
    alignItems: "center"
  }, showOperator && React.createElement(Box2, {
    width: 44,
    mr: "medium",
    textAlign: "right"
  }, showOperator === true && React.createElement(OperatorLabel, {
    value: item.is
  })), children, React.createElement(AddRemoveButtons, {
    showAdd: showAdd,
    showRemove: showRemove,
    onAdd: handleAdd,
    onRemove: handleRemove
  }));
};
//# sourceMappingURL=ItemLayout.js.map