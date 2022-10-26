"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAddOptionToContext = useAddOptionToContext;

var _react = require("react");

function useAddOptionToContext(context, value, label, scrollIntoView) {
  var _useContext = (0, _react.useContext)(context),
      optionsRef = _useContext.optionsRef,
      windowingPropRef = _useContext.windowingPropRef;

  var indexRef = (0, _react.useRef)(-1);
  (0, _react.useEffect)(function () {
    var option = {
      label: label,
      scrollIntoView: scrollIntoView,
      value: value
    };
    var optionsRefCurrent = optionsRef && optionsRef.current;
    var windowing = windowingPropRef && windowingPropRef.current;

    if (optionsRefCurrent && !windowing) {
      if (indexRef.current > -1) {
        optionsRefCurrent.splice(indexRef.current, 0, option);
      } else {
        optionsRefCurrent.push(option);
      }
    }

    return function () {
      if (optionsRefCurrent && !windowing) {
        var index = optionsRefCurrent.indexOf(option);
        indexRef.current = index;
        optionsRefCurrent.splice(index, 1);
      }
    };
  }, [value, label, optionsRef, scrollIntoView, windowingPropRef]);
}
//# sourceMappingURL=useAddOptionToContext.js.map