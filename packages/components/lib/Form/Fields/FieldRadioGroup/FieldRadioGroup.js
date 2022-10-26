import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["id", "options", "name", "inputsInline"];
import React from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { useFormContext } from '../../Form';
import { Field, omitFieldProps, pickFieldProps } from '../Field';
import { RadioGroup } from '../../Inputs/OptionsGroup';

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