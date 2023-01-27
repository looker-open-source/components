import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["width"];

import React from 'react';
import { ComboboxMultiInput } from '../../ComboboxMultiInput';
import { ComboboxMultiOption } from '../../ComboboxMultiOption';
import { ComboboxMultiList } from '../../ComboboxList';
import { ComboboxMulti } from '../../ComboboxMulti';
export default function Basic(props) {
  const {
      width = 300
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(ComboboxMulti, _extends({
    width: width
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
//# sourceMappingURL=Basic.js.map