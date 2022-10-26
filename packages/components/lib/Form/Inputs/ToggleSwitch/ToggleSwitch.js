import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["className", "disabled", "on", "onChange", "readOnly", "validationType"],
      _excluded2 = ["callbacks"];

let _ = t => t,
    _t;

import { reset, space } from '@looker/design-tokens';
import noop from 'lodash/noop';
import pick from 'lodash/pick';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { inputRippleColor, RIPPLE_RATIO, rippleHandlerKeys, useRipple, useRippleHandlers } from '../../../Ripple';
import { DISABLED_OPACITY } from '../../constants';
import { pickInputProps } from '../InputProps';
import { Handle } from './Handle';
import { Track } from './Track';
export const ToggleSwitch = styled(forwardRef((_ref, ref) => {
  let {
    className,
    disabled,
    on,
    onChange,
    readOnly,
    validationType
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const _useRipple = useRipple({
    color: inputRippleColor(!!on, validationType === 'error'),
    size: RIPPLE_RATIO
  }),
        {
    callbacks
  } = _useRipple,
        rippleProps = _objectWithoutProperties(_useRipple, _excluded2);

  const rippleHandlers = useRippleHandlers(callbacks, pick(props, rippleHandlerKeys), disabled);
  return React.createElement("div", {
    className: className
  }, React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: readOnly ? noop : onChange,
    role: "switch",
    "aria-checked": on,
    "aria-invalid": validationType === 'error' ? 'true' : undefined,
    ref: ref
  }, pickInputProps(props), rippleHandlers)), React.createElement(Track, {
    on: on,
    validationType: validationType
  }), React.createElement(Handle, _extends({
    on: on,
    validationType: validationType
  }, rippleProps)));
})).withConfig({
  displayName: "ToggleSwitch",
  componentId: "sc-wcqgi4-0"
})(_t || (_t = _`
  ${0}
  ${0}

  align-items: center;
  display: flex;
  height: ${0};
  justify-content: center;
  opacity: ${0};
  position: relative;
  width: ${0};

  input {
    cursor: ${0};
    height: 100%;
    left: 0;
    margin: 0; /* Suppress browser default styling */
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`), reset, space, ({
  theme
}) => theme.space.u6, ({
  disabled
}) => disabled && DISABLED_OPACITY, ({
  theme
}) => theme.space.u10, ({
  disabled,
  readOnly
}) => disabled || readOnly ? 'not-allowed' : 'pointer');
//# sourceMappingURL=ToggleSwitch.js.map