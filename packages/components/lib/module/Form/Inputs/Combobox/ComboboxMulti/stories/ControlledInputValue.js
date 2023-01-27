import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["width", "values", "onChange"];

import React, { useState } from 'react';
import { Paragraph, Button, SpaceVertical } from '../../../../../';
import { ComboboxMultiInput } from '../../ComboboxMultiInput';
import { ComboboxMultiOption } from '../../ComboboxMultiOption';
import { ComboboxMultiList } from '../../ComboboxList';
import { ComboboxMulti } from '..';
export default function ControlledInputValue(props) {
  const {
      width = 300,
      values: valuesProp = [{
        value: 'Apples'
      }],
      onChange: _onChange
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [inputValue, setInputValue] = useState('starting value');
  const [values, setValues] = useState(valuesProp);
  const handleClick = () => setInputValue('bananas');
  return React.createElement(SpaceVertical, {
    width: width,
    align: "start"
  }, React.createElement(Paragraph, null, "Current inputValue: ", inputValue), React.createElement(Button, {
    onClick: handleClick
  }, "Change Input Value"), React.createElement(ComboboxMulti, _extends({
    values: values,
    onChange: setValues
  }, restProps), React.createElement(ComboboxMultiInput, {
    autoComplete: false,
    inputValue: inputValue,
    onInputChange: setInputValue,
    freeInput: true
  }), React.createElement(ComboboxMultiList, {
    persistSelection: true
  }, React.createElement(ComboboxMultiOption, {
    value: "Apples"
  }), React.createElement(ComboboxMultiOption, {
    value: "Oranges"
  }), React.createElement(ComboboxMultiOption, {
    value: "Grapes"
  }), React.createElement(ComboboxMultiOption, {
    value: "Bananas"
  }), React.createElement(ComboboxMultiOption, {
    value: "Pineapples"
  }))));
}
//# sourceMappingURL=ControlledInputValue.js.map