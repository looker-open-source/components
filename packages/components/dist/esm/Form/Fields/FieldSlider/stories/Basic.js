function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { FieldSlider } from '../../FieldSlider';
export default function Basic(props) {
  return React.createElement(FieldSlider, _extends({
    label: "Basic",
    max: 5,
    min: 0
  }, props));
}
//# sourceMappingURL=Basic.js.map