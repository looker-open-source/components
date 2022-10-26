import React from 'react';
import { GroupInput } from '../../../GroupInput';
export const Year = ({
  item: {
    id,
    year
  },
  onChange
}) => {
  const valueChange = e => {
    onChange(id, {
      year: e.target.value
    });
  };

  return React.createElement(GroupInput, {
    onChange: valueChange,
    value: year,
    placement: "right"
  });
};
//# sourceMappingURL=Year.js.map