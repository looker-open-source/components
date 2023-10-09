let _ = t => t,
  _t;
const _excluded = ["main", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { commonLayoutCSS } from '../../utils/common';
import { OverflowShadow, useOverflow } from '../../../utils';
const SectionLayout = forwardRef((_ref, forwardedRef) => {
  let {
      main,
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const [hasOverflow, ref] = useOverflow(forwardedRef);
  return React.createElement(OverflowShadow, _extends({
    as: main ? 'main' : 'section',
    hasOverflow: hasOverflow,
    ref: ref
  }, props), children);
});
SectionLayout.displayName = 'SectionLayout';
export const Section = styled(SectionLayout).withConfig({
  displayName: "Section",
  componentId: "sc-1ud6x2v-0"
})(_t || (_t = _`
  ${0}
  flex: 1 0 auto;
  overflow: auto;
  ${0}
`), commonLayoutCSS, ({
  scrollWithin
}) => scrollWithin && 'height: fit-content;');
//# sourceMappingURL=Section.js.map