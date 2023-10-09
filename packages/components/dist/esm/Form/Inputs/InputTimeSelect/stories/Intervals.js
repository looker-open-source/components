const _excluded = ["interval"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { InputTimeSelect } from '../';
import { Fieldset, SpaceVertical, Heading } from '../../../../';
export default function Intervals(props) {
  const {
      interval: _intervals
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(Fieldset, null, React.createElement(SpaceVertical, {
    gap: "u1"
  }, React.createElement(Heading, {
    as: "h4"
  }, "5-minute"), React.createElement(InputTimeSelect, _extends({
    interval: 5
  }, restProps))), React.createElement(SpaceVertical, {
    gap: "u1"
  }, React.createElement(Heading, {
    as: "h4"
  }, "10-minute"), React.createElement(InputTimeSelect, _extends({
    interval: 10
  }, restProps))), React.createElement(SpaceVertical, {
    gap: "u1"
  }, React.createElement(Heading, {
    as: "h4"
  }, "15-minute"), React.createElement(InputTimeSelect, _extends({
    interval: 15
  }, restProps))), React.createElement(SpaceVertical, {
    gap: "u1"
  }, React.createElement(Heading, {
    as: "h4"
  }, "60-minute"), React.createElement(InputTimeSelect, _extends({
    interval: 20
  }, restProps))), React.createElement(SpaceVertical, {
    gap: "u1"
  }, React.createElement(Heading, {
    as: "h4"
  }, "30-minute"), React.createElement(InputTimeSelect, _extends({
    interval: 30
  }, restProps))), React.createElement(SpaceVertical, {
    gap: "u1"
  }, React.createElement(Heading, {
    as: "h4"
  }, "60-minute"), React.createElement(InputTimeSelect, _extends({
    interval: 60
  }, restProps))));
}
//# sourceMappingURL=Intervals.js.map