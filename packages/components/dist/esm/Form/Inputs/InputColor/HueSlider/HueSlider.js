let _ = t => t,
  _t,
  _t2;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useMouseDragPosition, usePreviousValue } from '../../../../utils';
import { simpleHsvToHex } from '../utils';
import { Handle } from '../Handle';
export const HueSliderLayout = ({
  className,
  hsv,
  setHsv,
  width
}) => {
  var _sliderRef$current;
  const handlePosition = hsv.h / 360 * width;
  const sliderRef = useRef(null);
  const sliderLeft = ((_sliderRef$current = sliderRef.current) === null || _sliderRef$current === void 0 ? void 0 : _sliderRef$current.getBoundingClientRect().left) || 0;
  const handleSliderClick = event => {
    const clickEventX = event.clientX;
    const newHue = (clickEventX - sliderLeft) / width * 360;
    setHsv(_objectSpread(_objectSpread({}, hsv), {}, {
      h: newHue
    }));
  };
  const {
    isMouseDown,
    mousePos
  } = useMouseDragPosition(sliderRef.current);
  const previousIsMouseDown = usePreviousValue(isMouseDown);
  const handleHandleDrag = () => {
    let newHue = (mousePos.x - sliderLeft) / width * 360;
    if (newHue > 360) {
      newHue = 360;
    } else if (newHue < 0) {
      newHue = 0;
    }
    setHsv(_objectSpread(_objectSpread({}, hsv), {}, {
      h: newHue
    }));
  };
  useEffect(() => {
    if (isMouseDown && previousIsMouseDown) {
      handleHandleDrag();
    }
  }, [mousePos]);
  const sliderHandleColor = simpleHsvToHex(_objectSpread(_objectSpread({}, hsv), {}, {
    s: 1,
    v: 1
  }));
  return React.createElement(HueSliderTrack, {
    className: className,
    isMouseDown: isMouseDown,
    onMouseDown: handleSliderClick,
    ref: sliderRef,
    width: width
  }, React.createElement(Handle, {
    color: sliderHandleColor,
    isMouseDown: isMouseDown,
    x: handlePosition
  }));
};
const HueSliderTrack = styled.div.withConfig({
  displayName: "HueSlider__HueSliderTrack",
  componentId: "sc-10igbq6-0"
})(_t || (_t = _`
  background: linear-gradient(
    90deg,
    #f00 0,
    #ff0 17%,
    #0f0 33%,
    #0ff 50%,
    #00f 67%,
    #f0f 83%,
    #f00
  );

  border-radius: ${0};
  cursor: ${0};
  height: ${0};
  width: ${0}px;
`), ({
  theme
}) => theme.radii.large, ({
  isMouseDown
}) => isMouseDown ? 'grabbing' : 'default', ({
  theme
}) => theme.space.u3, ({
  width
}) => width);
export const HueSlider = styled(HueSliderLayout).withConfig({
  displayName: "HueSlider",
  componentId: "sc-10igbq6-1"
})(_t2 || (_t2 = _``));
//# sourceMappingURL=HueSlider.js.map