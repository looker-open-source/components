"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useControlWarn = useControlWarn;

var _react = require("react");

var un = 'uncontrolled';
var cont = 'controlled';

function warnComponentControl(componentName, controllingProps) {
  var propsText = controllingProps.slice(0, -1).join(',') + ' and ' + controllingProps.slice(-1);
  var check = "Check the ".concat(propsText, " being passed in.");
  return function (changingToControlled) {
    var from = changingToControlled ? un : cont;
    var to = changingToControlled ? cont : un;
    var warning = "".concat(componentName, " is changing from ").concat(from, " to ").concat(to, ".       ").concat(componentName, " should not switch from ").concat(from, " to ").concat(to, " (or vice versa).       Decide between using a ").concat(cont, " or ").concat(un, " ").concat(componentName, " for the       lifetime of the component. ");
    console.warn("".concat(warning, " ").concat(check));
  };
}

function useControlWarn(_ref) {
  var isControlledCheck = _ref.isControlledCheck,
      name = _ref.name,
      controllingProps = _ref.controllingProps;

  var _useRef = (0, _react.useRef)(isControlledCheck()),
      isControlled = _useRef.current;

  var bgWarn = warnComponentControl(name, controllingProps);

  if (isControlled && !isControlledCheck()) {
    bgWarn(false);
  }

  if (!isControlled && isControlledCheck()) {
    bgWarn(true);
  }

  return isControlled;
}
//# sourceMappingURL=useControlWarn.js.map