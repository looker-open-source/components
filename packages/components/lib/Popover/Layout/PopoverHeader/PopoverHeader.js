import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["children", "hideClose", "detail", "hidden"];
import React, { useContext } from 'react';
import styled from 'styled-components';
import { DialogContext } from '../../../Dialog/DialogContext';
import { VisuallyHidden } from '../../../VisuallyHidden';
import { ModalHeaderCloseButton, ModalHeader } from '../../../Modal';

const PopoverHeaderLayout = _ref => {
  let {
    children,
    hideClose = false,
    detail,
    hidden = false
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    id
  } = useContext(DialogContext);
  const headingId = id ? `${id}-heading` : undefined;
  return hidden ? React.createElement(VisuallyHidden, {
    id: headingId
  }, children) : React.createElement(ModalHeader, _extends({
    detail: detail || !hideClose && React.createElement(ModalHeaderCloseButton, {
      size: "small"
    }),
    fontSize: "small",
    fontWeight: "medium",
    id: headingId,
    pl: "large",
    pr: "medium",
    py: "small"
  }, props), children);
};

export const PopoverHeader = styled(PopoverHeaderLayout).withConfig({
  displayName: "PopoverHeader",
  componentId: "sc-1pomwz8-0"
})(_t || (_t = _``));
//# sourceMappingURL=PopoverHeader.js.map