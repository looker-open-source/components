const _excluded = ["width"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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