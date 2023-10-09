const _excluded = ["width", "values", "onChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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