let _ = t => t,
  _t,
  _t2;
const _excluded = ["className", "validationType"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import styled, { css } from 'styled-components';
import { ErrorIcon } from '../ErrorIcon';
import { inputTextHover, inputTextFocus, inputTextDisabled, inputTextValidation, inputCSS } from '../InputText';
import { simpleLayoutCSS } from '../../../Layout/utils/simple';
import { pickInputProps } from '../InputProps';
const TextAreaLayout = _ref => {
  let {
      className,
      validationType
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const textareaProps = pickInputProps(props);
  return React.createElement("div", {
    className: className
  }, React.createElement("textarea", _extends({
    "aria-invalid": validationType === 'error' ? 'true' : undefined
  }, textareaProps)), validationType && React.createElement(ErrorIcon, null));
};
const textAreaResize = ({
  resize
}) => {
  if (resize === false) {
    resize = 'none';
  } else if (resize === true) {
    resize = 'vertical';
  }
  return css(_t || (_t = _`
    resize: ${0};
  `), resize);
};
export const TextArea = styled(TextAreaLayout).attrs(({
  resize: _resize = 'vertical',
  minHeight: _minHeight = '6.25rem'
}) => ({
  minHeight: _minHeight,
  resize: _resize
})).withConfig({
  displayName: "TextArea",
  componentId: "sc-10ezzv1-0"
})(_t2 || (_t2 = _`
  height: fit-content;
  position: relative;
  width: 100%;

  ${0} {
    pointer-events: none;
    position: absolute;
    right: calc(${0} + 1px);
    top: calc(${0} / 2);
  }

  textarea {
    font-family: inherit;
    margin: 0; /* override browser default(s) */
    ${0}
    ${0}
    padding: ${0};
    padding-right: ${0};
    ${0}
    vertical-align: top; /* textarea is inline-block so this removes 4px generated below */
    width: 100%;

    ::placeholder {
      color: ${0};
    }

    &:hover {
      ${0}
    }

    &:focus,
    :focus-within {
      ${0}
    }

    ${0}

    ${0}
  }
`), ErrorIcon, ({
  theme
}) => theme.space.u3, ({
  theme
}) => theme.space.u3, simpleLayoutCSS, inputCSS, ({
  theme
}) => `${theme.space.u2} ${theme.space.u3}`, ({
  theme,
  validationType
}) => validationType === 'error' && theme.space.u10, textAreaResize, ({
  theme
}) => theme.colors.text2, inputTextHover, inputTextFocus, ({
  disabled
}) => disabled ? inputTextDisabled : '', inputTextValidation);
TextArea.displayName = 'TextArea';
//# sourceMappingURL=TextArea.js.map