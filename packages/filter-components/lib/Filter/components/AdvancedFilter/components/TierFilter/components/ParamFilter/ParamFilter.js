import React from 'react';
import { GroupSelect } from '../../../GroupSelect';
export const ParamFilter = ({
  item,
  onChange,
  enumerations,
  validationMessage
}) => {
  const handleChange = value => {
    onChange === null || onChange === void 0 ? void 0 : onChange(item.id, {
      value: [value]
    });
  };

  return React.createElement(GroupSelect, {
    placement: "right",
    value: item.value && item.value[0],
    onChange: handleChange,
    options: enumerations || [],
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type
  });
};
//# sourceMappingURL=ParamFilter.js.map