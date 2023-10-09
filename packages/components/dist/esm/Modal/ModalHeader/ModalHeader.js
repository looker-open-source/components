let _ = t => t,
  _t,
  _t2;
const _excluded = ["children", "detail", "fontSize", "fontWeight", "id"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import styled from 'styled-components';
import { Space } from '../../Layout/Space';
import { Heading } from '../../Text';
const ModalHeaderLayout = _ref => {
  let {
      children,
      detail,
      fontSize,
      fontWeight = 'semiBold',
      id
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return React.createElement(Space, _extends({
    as: "header",
    between: true,
    "aria-labelledby": id
  }, props), React.createElement(Heading, {
    as: "h3",
    fontSize: fontSize,
    fontWeight: fontWeight,
    id: id,
    mr: "xlarge",
    truncate: true
  }, children), detail && React.createElement(Detail, null, detail));
};
const Detail = styled.div.withConfig({
  displayName: "ModalHeader__Detail",
  componentId: "sc-uszbz0-0"
})(_t || (_t = _`
  margin-bottom: -${0};
  margin-top: -${0};
`), ({
  theme
}) => theme.space.u2, ({
  theme
}) => theme.space.u2);
export const ModalHeader = styled(ModalHeaderLayout).withConfig({
  displayName: "ModalHeader",
  componentId: "sc-uszbz0-1"
})(_t2 || (_t2 = _``));
//# sourceMappingURL=ModalHeader.js.map