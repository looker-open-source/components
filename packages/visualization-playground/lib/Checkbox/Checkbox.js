import React, { useState, useEffect } from 'react';
import { FieldCheckbox } from '@looker/components';
export const Checkbox = ({
  onChange,
  label,
  checked
}) => {
  const [isChecked, setIsChecked] = useState(Boolean(checked));
  useEffect(() => {
    if (checked !== isChecked) {
      onChange === null || onChange === void 0 ? void 0 : onChange(isChecked);
    }
  }, [isChecked, onChange, checked]);
  return React.createElement(FieldCheckbox, {
    label: label,
    checked: isChecked,
    onChange: () => {
      setIsChecked(!isChecked);
    }
  });
};
//# sourceMappingURL=Checkbox.js.map