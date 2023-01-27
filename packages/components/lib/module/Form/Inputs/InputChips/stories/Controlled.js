

import React, { useState } from 'react';
import { InputChips } from '../';
import { usePreviousValue, Paragraph, Button } from '../../../../';
export default function Controlled() {
  const [values, setValues] = useState(['cheddar']);
  const previousInputValues = usePreviousValue(values);
  const [inputValue, setInputValue] = useState('');
  const [renderUndoButton, setRenderUndoButton] = useState(false);
  function handleChange(newValues) {
    setValues(newValues);
    setRenderUndoButton(true);
  }
  function handleInputChange(newValue) {
    setInputValue(newValue);
  }
  function handleClear() {
    setRenderUndoButton(true);
  }
  function handleUndo() {
    if (typeof previousInputValues !== 'undefined') {
      setValues(previousInputValues);
    }
    setRenderUndoButton(false);
  }
  return React.createElement(React.Fragment, null, React.createElement(InputChips, {
    placeholder: "Enter multiple values",
    summary: values.length === 0 ? `You've entered ${values.length} items` : undefined,
    values: values,
    inputValue: inputValue,
    onChange: handleChange,
    onInputChange: handleInputChange,
    onClear: handleClear,
    mb: "u3"
  }), renderUndoButton && React.createElement(React.Fragment, null, "You modified the values! ", React.createElement(Button, {
    onClick: handleUndo
  }, "Undo")), inputValue !== '' && React.createElement(Paragraph, null, "You are typing: ", React.createElement("strong", null, inputValue)));
}
//# sourceMappingURL=Controlled.js.map