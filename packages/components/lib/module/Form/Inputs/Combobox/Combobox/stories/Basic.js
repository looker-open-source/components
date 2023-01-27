import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["width"];

import React from 'react';
import { Combobox, ComboboxOption, ComboboxList } from '../..';
import { ComboboxInput } from '../../ComboboxInput';
export default function Basic(props) {
  const {
      width = 300
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(Combobox, _extends({
    width: width
  }, restProps), React.createElement(ComboboxInput, null), React.createElement(ComboboxList, null, React.createElement(ComboboxOption, {
    value: "Apples super long text to see what wrapping looks like"
  }), React.createElement(ComboboxOption, {
    value: "Oranges"
  }), React.createElement(ComboboxOption, {
    value: "Grapes"
  }), React.createElement(ComboboxOption, {
    value: "Bananas"
  }), React.createElement(ComboboxOption, {
    value: "Pineapples"
  }), React.createElement(ComboboxOption, {
    value: "",
    label: "Create New Option",
    highlightText: false
  })));
}
//# sourceMappingURL=Basic.js.map