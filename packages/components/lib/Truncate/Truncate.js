import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["truncate"];
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { textColor, typography, width as widthHelper } from '@looker/design-tokens';
import { Span } from '../Text/Span';
import { useTooltip } from '../Tooltip';
import { mergeClassNames, useIsTruncated } from '../utils';

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
  const [domNode, setDomNode] = useState(null);
  const isTruncated = useIsTruncated(domNode);
  const textRef = useCallback(node => {
    setDomNode(node);
  }, []);
  const {
    tooltip,
    domProps
  } = useTooltip({
    content: React.createElement(React.Fragment, null, children, description && React.createElement(React.Fragment, null, React.createElement("br", null), React.createElement(Span, {
      color: "text2"
    }, description))),
    disabled: !description && !isTruncated,
    invert: false,
    placement: 'top-start',
    textAlign: 'left',
    triggerElement: domNode,
    width: 'auto'
  });
  return React.createElement(React.Fragment, null, tooltip, React.createElement("span", _extends({}, domProps, {
    className: mergeClassNames([domProps.className, propsClassName]),
    ref: textRef
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