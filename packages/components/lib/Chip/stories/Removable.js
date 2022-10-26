import React, { useState } from 'react';
import { Chip, Space } from '../..';
export default function Removable() {
  const [values, setValues] = useState(['Cheddar', 'Gouda', 'Swiss']);

  function getDeleteHandler(item) {
    return () => {
      const newValues = values.filter(value => value !== item);
      setValues(newValues);
    };
  }

  return React.createElement(Space, null, values.map(item => React.createElement(Chip, {
    onDelete: getDeleteHandler(item),
    role: "option",
    key: item
  }, item)));
}
//# sourceMappingURL=Removable.js.map