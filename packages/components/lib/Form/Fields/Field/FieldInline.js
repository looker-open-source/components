let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5;

import React, { isValidElement } from 'react';
import styled from 'styled-components';
import { Label } from '../../Label/Label';
import { Paragraph, Span } from '../../../Text';
import { ValidationMessage } from '../../ValidationMessage/ValidationMessage';
import { Truncate } from '../../../Truncate';
import { RequiredStar } from './RequiredStar';

const FieldInlineLayout = ({
  className,
  children,
  description,
  detail,
  label,
  id,
  required,
  validationMessage
}) => {
  const describedbyId = `describedby-${id}`;
  const inputWithAriaDescribed = isValidElement(children) ? React.cloneElement(children, {
    'aria-describedby': describedbyId
  }) : children;
  return React.createElement("div", {
    className: className
  }, React.createElement(InputArea, null, inputWithAriaDescribed), React.createElement(Label, {
    htmlFor: id
  }, React.createElement(Truncate, null, label), required && React.createElement(RequiredStar, null)), detail && React.createElement(FieldDetail, null, detail), React.createElement(MessageArea, {
    id: describedbyId
  }, description && React.createElement(FieldDescription, null, description), validationMessage && React.createElement(ValidationMessage, validationMessage)));
};

const FieldDetail = styled(Span).withConfig({
  displayName: "FieldInline__FieldDetail",
  componentId: "sc-1gab50g-0"
})(_t || (_t = _`
  color: ${0};
  font-size: ${0};
  grid-column: 3;
  grid-row: 1;
  /* stylelint-disable */
  -ms-grid-column: 3;
  -ms-grid-column-span: 2;
  -ms-grid-row: 1;
  /* stylelint-enable */
  padding-left: ${0};
`), ({
  theme
}) => theme.colors.text2, ({
  theme
}) => theme.fontSizes.xsmall, ({
  theme
}) => theme.space.u2);
const FieldDescription = styled(Paragraph).withConfig({
  displayName: "FieldInline__FieldDescription",
  componentId: "sc-1gab50g-1"
})(_t2 || (_t2 = _`
  color: ${0};
  font-size: ${0};
  line-height: ${0};
  padding-bottom: ${0};
  padding-top: ${0};
`), ({
  theme
}) => theme.colors.text2, ({
  theme
}) => theme.fontSizes.xsmall, ({
  theme
}) => theme.lineHeights.xsmall, ({
  theme
}) => theme.space.u05, ({
  theme
}) => theme.space.u05);
const InputArea = styled.div.withConfig({
  displayName: "FieldInline__InputArea",
  componentId: "sc-1gab50g-2"
})(_t3 || (_t3 = _`
  grid-column: 1;
  grid-row: 1;
  padding-right: ${0};
  /* stylelint-disable */
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  -ms-grid-row: 1;
  /* stylelint-enable */
`), ({
  theme
}) => theme.space.u1);
const MessageArea = styled.div.withConfig({
  displayName: "FieldInline__MessageArea",
  componentId: "sc-1gab50g-3"
})(_t4 || (_t4 = _`
  grid-column: 2;
  grid-column-end: span 2;
  grid-row: 2;
  /* stylelint-disable */
  -ms-grid-column: 2;
  -ms-grid-column-end: span 2;
  -ms-grid-column-span: 2;
  -ms-grid-row: 2;
  /* stylelint-enable */
`));
export const FieldInline = styled(FieldInlineLayout).withConfig({
  displayName: "FieldInline",
  componentId: "sc-1gab50g-4"
})(_t5 || (_t5 = _`
  align-items: center;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: start;
  line-height: ${0};
  /* stylelint-disable */
  display: -ms-grid;
  -ms-grid-columns: auto auto auto auto;
  /* stylelint-enable */

  ${0} {
    align-items: center;
    color: ${0};
    display: flex;
    font-size: ${0};
    font-weight: normal;
    grid-column: 2;
    grid-row: 1;
    overflow: hidden;
    width: 100%;
    /* stylelint-disable */
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    -ms-grid-row: 1;
    /* stylelint-enable */
  }
`), ({
  theme
}) => theme.lineHeights.small, Label, ({
  theme,
  disabled
}) => disabled && theme.colors.text1, ({
  theme
}) => theme.fontSizes.small);
//# sourceMappingURL=FieldInline.js.map