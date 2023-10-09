const _excluded = ["width", "value", "onChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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