import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["allowMultipleValues", "expressionType"];

import React, { useState } from 'react';
import { Filter } from '../Filter';
export default function Basic(_ref) {
  let {
      allowMultipleValues = true,
      expressionType = 'number'
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const [expression, setExpression] = useState(props.expression || '');
  const handleChange = value => {
    var _props$onChange;
    (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, value);
    setExpression(value.expression);
  };
  return React.createElement(Filter, _extends({}, props, {
    onChange: handleChange,
    allowMultipleValues: allowMultipleValues,
    expression: expression,
    expressionType: expressionType
  }));
}
//# sourceMappingURL=Basic.js.map