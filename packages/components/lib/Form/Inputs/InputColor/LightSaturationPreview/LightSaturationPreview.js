import _defineProperty from "@babel/runtime/helpers/defineProperty";

let _ = t => t,
    _t,
    _t2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useMouseDragPosition, usePreviousValue } from '../../../../utils';
import { simpleHsvToHex } from '../utils';
import { Handle2d } from '../Handle';

const LightSaturationPreviewLayout = ({
  className,
  hsv,
  setHsv,
  width: previewWidth
}) => {
  var _previewRef$current, _previewRef$current2;

  const previewHeight = previewWidth * 0.75;
  const handleX = hsv.s * previewWidth;
  const handleY = previewHeight - hsv.v * previewHeight;
  const previewRef = useRef(null);
  const previewLeft = ((_previewRef$current = previewRef.current) === null || _previewRef$current === void 0 ? void 0 : _previewRef$current.getBoundingClientRect().left) || 0;
  const previewTop = ((_previewRef$current2 = previewRef.current) === null || _previewRef$current2 === void 0 ? void 0 : _previewRef$current2.getBoundingClientRect().top) || 0;

  const handleMouseDown = event => {
    const clickEventX = event.clientX;
    const clickEventY = event.clientY;
    const newSaturation = (clickEventX - previewLeft) / previewWidth;
    const newValue = (previewHeight - (clickEventY - previewTop)) / previewHeight;
    setHsv(_objectSpread(_objectSpread({}, hsv), {}, {
      s: newSaturation,
      v: newValue
    }));
  };

  const {
    isMouseDown,
    mousePos
  } = useMouseDragPosition(previewRef.current);
  const previousIsMouseDown = usePreviousValue(isMouseDown);

  const handleHandleDrag = () => {
    let newSaturation = (mousePos.x - previewLeft) / previewWidth;

    if (newSaturation > 1) {
      newSaturation = 1;
    } else if (newSaturation < 0) {
      newSaturation = 0;
    }

    let newValue = (previewHeight - (mousePos.y - previewTop)) / previewHeight;

    if (newValue > 1) {
      newValue = 1;
    } else if (newValue < 0) {
      newValue = 0;
    }

    setHsv(_objectSpread(_objectSpread({}, hsv), {}, {
      s: newSaturation,
      v: newValue
    }));
  };

  useEffect(() => {
    if (isMouseDown && previousIsMouseDown) {
      handleHandleDrag();
    }
  }, [mousePos]);
  const backgroundColor = simpleHsvToHex({
    h: hsv.h,
    s: 1,
    v: 1
  });
  const color = simpleHsvToHex(_objectSpread({}, hsv));
  return React.createElement(LightSaturationPreviewContainer, {
    backgroundColor: backgroundColor,
    className: className,
    isMouseDown: isMouseDown,
    onMouseDown: handleMouseDown,
    height: previewHeight,
    ref: previewRef,
    width: previewWidth,
    "data-testid": "light-saturation-preview"
  }, React.createElement(Handle2d, {
    color: color,
    isMouseDown: isMouseDown,
    x: handleX,
    y: handleY
  }));
};

const LightSaturationPreviewContainer = styled.div.attrs(({
  backgroundColor
}) => ({
  style: {
    backgroundColor
  }
})).withConfig({
  displayName: "LightSaturationPreview__LightSaturationPreviewContainer",
  componentId: "sc-crmpxu-0"
})(_t || (_t = _`
  background-image: linear-gradient(0deg, #000, transparent),
    linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0));
  border-radius: ${0};
  cursor: ${0};
  height: ${0}px;
  width: ${0}px;
`), ({
  theme
}) => theme.radii.medium, ({
  isMouseDown
}) => isMouseDown ? 'grabbing' : 'default', ({
  height
}) => height, ({
  width
}) => width);
export const LightSaturationPreview = styled(LightSaturationPreviewLayout).withConfig({
  displayName: "LightSaturationPreview",
  componentId: "sc-crmpxu-1"
})(_t2 || (_t2 = _``));
//# sourceMappingURL=LightSaturationPreview.js.map