
import React, { useState } from 'react';
import { Tabs2, Tab2, FieldText } from '../..';
export default function StateChanges() {
  const [value, setValue] = useState('');
  const handleChange = e => {
    setValue(e.currentTarget.value);
  };
  return React.createElement(Tabs2, null, React.createElement(Tab2, {
    label: "Tab 1"
  }, "Go to Tab 2 and try entering text in the field"), React.createElement(Tab2, {
    label: "Tab 2"
  }, React.createElement(FieldText, {
    value: value,
    onChange: handleChange
  })));
}
//# sourceMappingURL=StateChanges.js.map