let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
export const PrismCodeBlock = ({
  code,
  language
}) => {
  return React.createElement(Highlight, _extends({}, defaultProps, {
    theme: theme,
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
    key: i,
    line
  })), React.createElement(LineNo, null, i + 1), React.createElement(LineContent, null, line.map((token, key) => React.createElement("span", _extends({
    key: key
  }, getTokenProps({
    key,
    token
  })))))))));
};
const Pre = styled.pre.withConfig({
  displayName: "PrismCodeBlock__Pre",
  componentId: "sc-xl7e8j-0"
})(_t || (_t = _`
  border: none;
  border-radius: ${0};
  text-align: left;
`), ({
  theme
}) => theme.radii.medium);
const Line = styled.div.withConfig({
  displayName: "PrismCodeBlock__Line",
  componentId: "sc-xl7e8j-1"
})(_t2 || (_t2 = _`
  display: table-row;
`));
const LineNo = styled.span.withConfig({
  displayName: "PrismCodeBlock__LineNo",
  componentId: "sc-xl7e8j-2"
})(_t3 || (_t3 = _`
  display: table-cell;
  opacity: 0.5;
  padding-right: ${0};
  text-align: right;
  user-select: none;
`), ({
  theme
}) => theme.sizes.small);
const LineContent = styled.span.withConfig({
  displayName: "PrismCodeBlock__LineContent",
  componentId: "sc-xl7e8j-3"
})(_t4 || (_t4 = _`
  display: table-cell;
`));
//# sourceMappingURL=PrismCodeBlock.js.map