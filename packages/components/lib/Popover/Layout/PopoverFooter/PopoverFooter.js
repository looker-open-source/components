import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["children", "closeButton"];
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