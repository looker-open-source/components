import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["width", "values", "onChange"];

import React, { useState } from 'react';
import { ComboboxMultiInput } from '../../ComboboxMultiInput';
import { ComboboxMultiOption } from '../../ComboboxMultiOption';
import { ComboboxMultiList } from '../../ComboboxList';
import { ComboboxMulti } from '..';
export default function Controlled(props) {
  const {
      width = 300,
      values: valuesProp = [{
        value: 'Bananas'
      }],
      onChange: _onChange
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [options, setOptions] = useState(valuesProp);
  const handleMultiChange = newOptions => {
    setOptions(newOptions);
  };
  return React.createElement(ComboboxMulti, _extends({
    width: width,
    values: options,
    onChange: handleMultiChange
  }, restProps), React.createElement(ComboboxMultiInput, {
    onClear: () => alert('CLEAR'),
    freeInput: true
  }), React.createElement(ComboboxMultiList, null, React.createElement(ComboboxMultiOption, {
    value: "Apples"
  }), React.createElement(ComboboxMultiOption, {
    value: "Oranges"
  }), React.createElement(ComboboxMultiOption, {
    value: "Grapes"
  }), React.createElement(ComboboxMultiOption, {
    value: "Bananas"
  }), React.createElement(ComboboxMultiOption, {
    value: "Pineapples"
  })));
}
//# sourceMappingURL=Controlled.js.map