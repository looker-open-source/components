import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["width", "value", "onChange"];

import React, { useState } from 'react';
import { Button, Space } from '../../../../../';
import { Combobox, ComboboxOption, ComboboxList } from '../..';
import { ComboboxInput } from '../../ComboboxInput';
export default function Controlled(props) {
  const {
      width = 300,
      value: valueProp = {
        value: 'Bananas'
      },
      onChange: _onChange
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [option, setOption] = useState(valueProp);
  const handleChange = newOption => {
    setOption(newOption);
  };
  const handlePineappleClick = () => {
    setOption({
      value: 'Pineapples'
    });
  };
  return React.createElement(Space, null, React.createElement(Button, {
    onClick: handlePineappleClick
  }, "Select Pineapples"), React.createElement(Combobox, _extends({
    width: width,
    value: option,
    onChange: handleChange
  }, restProps), React.createElement(ComboboxInput, null), React.createElement(ComboboxList, null, React.createElement(ComboboxOption, {
    value: "Apples"
  }), React.createElement(ComboboxOption, {
    value: "Oranges"
  }), React.createElement(ComboboxOption, {
    value: "Grapes"
  }), React.createElement(ComboboxOption, {
    value: "Bananas"
  }), React.createElement(ComboboxOption, {
    value: "Pineapples"
  }), React.createElement(ComboboxOption, {
    value: "Apples2"
  }), React.createElement(ComboboxOption, {
    value: "Oranges2"
  }), React.createElement(ComboboxOption, {
    value: "Grapes2"
  }), React.createElement(ComboboxOption, {
    value: "Bananas2"
  }), React.createElement(ComboboxOption, {
    value: "Pineapples2"
  }), React.createElement(ComboboxOption, {
    value: "Apples3"
  }), React.createElement(ComboboxOption, {
    value: "Oranges3"
  }), React.createElement(ComboboxOption, {
    value: "Grapes3"
  }), React.createElement(ComboboxOption, {
    value: "Bananas3"
  }), React.createElement(ComboboxOption, {
    value: "Pineapples3"
  }), React.createElement(ComboboxOption, {
    value: "Apples4"
  }), React.createElement(ComboboxOption, {
    value: "Oranges4"
  }), React.createElement(ComboboxOption, {
    value: "Grapes4"
  }), React.createElement(ComboboxOption, {
    value: "Bananas4"
  }), React.createElement(ComboboxOption, {
    value: "Pineapples4"
  }))));
}
//# sourceMappingURL=Controlled.js.map