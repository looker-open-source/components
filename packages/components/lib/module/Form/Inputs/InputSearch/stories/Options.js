

import React from 'react';
import { InputSearch } from '../';
import { Space } from '../../../../';
export default function Options() {
  const cheeses = [{
    description: 'Delicious cheese',
    detail: 'Netherlands ',
    value: 'Gouda'
  }, {
    value: 'Cheddar'
  }];
  const cheeses2 = [{
    value: 'Jack'
  }, {
    value: 'Swiss'
  }];
  const handleSelectOption = option => option && alert(`You picked ${option.value}`);
  return React.createElement(Space, null, React.createElement(InputSearch, {
    options: cheeses,
    onSelectOption: handleSelectOption,
    changeOnSelect: false,
    placeholder: "Options act like results"
  }), React.createElement(InputSearch, {
    options: cheeses2,
    placeholder: "Options act like suggestions"
  }));
}
//# sourceMappingURL=Options.js.map