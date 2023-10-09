let _ = t => t,
  _t;
const _excluded = ["children", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { border } from '@looker/design-tokens';
import React from 'react';
import styled from 'styled-components';
import { TextBase } from '../Text/TextBase';
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
  componentId: "sc-1gaybrn-0"
})(_t || (_t = _`
  ${0}
  color: ${0};
  overflow-y: auto;
  background-color: ${0};

  code {
    font-family: inherit;
  }
`), border, ({
  theme
}) => theme.colors.text, ({
  theme
}) => theme.colors.background);
//# sourceMappingURL=CodeBlock.js.map