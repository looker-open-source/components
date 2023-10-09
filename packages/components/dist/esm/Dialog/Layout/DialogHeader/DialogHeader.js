let _ = t => t,
  _t;
const _excluded = ["children", "hideClose", "detail"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useContext } from 'react';
import styled from 'styled-components';
import { DialogContext } from '../../DialogContext';
import { ModalHeader } from '../../../Modal/ModalHeader';
import { ModalHeaderCloseButton } from '../../../Modal/ModalHeaderCloseButton';
const DialogHeaderLayout = _ref => {
  let {
      children,
      hideClose,
      detail
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    id: dialogId
  } = useContext(DialogContext);
  const headingId = dialogId ? `${dialogId}-heading` : undefined;
  const detailContent = detail || detail === undefined && !hideClose && React.createElement(ModalHeaderCloseButton, null);
  return React.createElement(ModalHeader, _extends({
    detail: detailContent,
    id: headingId,
    px: "xlarge",
    py: "large"
  }, props), children);
};
export const DialogHeader = styled(DialogHeaderLayout).withConfig({
  displayName: "DialogHeader",
  componentId: "sc-xx25r3-0"
})(_t || (_t = _``));
//# sourceMappingURL=DialogHeader.js.map