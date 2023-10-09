let _ = t => t,
  _t;
const _excluded = ["id", "options", "value", "name", "inputsInline"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { useFormContext } from '../../Form';
import { CheckboxGroup } from '../../Inputs';
import { Field, omitFieldProps, pickFieldProps } from '../Field';
const FieldCheckboxGroupLayout = _ref => {
  let {
      id: propsID,
      options,
      value,
      name,
      inputsInline
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const validationMessage = useFormContext(props);
  const id = useID(propsID);
  return React.createElement(Field, _extends({}, pickFieldProps(props), {
    id: id
  }), React.createElement(CheckboxGroup, _extends({}, omitFieldProps(props), {
    "aria-describedby": `describedby-${id}`,
    "aria-labelledby": `labelledby-${id}`,
    id: id,
    inline: props.inline || inputsInline,
    name: name || id,
    options: options,
    validationType: validationMessage && validationMessage.type,
    value: value
  })));
};
FieldCheckboxGroupLayout.displayName = 'FieldCheckboxGroupLayout';
export const FieldCheckboxGroup = styled(FieldCheckboxGroupLayout).withConfig({
  displayName: "FieldCheckboxGroup",
  componentId: "sc-w2hs65-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldCheckboxGroup.js.map