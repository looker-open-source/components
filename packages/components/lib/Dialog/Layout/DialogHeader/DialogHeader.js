import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["children", "hideClose", "detail"];
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