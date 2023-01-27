import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["width"];

import React from 'react';
import { ComboboxMultiInput } from '../../ComboboxMultiInput';
import { ComboboxMultiOption } from '../../ComboboxMultiOption';
import { ComboboxMultiList } from '../../ComboboxList';
import { ComboboxMulti } from '..';
export default function NoIndicator(props) {
  const {
      width = 300
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(ComboboxMulti, _extends({
    width: width
  }, restProps), React.createElement(ComboboxMultiInput, {
    onClear: () => alert('CLEAR'),
    placeholder: "indicator={false}"
  }), React.createElement(ComboboxMultiList, {
    indicator: false,
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
//# sourceMappingURL=NoIndicator.js.map