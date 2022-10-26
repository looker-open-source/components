let _2 = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9,
    _t10,
    _t11;

import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { progressCircularSVG } from './size';
import { progressCircularConstants } from './constants';
import { CircleContainer } from './ProgressSvg';
export const IndeterminateProgress = ({
  size
}) => {
  const {
    stroke,
    half,
    radius,
    dashArray,
    dashOffset
  } = progressCircularSVG({
    size
  });
  return React.createElement(IndeterminateContainer, null, React.createElement(IndeterminateSpinner, null, React.createElement(CircleClipper, null, React.createElement(LeftCircleContainer, {
    viewBox: `0 0 ${half * 2} ${half * 2}`,
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("circle", {
    cx: half,
    cy: half,
    r: radius,
    strokeDasharray: dashArray,
    strokeDashoffset: dashOffset,
    strokeWidth: stroke
  }))), React.createElement(GapPatch, null, React.createElement(CircleContainer, {
    viewBox: `0 0 ${half * 2} ${half * 2}`,
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("circle", {
    cx: half,
    cy: half,
    r: radius,
    strokeDasharray: dashArray,
    strokeDashoffset: dashOffset,
    strokeWidth: stroke - 0.6
  }))), React.createElement(CircleClipper, null, React.createElement(RightCircleContainer, {
    viewBox: `0 0 ${half * 2} ${half * 2}`,
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("circle", {
    cx: half,
    cy: half,
    r: radius,
    strokeDasharray: dashArray,
    strokeDashoffset: dashOffset,
    strokeWidth: stroke
  })))));
};
const containerRotate = keyframes(_t || (_t = _2`
  to {
    transform: rotate(360deg);
  }
`));

const spinnerRotateAnimations = () => [...Array(9)].map((_, i) => `${i * 12.5}% {transform: rotate(${i * 0.5 * progressCircularConstants.arcSize}deg)}`);

const spinnerKeyFrames = keyframes(_t2 || (_t2 = _2`
  ${0}
`), spinnerRotateAnimations().join('\n'));

const containerAnimation = () => {
  const duration = 360 * progressCircularConstants.arcTime / (progressCircularConstants.arcStartRotationInterval + (360 - progressCircularConstants.arcSize));
  return css(_t3 || (_t3 = _2`
    animation: ${0} ${0}ms linear infinite;
  `), containerRotate, duration);
};

const leftSpin = keyframes(_t4 || (_t4 = _2`
  from {
      transform: rotate(265deg);
    }
    50% {
      transform: rotate(130deg);
    }
    to {
      transform: rotate(265deg);
    }
`));
const rightSpin = keyframes(_t5 || (_t5 = _2`
from {
      transform: rotate(-265deg);
    }
    50% {
      transform: rotate(-130deg);
    }
    to {
      transform: rotate(-265deg);
    }
`));
const IndeterminateSpinner = styled.div.withConfig({
  displayName: "IndeterminateProgress__IndeterminateSpinner",
  componentId: "sc-1vb6yjx-0"
})(_t6 || (_t6 = _2`
  height: 100%;
  position: absolute;
  width: 100%;
`));
const IndeterminateContainer = styled.div.withConfig({
  displayName: "IndeterminateProgress__IndeterminateContainer",
  componentId: "sc-1vb6yjx-1"
})(_t7 || (_t7 = _2`
  font-size: 0;
  height: 100%;
  letter-spacing: 0;
  position: absolute;
  white-space: nowrap;
  width: 100%;

  ${0}

  ${0} {
    /* stylelint-disable */
    animation: ${0} ${0}ms
      ${0} infinite both;
    /* stylelint-enable */
  }
`), containerAnimation, IndeterminateSpinner, spinnerKeyFrames, progressCircularConstants.arcTime * 4, progressCircularConstants.timingFunction);
const LeftCircleContainer = styled(CircleContainer).withConfig({
  displayName: "IndeterminateProgress__LeftCircleContainer",
  componentId: "sc-1vb6yjx-2"
})(_t8 || (_t8 = _2`
  animation-name: ${0};
`), leftSpin);
const RightCircleContainer = styled(CircleContainer).withConfig({
  displayName: "IndeterminateProgress__RightCircleContainer",
  componentId: "sc-1vb6yjx-3"
})(_t9 || (_t9 = _2`
  animation-name: ${0};
  left: -100%;
`), rightSpin);
const CircleClipper = styled.div.withConfig({
  displayName: "IndeterminateProgress__CircleClipper",
  componentId: "sc-1vb6yjx-4"
})(_t10 || (_t10 = _2`
  display: inline-flex;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 50%;

  ${0} {
    animation-duration: ${0}ms;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-timing-function: ${0};
    width: 200%;
  }
`), CircleContainer, progressCircularConstants.arcTime, progressCircularConstants.timingFunction);
const GapPatch = styled.div.withConfig({
  displayName: "IndeterminateProgress__GapPatch",
  componentId: "sc-1vb6yjx-5"
})(_t11 || (_t11 = _2`
  box-sizing: border-box;
  height: 100%;
  left: 47.5%;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 5%;

  ${0} {
    left: -900%;
    transform: rotate(180deg);
    width: 2000%;
  }
`), CircleContainer);
//# sourceMappingURL=IndeterminateProgress.js.map