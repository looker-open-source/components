let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6;

import { width } from '@looker/design-tokens';
import React from 'react';
import styled, { css } from 'styled-components';
import omit from 'lodash/omit';
import pick from 'lodash/pick';
import { inputHeight } from '../../Inputs/height';
import { HelperText } from './HelperText';
import { FieldDetail } from './FieldDetail';
import { FieldLabel } from './FieldLabel';
import { InputArea } from './InputArea';
export const fieldPropKeys = ['className', 'description', 'detail', 'externalLabel', 'id', 'inline', 'label', 'hideLabel', 'labelWidth', 'validationMessage', 'width'];
export const pickFieldProps = props => pick(props, [...fieldPropKeys, 'disabled', 'required', 'autoResize']);
export const omitFieldProps = props => omit(props, fieldPropKeys);
export const Field = styled(({
  autoResize,
  className,
  children,
  description,
  detail,
  id,
  ariaLabelOnly,
  label,
  hideLabel,
  required,
  validationMessage
}) => React.createElement("div", {
  className: className
}, React.createElement(FieldLabel, {
  ariaLabelOnly: ariaLabelOnly,
  id: id,
  label: label,
  hideLabel: hideLabel,
  required: required
}), React.createElement(InputArea, {
  autoResize: autoResize
}, children), detail && React.createElement(FieldDetail, null, detail), React.createElement(HelperText, {
  description: description,
  id: id,
  validationMessage: validationMessage
}))).withConfig({
  displayName: "Field",
  componentId: "sc-1luvvdx-0"
})(_t || (_t = _`
  align-items: left;

  display: ${0};
  ${0}
  grid-template-columns: ${0};
  height: fit-content;
  justify-content: space-between;
  width: ${0};
  ${0}

  ${0} {
    grid-area: input;
  }

  ${0} {
    grid-area: messages;
  }

  & > ${0} {
    grid-area: label;
    ${0}
  }

  ${0} {
    grid-area: detail;
    justify-self: end;
    padding-left: ${0};

    ${0}
  }
`), ({
  autoResize
}) => autoResize ? 'inline-grid' : 'grid', ({
  inline
}) => inline ? inlineTemplateAreas : templateAreas, ({
  inline
}) => inline ? '150px 1fr' : undefined, ({
  autoResize
}) => autoResize ? 'fit-content' : '100%', width, InputArea, HelperText, FieldLabel, ({
  inline
}) => fieldLabelCSS(inline), FieldDetail, ({
  theme: {
    space
  }
}) => space.u3, ({
  inline
}) => inline && css(_t2 || (_t2 = _`
        align-self: center;
      `)));

const fieldLabelCSS = inline => inline ? css(_t3 || (_t3 = _`
        height: ${0};
        justify-self: end;
        line-height: ${0};
        padding-right: ${0};
        text-align: right;
      `), inputHeight, inputHeight, ({
  theme
}) => theme.space.u3) : css(_t4 || (_t4 = _`
        line-height: ${0};
        padding-bottom: ${0};
      `), ({
  theme
}) => theme.lineHeights.xsmall, ({
  theme
}) => theme.space.u1);

const inlineTemplateAreas = css(_t5 || (_t5 = _`
  grid-template-areas: 'label input detail' '. messages messages';
`));
const templateAreas = css(_t6 || (_t6 = _`
  grid-template-areas: 'label detail' 'input input' 'messages messages';
`));
//# sourceMappingURL=Field.js.map