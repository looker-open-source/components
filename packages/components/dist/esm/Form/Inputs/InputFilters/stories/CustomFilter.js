const _excluded = ["filters"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import { InputFilters } from '..';
import { InputText } from '../../';
const EditorComponent = ({
  closeEditor,
  onChange,
  value: _value = ''
}) => {
  const handleChange = event => {
    onChange(event.target.value);
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