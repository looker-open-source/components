let _ = t => t,
  _t;
const _excluded = ["children", "secondary"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import styled from 'styled-components';
import { Space } from '../../Layout/Space';
const ModalFooterLayout = _ref => {
  let {
      children,
      secondary
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return React.createElement(Space, _extends({
    as: "footer",
    reverse: true,
    between: true
  }, props), React.createElement(Space, {
    reverse: true
  }, children), secondary && React.createElement(Space, null, secondary));
};
export const ModalFooter = styled(ModalFooterLayout).withConfig({
  displayName: "ModalFooter",
  componentId: "sc-14cjxu-0"
})(_t || (_t = _`
  flex-shrink: 0;
`));
//# sourceMappingURL=ModalFooter.js.map