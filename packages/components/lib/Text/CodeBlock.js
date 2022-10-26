import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["children", "className"];
import { border } from '@looker/design-tokens';
import React from 'react';
import styled from 'styled-components';
import { TextBase } from './TextBase';

const CodeBlockLayout = _ref => {
  let {
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(TextBase, _extends({
    className: className,
    as: "pre",
    fontFamily: "code"
  }, props), React.createElement("code", null, children));
};

export const CodeBlock = styled(CodeBlockLayout).attrs(({
  border: _border = 'ui2',
  fontSize: _fontSize = 'small',
  p: _p = 'medium'
}) => ({
  border: _border,
  fontSize: _fontSize,
  p: _p
})).withConfig({
  displayName: "CodeBlock",
  componentId: "sc-yes8xf-0"
})(_t || (_t = _`
  ${0}
  color: ${0};
  overflow-y: auto;

  code {
    font-family: inherit;
  }
`), border, ({
  theme
}) => theme.colors.text);
//# sourceMappingURL=CodeBlock.js.map