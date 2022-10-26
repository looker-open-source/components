import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2;

const _excluded = ["children", "detail", "fontSize", "fontWeight", "id"];
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