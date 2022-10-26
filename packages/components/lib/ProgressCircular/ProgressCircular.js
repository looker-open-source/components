import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["size", "progress", "label"];
import React from 'react';
import styled from 'styled-components';
import { IndeterminateProgress } from './IndeterminateProgress';
import { DeterminateProgress } from './DeterminateProgress';
import { progressCircularSize } from './size';
export const ProgressCircular = _ref => {
  let {
    size = 'large',
    progress,
    label
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(ProgressContainer, _extends({
    size: size,
    role: "progressbar",
    "aria-label": label || undefined,
    "aria-valuemin": 0,
    "aria-valuemax": 1,
    "aria-valuenow": progress || undefined
  }, props), progress !== undefined ? React.createElement(DeterminateProgress, {
    size: size,
    progress: progress
  }) : React.createElement(IndeterminateProgress, {
    size: size
  }));
};
const ProgressContainer = styled.div.withConfig({
  displayName: "ProgressCircular__ProgressContainer",
  componentId: "sc-1yq3gkc-0"
})(_t || (_t = _`
  ${0}
  display: inline-flex;
  position: relative;
`), progressCircularSize);
//# sourceMappingURL=ProgressCircular.js.map