"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOptionEvents = useOptionEvents;
var _xorWith = _interopRequireDefault(require("lodash/xorWith"));
var _react = require("react");
var _utils = require("../../../../utils");
var _state = require("./state");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function useOptionEvents(props, context) {
  var label = props.label,
    payload = props.payload,
    value = props.value,
    onClick = props.onClick,
    onMouseEnter = props.onMouseEnter;
  var option = {
    label: label,
    payload: payload,
    value: value
  };
  var _useContext = (0, _react.useContext)(context),
    data = _useContext.data,
    onChange = _useContext.onChange,
    transition = _useContext.transition,
    closeOnSelectPropRef = _useContext.closeOnSelectPropRef,
    isScrollingRef = _useContext.isScrollingRef;
  var _ref = data,
    options = _ref.options;
  function handleClick() {
    if (onChange) {
      if (options) {
        onChange((0, _xorWith["default"])(options, [option], function (o1, o2) {
          return o1.value === o2.value;
        }));
      } else {
        onChange(option);
      }
    }
    transition && transition(_state.ComboboxActionType.SELECT_WITH_CLICK, {
      option: option
    });
    if (closeOnSelectPropRef && closeOnSelectPropRef.current) {
      transition && transition(_state.ComboboxActionType.ESCAPE);
    }
  }
  var handleMouseEnter = function handleMouseEnter() {
    requestAnimationFrame(function () {
      if (isScrollingRef !== null && isScrollingRef !== void 0 && isScrollingRef.current) return;
      transition && transition(_state.ComboboxActionType.NAVIGATE, {
        option: option
      });
    });
  };
  return {
    onClick: (0, _utils.useWrapEvent)(handleClick, onClick),
    onMouseEnter: (0, _utils.useWrapEvent)(handleMouseEnter, onMouseEnter)
  };
}
//# sourceMappingURL=useOptionEvents.js.map