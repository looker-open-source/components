import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["className", "checked", "defaultChecked", "onChange", "readOnly", "style", "validationType"],
      _excluded2 = ["callbacks"];

let _ = t => t,
    _t;

import isUndefined from 'lodash/isUndefined';
import noop from 'lodash/noop';
import pick from 'lodash/pick';
import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { reset, space } from '@looker/design-tokens';
import { inputRippleColor, RIPPLE_RATIO, rippleHandlerKeys, rippleStyle, useRipple, useRippleHandlers } from '../../../Ripple';
import { pickInputProps } from '../InputProps';
import { CheckMark } from './CheckMark';
import { CheckMarkMixed } from './CheckMarkMixed';
import { FauxCheckbox } from './FauxCheckbox';
export const Checkbox = styled(forwardRef((props, ref) => {
  const {
    className,
    checked,
    defaultChecked,
    onChange,
    readOnly,
    style,
    validationType
  } = props,
        restProps = _objectWithoutProperties(props, _excluded);

  const [isChecked, setIsChecked] = useState(!!defaultChecked);

  const _useRipple = useRipple({
    className,
    color: inputRippleColor(isChecked !== false, validationType === 'error'),
    size: RIPPLE_RATIO,
    style
  }),
        {
    callbacks
  } = _useRipple,
        rippleProps = _objectWithoutProperties(_useRipple, _excluded2);

  const rippleHandlers = useRippleHandlers(callbacks, pick(restProps, rippleHandlerKeys), restProps.disabled);
  const handleClick = readOnly ? undefined : e => {
    if (isUndefined(checked)) {
      setIsChecked(!isChecked);
    }

    if (onChange) {
      onChange(e);
    }
  };
  useEffect(() => {
    if (!isUndefined(checked)) {
      setIsChecked(checked);
    }
  }, [checked]);
  return React.createElement("div", rippleProps, React.createElement("input", _extends({
    type: "checkbox"
  }, pickInputProps(restProps), {
    checked: !!isChecked,
    "aria-checked": checked,
    "aria-invalid": validationType === 'error' ? 'true' : undefined,
    onClick: handleClick,
    onChange: noop,
    ref: ref
  }, rippleHandlers)), React.createElement(FauxCheckbox, {
    isSelected: !!isChecked
  }, checked === 'mixed' ? React.createElement(CheckMarkMixed, null) : React.createElement(CheckMark, null)));
})).withConfig({
  displayName: "Checkbox",
  componentId: "sc-9j2vap-0"
})(_t || (_t = _`
  ${0}
  ${0}
  ${0}

  align-items: center;
  display: flex;
  height: ${0};
  justify-content: center;
  position: relative;
  width: ${0};

  input {
    cursor: ${0};
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;

    &[aria-invalid='true'] {
      + ${0} {
        border-color: ${0};
      }
      &:checked + ${0} {
        background: ${0};
      }
    }
    &:disabled {
      + ${0}, &:not(:checked):hover + ${0} {
        border-color: ${0};
      }
      &:checked + ${0} {
        background: ${0};
      }
    }
    &:not(:checked):not([aria-invalid='true']):not(:disabled) {
      &:hover,
      &:focus {
        + ${0} {
          border-color: ${0};
        }
      }
    }
  }
`), reset, space, rippleStyle, ({
  theme: {
    space
  }
}) => space.u6, ({
  theme: {
    space
  }
}) => space.u6, ({
  readOnly,
  disabled
}) => readOnly || disabled ? 'not-allowed' : undefined, FauxCheckbox, ({
  theme
}) => theme.colors.critical, FauxCheckbox, ({
  theme
}) => theme.colors.critical, FauxCheckbox, FauxCheckbox, ({
  theme
}) => theme.colors.ui2, FauxCheckbox, ({
  theme
}) => theme.colors.ui2, FauxCheckbox, ({
  theme
}) => theme.colors.ui5);
//# sourceMappingURL=Checkbox.js.map