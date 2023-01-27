import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["interval"];

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