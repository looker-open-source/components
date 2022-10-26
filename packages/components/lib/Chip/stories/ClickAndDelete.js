import React from 'react';
import { Chip, Space } from '../..';
export default function ClickAndDelete() {
  const handleClick = () => alert('Clicked!');

  const handleDelete = () => alert('Deleted!');

  return React.createElement(Space, null, React.createElement(Chip, {
    onClick: handleClick
  }, "Click Me"), React.createElement(Chip, {
    disabled: true,
    onClick: handleClick
  }, "Click Me (nothing happens)"), React.createElement(Chip, {
    onClick: handleClick,
    onDelete: handleDelete
  }, "Delete Me"), React.createElement(Chip, {
    disabled: true,
    onClick: handleClick,
    onDelete: handleDelete
  }, "Delete Me (nothing happens)"));
}
//# sourceMappingURL=ClickAndDelete.js.map