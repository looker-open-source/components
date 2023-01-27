import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["width"];

import React from 'react';
import { Combobox, ComboboxOption, ComboboxList } from '../..';
import { ComboboxInput } from '../../ComboboxInput';
export default function NoIndicator(props) {
  const {
      width = 300
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(Combobox, _extends({
    width: width
  }, restProps), React.createElement(ComboboxInput, {
    placeholder: "indicator={false}"
  }), React.createElement(ComboboxList, {
    indicator: false,
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
  }), React.createElement(ComboboxOption, {
    value: "",
    label: "Create New Option",
    highlightText: false
  })));
}
//# sourceMappingURL=NoIndicator.js.map