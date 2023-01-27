import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["width"];

import React from 'react';
import { ComboboxMultiInput } from '../../ComboboxMultiInput';
import { ComboboxMultiOption } from '../../ComboboxMultiOption';
import { ComboboxMultiList } from '../../ComboboxList';
import { ComboboxMulti } from '..';
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
  return React.createElement(ComboboxMulti, _extends({
    width: width
  }, restProps), React.createElement(ComboboxMultiInput, {
    onClear: () => alert('CLEAR'),
    placeholder: "Custom indicator"
  }), React.createElement(ComboboxMultiList, {
    indicator: Indicator,
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
  })));
}
//# sourceMappingURL=CustomIndicator.js.map