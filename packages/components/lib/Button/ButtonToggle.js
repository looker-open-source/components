import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["nullable", "onChange", "value"];
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { inputHeight } from '../Form/Inputs/height';
import { ButtonItem } from './ButtonItem';
import { ButtonSet } from './ButtonSet';
const ButtSetAsToggle = ButtonSet;
const ButtonToggleLayout = forwardRef((_ref, ref) => {
  let {
    nullable,
    onChange,
    value = ''
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  function handleItemClick(e) {
    const newValue = e.currentTarget.value;
    const deselecting = newValue === value;

    if (!deselecting || nullable) {
      if (onChange) {
        onChange(deselecting ? '' : newValue);
      }
    }
  }

  return React.createElement(ButtSetAsToggle, _extends({}, props, {
    value: value,
    onItemClick: handleItemClick,
    ref: ref
  }));
});
export const ButtonToggle = styled(ButtonToggleLayout).withConfig({
  displayName: "ButtonToggle",
  componentId: "sc-8vwxgq-0"
})(_t || (_t = _`
  background-color: ${0};
  border: solid 1px ${0};
  border-left-width: 0;
  border-radius: ${0};

  ${0} {
    border-left: solid 1px ${0};
    height: calc(${0} - 2px);

    &:last-child {
      border-bottom-right-radius: ${0};
      border-top-right-radius: ${0};
    }
    &:first-child {
      border-bottom-left-radius: ${0};
      border-top-left-radius: ${0};
    }
  }

  &.wrapping {
    /* Creates horizontal rules between rows
  (and hide the last one that's flush with the bottom border) */

    background-image: linear-gradient(
        0deg,
        ${0} 0,
        ${0} 1px,
        transparent 1px,
        transparent 100%
      ),
      repeating-linear-gradient(
        180deg,
        transparent,
        transparent calc(${0} - 3px),
        ${0} calc(${0} - 3px),
        ${0} calc(${0} - 2px)
      );

    /* prevents items in the last row from growing */
    &::after {
      border-left: 1px solid ${0};
      content: '';
      flex-grow: 100;
      height: calc(${0} - 2px);
    }

    ${0} {
      /* Items in complete rows need to fill the full width evenly */
      flex-grow: 1;
      /* Removes some item-level rounded corners */
      &:first-child {
        border-bottom-left-radius: 0;
      }
      &:last-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
      /* Fixes bottom "border" when the item background obscures the parent's horizontal rows */
      &[aria-pressed='false']:hover:not(:focus),
      &[aria-pressed='true']:not(:focus) {
        box-shadow: inset 0 -1px 0 0 ${0};
      }
    }
  }
`), ({
  theme
}) => theme.colors.background, ({
  theme
}) => theme.colors.ui3, ({
  theme
}) => theme.radii.medium, ButtonItem, ({
  theme
}) => theme.colors.ui3, inputHeight, ({
  theme
}) => theme.radii.medium, ({
  theme
}) => theme.radii.medium, ({
  theme
}) => theme.radii.medium, ({
  theme
}) => theme.radii.medium, ({
  theme
}) => theme.colors.background, ({
  theme
}) => theme.colors.background, inputHeight, ({
  theme
}) => theme.colors.ui3, inputHeight, ({
  theme
}) => theme.colors.ui3, inputHeight, ({
  theme
}) => theme.colors.ui3, inputHeight, ButtonItem, ({
  theme
}) => theme.colors.ui3);
//# sourceMappingURL=ButtonToggle.js.map