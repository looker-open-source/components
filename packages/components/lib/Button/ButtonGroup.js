import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["onChange", "value"];
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