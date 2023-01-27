import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["filters"];

import React, { useState } from 'react';
import { InputFilters } from '..';
import { InputText } from '../../';
const EditorComponent = ({
  closeEditor,
  onChange,
  value: _value = ''
}) => {
  const handleChange = event => {
    onChange(event.currentTarget.value);
  };
  return React.createElement(InputText, {
    "data-autofocus": "true",
    value: _value,
    onChange: handleChange,
    onBlur: closeEditor
  });
};
const customFilters = [{
  editor: EditorComponent,
  field: 'important',
  label: 'Important'
}];
export default function CustomFilter(_ref) {
  let {
      filters: filtersProp = customFilters
    } = _ref,
    args = _objectWithoutProperties(_ref, _excluded);
  const [controlledFilters, setControlledFilters] = useState(filtersProp);
  return React.createElement(InputFilters, _extends({}, args, {
    filters: controlledFilters,
    onChange: setControlledFilters
  }));
}
//# sourceMappingURL=CustomFilter.js.map