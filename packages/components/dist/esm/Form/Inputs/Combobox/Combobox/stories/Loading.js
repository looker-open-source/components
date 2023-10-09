const _excluded = ["width"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import { Button, Space } from '../../../../../';
import { Combobox, ComboboxOption, ComboboxList } from '../..';
import { ComboboxInput } from '../../ComboboxInput';
export default function LoadingState(props) {
  const {
      width = 300
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [loading, setLoading] = useState(true);
  const handleLoadingStart = () => {
    setLoading(true);
  };
  const handleLoadingComplete = () => {
    setLoading(false);
  };
  return React.createElement(Space, null, loading ? React.createElement(Button, {
    onClick: handleLoadingComplete
  }, "Stop Loading") : React.createElement(Button, {
    onClick: handleLoadingStart
  }, "Start Loading"), React.createElement(Combobox, _extends({
    width: width
  }, restProps, {
    value: loading ? {
      value: ''
    } : undefined
  }), React.createElement(ComboboxInput, null), React.createElement(ComboboxList, null, loading ? React.createElement(ComboboxOption, {
    value: "Loading..."
  }) : React.createElement(React.Fragment, null, React.createElement(ComboboxOption, {
    value: "Apples"
  }), React.createElement(ComboboxOption, {
    value: "Oranges"
  })))));
}
//# sourceMappingURL=Loading.js.map