import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["width"];

import React from 'react';
import { Combobox, ComboboxOption, ComboboxList } from '../..';
import { ComboboxInput } from '../../ComboboxInput';
const Indicator = ({
  isActive,
  isSelected
}) => {
  let indicator;
  if (isSelected) {
    indicator = '>>';
  } else if (isActive) {
    indicator = '>';
  } else {
    indicator = '';
  }
  return React.createElement(React.Fragment, null, indicator);
};
export default function CustomIndicator(props) {
  const {
      width = 300
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(Combobox, _extends({
    width: width,
    value: {
      value: 'Grapes'
    }
  }, restProps), React.createElement(ComboboxInput, {
    placeholder: "Custom indicator"
  }), React.createElement(ComboboxList, {
    indicator: Indicator,
    persistSelection: true
  }, React.createElement(ComboboxOption, {
    value: "Apples"
  }), React.createElement(ComboboxOption, {
    value: "Oranges"
  }), React.createElement(ComboboxOption, {
    value: "Grapes"
  }), React.createElement(ComboboxOption, {
    value: "Bananas"
  }), React.createElement(ComboboxOption, {
    value: "Pineapples"
  })));
}
//# sourceMappingURL=CustomIndicator.js.map