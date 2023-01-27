import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["width"];

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