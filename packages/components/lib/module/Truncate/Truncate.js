import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
let _ = t => t,
  _t;
const _excluded = ["truncate"];

import React from 'react';
import styled from 'styled-components';
import { textColor, typography, width as widthHelper } from '@looker/design-tokens';
import { Span } from '../Text/Span';
import { mergeClassNames } from '../utils';
import { useTruncateTooltip } from './useTruncateTooltip';
const getTruncateDescription = truncate => typeof truncate === 'object' ? truncate.description : undefined;

export const TruncateOptionally = _ref => {
  let {
      truncate
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return truncate ? React.createElement(Truncate, _extends({
    description: getTruncateDescription(truncate)
  }, props)) : React.createElement(Span, props);
};

const TruncateLayout = ({
  children,
  className: propsClassName,
  description
}) => {
  const {
    tooltip,
    domProps
  } = useTruncateTooltip({
    children,
    description
  });
  return React.createElement(React.Fragment, null, tooltip, React.createElement("span", _extends({}, domProps, {
    className: mergeClassNames([domProps.className, propsClassName])
  }), children));
};

export const Truncate = styled(TruncateLayout).attrs(({
  width: _width = '100%'
}) => ({
  width: _width
})).withConfig({
  displayName: "Truncate",
  componentId: "sc-1y9fe07-0"
})(_t || (_t = _`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${0}
  ${0}
  ${0}

  :focus-within {
    a {
      outline: none;
    }
  }
`), textColor, typography, widthHelper);
//# sourceMappingURL=Truncate.js.map