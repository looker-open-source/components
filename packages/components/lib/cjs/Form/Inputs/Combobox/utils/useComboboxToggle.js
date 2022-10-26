"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIsVisible = void 0;
exports.useComboboxToggle = useComboboxToggle;

var _react = require("react");

var _state = require("../utils/state");

var visibleStates = [_state.ComboboxState.SUGGESTING, _state.ComboboxState.NAVIGATING, _state.ComboboxState.INTERACTING];

var getIsVisible = function getIsVisible(state) {
  return visibleStates.includes(state);
};

exports.getIsVisible = getIsVisible;

function useComboboxToggle(state, option, onOpen, onClose) {
  var isVisible = getIsVisible(state);
  var isVisibleRef = (0, _react.useRef)(isVisible);
  (0, _react.useEffect)(function () {
    if (isVisible && !isVisibleRef.current) {
      onOpen && onOpen(option);
      isVisibleRef.current = true;
    } else if (!isVisible && isVisibleRef.current) {
      onClose && onClose(option);
      isVisibleRef.current = false;
    }
  }, [isVisible, isVisibleRef, onOpen, onClose, option]);
  return isVisible;
}
//# sourceMappingURL=useComboboxToggle.js.map