const _excluded = ["children"];
let _ = t => t,
  _t,
  _t2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { commonLayoutCSS } from '../../utils/common';
import { OverflowShadow, useOverflow } from '../../../utils';
import { Section } from '../Section';
const hasAsideCSS = css(_t || (_t = _`
  flex-direction: row;
  & > ${0} {
    width: 0;
  }
`), Section);
const LayoutLayout = forwardRef((_ref, forwardedRef) => {
  let {
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const [hasOverflow, ref] = useOverflow(forwardedRef);
  return React.createElement(OverflowShadow, _extends({
    hasOverflow: hasOverflow,
    ref: ref
  }, props), children);
});
LayoutLayout.displayName = 'LayoutLayout';
export const Layout = styled(LayoutLayout).withConfig({
  displayName: "Layout",
  componentId: "sc-vtli68-0"
})(_t2 || (_t2 = _`
  ${0}
  display: flex;
  flex: 1 1 auto;
  overflow: ${0};
  ${0}
`), commonLayoutCSS, ({
  fixed
}) => fixed ? 'hidden' : 'auto', ({
  hasAside
}) => hasAside ? hasAsideCSS : 'flex-direction: column;');
//# sourceMappingURL=Layout.js.map