import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["children", "secondary"];
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