let _ = t => t,
  _t;
const _excluded = ["children", "closeButton"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useContext } from 'react';
import styled from 'styled-components';
import { DialogContext } from '../../../Dialog/DialogContext';
import { ModalFooter } from '../../../Modal/ModalFooter/ModalFooter';
import { ButtonTransparent } from '../../../Button';
import { useTranslation } from '../../../utils';
const PopoverFooterLayout = _ref => {
  let {
      children,
      closeButton
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    closeModal
  } = useContext(DialogContext);
  const {
    t
  } = useTranslation('PopoverFooter');
  closeButton = closeButton || t('Done');
  return React.createElement(ModalFooter, _extends({
    pl: "large",
    pr: "medium",
    py: "xsmall"
  }, props), typeof closeButton === 'string' ? React.createElement(ButtonTransparent, {
    size: "small",
    onClick: closeModal
  }, closeButton) : closeButton, children);
};
export const PopoverFooter = styled(PopoverFooterLayout).withConfig({
  displayName: "PopoverFooter",
  componentId: "sc-185a4pp-0"
})(_t || (_t = _``));
//# sourceMappingURL=PopoverFooter.js.map