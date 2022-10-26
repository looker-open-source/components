import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2,
    _t3;

const _excluded = ["className", "onChange", "underlineOnlyOnHover", "value", "placeholder"];
import React, { forwardRef, useState } from 'react';
import isFunction from 'lodash/isFunction';
import styled from 'styled-components';
import { typography } from '@looker/design-tokens';
import { pickInputProps } from '../InputProps';
export const InlineTextAreaLayout = forwardRef((_ref, ref) => {
  let {
    className,
    onChange,
    underlineOnlyOnHover,
    value: valueProp = '',
    placeholder
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [value, setValueChange] = useState(valueProp);
  const displayValue = isFunction(onChange) ? valueProp : value;

  const handleValueChange = event => {
    setValueChange(event.currentTarget.value);
  };

  const handleChange = isFunction(onChange) ? onChange : handleValueChange;
  return React.createElement("div", {
    className: className,
    "data-testid": "inline-text-area"
  }, React.createElement(Input, _extends({
    onChange: handleChange,
    ref: ref,
    underlineOnlyOnHover: underlineOnlyOnHover,
    value: displayValue
  }, pickInputProps(props))), React.createElement(VisibleText, {
    displayValue: displayValue
  }, displayValue || placeholder));
});
InlineTextAreaLayout.displayName = 'InlineTextAreaLayout';
const Input = styled.textarea.withConfig({
  displayName: "InlineTextArea__Input",
  componentId: "sc-1ioqw6m-0"
})(_t || (_t = _`
  background: transparent;
  border: none;
  caret-color: ${0};
  color: transparent;
  cursor: ${0};
  font: inherit;
  height: 100%;
  left: 0;
  margin: 0; /* override browser default(s) */
  outline: none;
  padding: 0;
  position: absolute;
  resize: none;
  text-align: inherit;
  text-transform: inherit;
  top: 0;
  vertical-align: top; /* textarea is inline-block so this removes 4px generated below */
  width: 100%;
`), ({
  theme
}) => theme.colors.text5, ({
  readOnly,
  disabled
}) => readOnly || disabled ? 'not-allowed' : undefined);
const VisibleText = styled.div.withConfig({
  displayName: "InlineTextArea__VisibleText",
  componentId: "sc-1ioqw6m-1"
})(_t2 || (_t2 = _`
  color: ${0};
`), ({
  displayValue,
  theme
}) => displayValue ? 'inherit' : theme.colors.text1);
export const InlineTextArea = styled(InlineTextAreaLayout).withConfig({
  displayName: "InlineTextArea",
  componentId: "sc-1ioqw6m-2"
})(_t3 || (_t3 = _`
  ${0}

  border: none;
  border-bottom: 1px dashed;
  border-bottom-color: ${0};
  color: ${0};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${0};
  min-width: 2rem;
  position: relative;
  text-align: inherit;
  white-space: pre-wrap;

  :focus,
  :hover {
    background-color: ${0};
    border-bottom-color: ${0};
    outline: none;
  }

  :focus {
    border-bottom-style: solid;
  }

  :disabled,
  :hover {
    border-bottom-color: ${0};
  }

  :hover {
    border-bottom-color: ${0};
  }
`), typography, ({
  theme,
  underlineOnlyOnHover,
  readOnly
}) => underlineOnlyOnHover || readOnly ? 'transparent' : theme.colors.ui3, ({
  disabled,
  theme
}) => disabled ? theme.colors.text1 : 'inherit', ({
  theme
}) => theme.lineHeights.medium, ({
  theme
}) => theme.colors.ui1, ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.colors.text1, ({
  readOnly
}) => readOnly && 'transparent');
//# sourceMappingURL=InlineTextArea.js.map