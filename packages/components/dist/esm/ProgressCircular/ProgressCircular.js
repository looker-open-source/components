let _ = t => t,
  _t;
const _excluded = ["size", "progress", "label"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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