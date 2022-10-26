import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;

import React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { theme } from '@looker/components';
export const CodeBlock = ({
  code,
  language
}) => {
  return React.createElement(Highlight, _extends({}, defaultProps, {
    code: code,
    language: language
  }), ({
    className,
    style,
    tokens,
    getLineProps,
    getTokenProps
  }) => React.createElement(Pre, {
    className: className,
    style: style
  }, tokens.map((line, i) => React.createElement(Line, _extends({
    key: i
  }, getLineProps({
    line,
    key: i
  })), React.createElement(LineNo, null, i + 1), React.createElement(LineContent, null, line.map((token, key) => React.createElement("span", _extends({
    key: key
  }, getTokenProps({
    token,
    key
  })))))))));
};
const Pre = styled.pre.withConfig({
  displayName: "CodeBlock__Pre",
  componentId: "sc-y7nys8-0"
})(_t || (_t = _`
  border-radius: ${0};
  margin: ${0};
  padding: ${0};
  text-align: left;
`), theme.radii.large, theme.sizes.small, theme.sizes.small);
const Line = styled.div.withConfig({
  displayName: "CodeBlock__Line",
  componentId: "sc-y7nys8-1"
})(_t2 || (_t2 = _`
  display: table-row;
`));
const LineNo = styled.span.withConfig({
  displayName: "CodeBlock__LineNo",
  componentId: "sc-y7nys8-2"
})(_t3 || (_t3 = _`
  display: table-cell;
  opacity: 0.5;
  padding-right: ${0};
  text-align: right;
  user-select: none;
`), theme.sizes.small);
const LineContent = styled.span.withConfig({
  displayName: "CodeBlock__LineContent",
  componentId: "sc-y7nys8-3"
})(_t4 || (_t4 = _`
  display: table-cell;
`));
//# sourceMappingURL=CodeBlock.js.map