import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["id", "options", "value", "name", "inputsInline"];
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