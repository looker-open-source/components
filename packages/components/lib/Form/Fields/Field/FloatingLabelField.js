import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["className", "externalLabel"],
      _excluded2 = ["ariaLabelOnly", "children", "detail", "disabled", "hideLabel", "id", "inline", "label", "required", "labelOffset", "hasValue", "checkValueOnBlur"];

let _ = t => t,
    _t;

import { width } from '@looker/design-tokens';
import React, { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import { Space } from '../../../Layout';
import { DISABLED_OPACITY } from '../../constants';
import { FieldsetContext } from '../../Fieldset';
import { Field } from './Field';
import { FieldDetail } from './FieldDetail';
import { FieldLabel } from './FieldLabel';
import { HelperText } from './HelperText';
import { InputArea } from './InputArea';
import { useFloatingLabel } from './useFloatingLabel';

const getLabelColor = (isFocused, validationMessage) => {
  if ((validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type) === 'error') return 'critical';
  if (isFocused) return 'key';
  return undefined;
};

export const FloatingLabelField = styled(_ref => {
  let {
    className,
    externalLabel: propsExternalLabel
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    ariaLabelOnly,
    children,
    detail,
    disabled,
    hideLabel,
    id,
    inline,
    label,
    required,
    labelOffset,
    hasValue,
    checkValueOnBlur
  } = props,
        rest = _objectWithoutProperties(props, _excluded2);

  const {
    className: labelPositionClass,
    isFocused,
    handlers,
    style
  } = useFloatingLabel({
    checkValueOnBlur,
    hasValue,
    labelOffset
  });
  const {
    defaults: {
      externalLabel
    }
  } = useTheme();
  const {
    fieldsHideLabel
  } = useContext(FieldsetContext);

  if (externalLabel || propsExternalLabel || !label || hideLabel || fieldsHideLabel || inline) {
    return React.createElement(Field, _extends({}, props, {
      className: className
    }));
  }

  return React.createElement("div", {
    className: `${className} ${labelPositionClass} floating`,
    style: style,
    "data-disabled": disabled
  }, React.createElement(InputArea, handlers, children), React.createElement(FieldLabel, {
    ariaLabelOnly: ariaLabelOnly,
    id: id,
    label: label,
    hideLabel: hideLabel,
    required: required,
    fontWeight: "normal",
    color: getLabelColor(isFocused, props.validationMessage)
  }), React.createElement(Space, {
    width: "auto",
    align: "start"
  }, React.createElement(HelperText, _extends({
    id: id
  }, rest)), detail && React.createElement(FieldDetail, {
    pt: "u2",
    color: "text2"
  }, detail)));
}).withConfig({
  displayName: "FloatingLabelField",
  componentId: "sc-1sw05so-0"
})(_t || (_t = _`
  &.floating {
    display: ${0};
    opacity: ${0};
    /* Make the top border intersect the the middle of the label */
    padding-top: calc(${0} / 2);
    position: relative;
    width: ${0};
    ${0}

    label {
      background: ${0};
      border-radius: ${0};
      font-size: ${0};
      /* Align with the input contents, compensate for left border */
      left: calc(${0} + 1px);
      line-height: initial;
      padding: 0 ${0};
      position: absolute;
      top: 0;
      transition: ${0}ms;
    }
    &.label-down {
      label {
        font-size: ${0};
        pointer-events: none;
        transform: translate(var(--label-translate, 0));
      }
      input::placeholder,
      textarea::placeholder {
        color: ${0};
      }
    }

    & > ${0} {
      /* Align with the input contents, compensate for left border */
      margin: 0 calc(${0} + 1px);
    }
  }
`), ({
  autoResize
}) => autoResize ? 'inline-block' : 'block', ({
  disabled
}) => disabled ? DISABLED_OPACITY : '1', ({
  theme
}) => theme.fontSizes.xsmall, ({
  autoResize
}) => autoResize ? 'fit-content' : '100%', width, ({
  theme
}) => theme.colors.field, ({
  theme
}) => theme.radii.small, ({
  theme
}) => theme.fontSizes.xsmall, ({
  theme
}) => theme.space.u2, ({
  theme
}) => theme.space.u1, ({
  theme
}) => theme.transitions.rapid, ({
  theme
}) => theme.fontSizes.small, ({
  theme
}) => theme.colors.field, Space, ({
  theme
}) => theme.space.u3);
//# sourceMappingURL=FloatingLabelField.js.map