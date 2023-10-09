let _ = t => t,
  _t;
const _excluded = ["onChange", "value"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import xor from 'lodash/xor';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { ButtonItem } from './ButtonItem';
import { ButtonSet } from './ButtonSet';
const ButtonGroupLayout = forwardRef((_ref, ref) => {
  let {
      onChange,
      value = []
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  function handleItemClick(e) {
    const newValue = xor(value, [e.currentTarget.value]);
    if (onChange) {
      onChange(newValue);
    }
  }
  return React.createElement(ButtonSet, _extends({}, props, {
    ref: ref,
    value: value,
    onItemClick: handleItemClick
  }));
});
export const ButtonGroup = styled(ButtonGroupLayout).withConfig({
  displayName: "ButtonGroup",
  componentId: "sc-13avdmz-0"
})(_t || (_t = _`
  ${0} {
    border: 1px solid ${0};
    border-radius: ${0};
    margin-right: ${0};
    &:last-child {
      margin-right: 0;
    }

    &[aria-pressed='false']:not(:hover) {
      background: ${0};
    }
  }
  &.wrapping {
    margin: -${0};
    ${0} {
      margin: ${0};
    }
  }
`), ButtonItem, ({
  theme
}) => theme.colors.ui3, ({
  theme
}) => theme.radii.medium, ({
  theme
}) => theme.space.u1, ({
  theme
}) => theme.colors.background, ({
  theme
}) => theme.space.u05, ButtonItem, ({
  theme
}) => theme.space.u05);
//# sourceMappingURL=ButtonGroup.js.map