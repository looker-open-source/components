let _ = t => t,
  _t;
const _excluded = ["truncate"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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