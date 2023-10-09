const _excluded = ["className", "style", "validationType"],
  _excluded2 = ["callbacks"];
let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import pick from 'lodash/pick';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { reset, space } from '@looker/design-tokens';
import { inputRippleColor, RIPPLE_RATIO, rippleHandlerKeys, rippleStyle, useRipple, useRippleHandlers } from '../../../Ripple';
import { pickInputProps } from '../InputProps';
import { FauxRadio } from './FauxRadio';
export const Radio = styled(forwardRef((props, ref) => {
  const {
      className,
      style,
      validationType
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const _useRipple = useRipple({
      className,
      color: inputRippleColor(props.checked === true, validationType === 'error'),
      size: RIPPLE_RATIO,
      style
    }),
    {
      callbacks
    } = _useRipple,
    rippleProps = _objectWithoutProperties(_useRipple, _excluded2);
  const rippleHandlers = useRippleHandlers(callbacks, pick(restProps, rippleHandlerKeys), restProps.disabled);
  return React.createElement("div", rippleProps, React.createElement("input", _extends({}, pickInputProps(restProps), {
    "aria-invalid": validationType === 'error' ? 'true' : undefined,
    ref: ref,
    type: "radio"
  }, rippleHandlers)), React.createElement(FauxRadio, null));
})).withConfig({
  displayName: "Radio",
  componentId: "sc-1e6vir3-0"
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
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;

    &:checked + ${0} {
      color: ${0};
      &::after {
        background: currentColor;
      }
    }
    &[aria-invalid='true'] + ${0} {
      color: ${0};
    }
    &:disabled {
      cursor: not-allowed;
      + ${0}, &:not(:checked):hover + ${0} {
        color: ${0};
      }
    }
    &:not(:checked):not([aria-invalid='true']):not(:disabled) {
      &:hover,
      &:focus {
        + ${0} {
          color: ${0};
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
}) => space.u6, FauxRadio, ({
  theme
}) => theme.colors.key, FauxRadio, ({
  theme
}) => theme.colors.critical, FauxRadio, FauxRadio, ({
  theme
}) => theme.colors.ui2, FauxRadio, ({
  theme
}) => theme.colors.ui5);
//# sourceMappingURL=Radio.js.map