let _ = t => t,
  _t;
const _excluded = ["collapse", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import { shouldForwardProp } from '@looker/design-tokens';
import styled from 'styled-components';
import { OverflowShadow, useOverflow } from '../../../utils';
import { commonLayoutCSS } from '../../utils/common';
import { asideWidth } from './asideWidth';
const AsideLayout = forwardRef((_ref, forwardedRef) => {
  let {
      collapse,
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const [hasOverflow, ref] = useOverflow(forwardedRef);
  return collapse ? null : React.createElement(OverflowShadow, _extends({
    as: "aside",
    hasOverflow: hasOverflow,
    ref: ref
  }, props), children);
});
AsideLayout.displayName = 'AsideLayout';
export const Aside = styled(AsideLayout).withConfig({
  shouldForwardProp: prop => prop === 'collapse' || shouldForwardProp(prop),
  displayName: "Aside",
  componentId: "sc-1t83syr-0"
}).attrs(({
  width: _width = 'sidebar'
}) => ({
  width: _width
}))(_t || (_t = _`
${0}

flex: 0 0 ${0};
max-width: ${0};
min-width: ${0};
overflow: auto;
width: 0;
${0}

${0}`), commonLayoutCSS, ({
  width
}) => width, ({
  width
}) => width, ({
  width
}) => width, ({
  scrollWithin
}) => scrollWithin && 'height: fit-content;', asideWidth);
//# sourceMappingURL=Aside.js.map