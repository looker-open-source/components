let _ = t => t,
  _t;
const _excluded = ["id", "options", "name", "inputsInline"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { useFormContext } from '../../Form';
import { Field, omitFieldProps, pickFieldProps } from '../Field';
import { RadioGroup } from '../../Inputs';
const FieldRadioGroupLayout = _ref => {
  let {
      id: propsID,
      options,
      name,
      inputsInline
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const validationMessage = useFormContext(props);
  const id = useID(propsID);
  return React.createElement(Field, _extends({}, pickFieldProps(props), {
    id: id
  }), React.createElement(RadioGroup, _extends({}, omitFieldProps(props), {
    "aria-describedby": `describedby-${id}`,
    "aria-labelledby": `labelledby-${id}`,
    id: id,
    inline: props.inline || inputsInline,
    name: name || id,
    options: options,
    validationType: validationMessage && validationMessage.type
  })));
};
FieldRadioGroupLayout.displayName = 'FieldRadioGroupLayout';
export const FieldRadioGroup = styled(FieldRadioGroupLayout).withConfig({
  displayName: "FieldRadioGroup",
  componentId: "sc-4fiozu-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldRadioGroup.js.map