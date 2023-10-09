"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTrapStack = void 0;
var _react = require("react");
var _useID = require("./useID");
var _useCallbackRef3 = require("./useCallbackRef");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var useTrapStack = function useTrapStack(_ref) {
  var context = _ref.context,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    ref = _ref.ref,
    options = _ref.options;
  var id = (0, _useID.useID)();
  var _useCallbackRef = (0, _useCallbackRef3.useCallbackRef)(ref),
    _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
    element = _useCallbackRef2[0],
    callbackRef = _useCallbackRef2[1];
  var _useContext = (0, _react.useContext)(context),
    addTrap = _useContext.addTrap,
    removeTrap = _useContext.removeTrap,
    disableCurrentTrap = _useContext.disableCurrentTrap,
    enableCurrentTrap = _useContext.enableCurrentTrap;
  (0, _react.useEffect)(function () {
    if (!addTrap) {
      console.warn("".concat(context.displayName, " is missing. Please wrap all @looker/components in a ComponentsProvider."));
    }
  }, [addTrap, context]);
  (0, _react.useEffect)(function () {
    if (element) {
      if (disabled) {
        disableCurrentTrap === null || disableCurrentTrap === void 0 ? void 0 : disableCurrentTrap();
      } else {
        addTrap === null || addTrap === void 0 ? void 0 : addTrap(id, {
          element: element,
          options: options
        });
      }
    }
    return function () {
      if (disabled) {
        enableCurrentTrap === null || enableCurrentTrap === void 0 ? void 0 : enableCurrentTrap();
      } else {
        removeTrap === null || removeTrap === void 0 ? void 0 : removeTrap(id);
      }
    };
  }, [disabled, id, element, options, addTrap, removeTrap, disableCurrentTrap, enableCurrentTrap]);
  return [element, callbackRef];
};
exports.useTrapStack = useTrapStack;
//# sourceMappingURL=useTrapStack.js.map