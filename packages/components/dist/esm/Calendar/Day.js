const _excluded = ["className", "date", "locale", "onDraftSelect", "onSelect", "selected", "style"],
  _excluded2 = ["callbacks"];
let _ = t => t,
  _t,
  _t2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { getDate, isSameDay } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import pick from 'lodash/pick';
import { rippleHandlerKeys, rippleStyle, useRipple, useRippleHandlers } from '../Ripple';
import { formatDateString } from './utils';
export const HitArea = styled.div.withConfig({
  displayName: "Day__HitArea",
  componentId: "sc-14dncin-0"
})(_t || (_t = _`
  height: ${0};
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${0};
`), ({
  theme
}) => theme.space.u8, ({
  theme
}) => theme.space.u8);
export const Day = styled(_ref => {
  let {
      className,
      date,
      locale,
      onDraftSelect,
      onSelect,
      selected,
      style
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const dateString = formatDateString(date, 'EEE MMM dd, yyyy', locale);
  const today = isSameDay(date, new Date());
  const handleClick = () => {
    onSelect(date);
  };
  const handleHoverFocus = () => onDraftSelect(date);
  const _useRipple = useRipple({
      className,
      color: 'neutral',
      style
    }),
    {
      callbacks
    } = _useRipple,
    rippleProps = _objectWithoutProperties(_useRipple, _excluded2);
  const rippleHandlers = useRippleHandlers(callbacks, _objectSpread(_objectSpread({}, pick(props, rippleHandlerKeys)), {}, {
    onFocus: handleHoverFocus,
    onMouseEnter: handleHoverFocus
  }), props.disabled);
  return React.createElement("button", _extends({}, props, {
    "aria-current": today ? 'date' : 'false',
    "aria-label": dateString,
    "aria-selected": selected,
    onClick: handleClick,
    title: dateString,
    type: "button"
  }, rippleProps, rippleHandlers), React.createElement(HitArea, null), getDate(date));
}).withConfig({
  displayName: "Day",
  componentId: "sc-14dncin-1"
})(_t2 || (_t2 = _`
  ${0}
  background-color: transparent;
  border: none;
  border-radius: ${0};
  box-sizing: border-box;
  color: ${0};
  font-family: ${0};
  font-size: ${0};
  height: ${0};
  line-height: ${0};
  margin: 0 ${0};
  outline: none;
  position: relative;
  width: ${0};
  &[aria-current='date'] {
    border: 1px solid ${0};
    color: ${0};
  }
  &[aria-selected='true'] {
    background: ${0};
    border: 1px solid ${0};
    color: ${0};
  }
`), rippleStyle, ({
  theme
}) => theme.space.u5, ({
  theme
}) => theme.colors.text3, ({
  theme
}) => theme.fonts.body, ({
  theme
}) => theme.fontSizes.xsmall, ({
  theme
}) => theme.space.u7, ({
  theme
}) => theme.space.u4, ({
  theme
}) => theme.space.u05, ({
  theme
}) => theme.space.u7, ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.colors.background);
//# sourceMappingURL=Day.js.map