

import React, { useState } from 'react';
import { SelectMulti } from '..';
import { SpaceVertical } from '../../../../../Layout';
import { Paragraph } from '../../../../../';
export default function CloseOnSelect() {
  function validate(value) {
    return value.charAt(0).toUpperCase() === value.charAt(0);
  }
  const [message, setMessage] = useState('');
  function handleValidationFail(values) {
    setMessage(`Please capitalize: ${values.join(', ')}`);
  }
  function resetMessage() {
    setMessage('');
  }
  return React.createElement(SpaceVertical, {
    align: "stretch"
  }, React.createElement(SelectMulti, {
    options: [{
      value: 'Cheddar'
    }, {
      value: 'Gouda'
    }, {
      value: 'Swiss'
    }, {
      value: 'Feta'
    }, {
      value: 'Mascarpone'
    }, {
      value: 'Brie'
    }, {
      value: 'Mozzarella'
    }, {
      value: 'Cotija'
    }, {
      value: 'Pepperjack'
    }],
    isFilterable: true,
    onFilter: resetMessage,
    placeholder: "Type values or select from the list",
    freeInput: true,
    validate: validate,
    onValidationFail: handleValidationFail
  }), React.createElement(Paragraph, null, message));
}
//# sourceMappingURL=FreeInput.js.map