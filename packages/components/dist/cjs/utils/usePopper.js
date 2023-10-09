"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopper = usePopper;
var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));
var _concat = _interopRequireDefault(require("lodash/concat"));
var _merge = _interopRequireDefault(require("lodash/merge"));
var _react = require("react");
var _core = require("@popperjs/core");
var _getCurrentNode = require("./getCurrentNode");
var _useCallbackRef3 = require("./useCallbackRef");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function usePopper(_ref) {
  var anchor = _ref.anchor,
    target = _ref.target,
    options = _ref.options;
  var _useState = (0, _react.useState)({
      popper: {
        left: '0',
        margin: '0',
        position: 'fixed',
        top: '-9999px'
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    styles = _useState2[0],
    setStyles = _useState2[1];
  var _useState3 = (0, _react.useState)(options.placement),
    _useState4 = _slicedToArray(_useState3, 2),
    truePlacement = _useState4[0],
    setTruePlacement = _useState4[1];
  var popperInstanceRef = (0, _react.useRef)();
  var _useCallbackRef = (0, _useCallbackRef3.useCallbackRef)(),
    _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
    targetElement = _useCallbackRef2[0],
    targetRef = _useCallbackRef2[1];
  var mergedOptions = (0, _react.useMemo)(function () {
    return (0, _merge["default"])(options, {
      modifiers: (0, _concat["default"])(options && options.modifiers, [{
        enabled: false,
        name: 'applyStyles'
      }, {
        enabled: true,
        fn: function fn(_ref2) {
          var placement = _ref2.state.placement;
          return setTruePlacement(placement);
        },
        name: 'update-placement',
        phase: 'afterWrite'
      }, {
        enabled: true,
        fn: function fn(_ref3) {
          var styles = _ref3.state.styles;
          return setStyles((0, _cloneDeep["default"])(styles));
        },
        name: 'update-styles',
        phase: 'afterWrite'
      }, {
        enabled: true,
        name: 'preventOverflow',
        options: {
          boundary: 'viewport',
          padding: 8
        }
      }]),
      strategy: 'fixed'
    });
  }, [options]);
  (0, _react.useEffect)(function () {
    var anchorNode = (0, _getCurrentNode.getCurrentNode)(anchor);
    var targetNode = target ? (0, _getCurrentNode.getCurrentNode)(target) : targetElement;
    if (anchorNode && targetNode) {
      popperInstanceRef.current = (0, _core.createPopper)(anchorNode, targetNode, mergedOptions);
    }
    return function () {
      popperInstanceRef.current && popperInstanceRef.current.destroy();
    };
  }, [anchor, target, targetElement, mergedOptions]);
  return {
    placement: truePlacement,
    popperInstanceRef: popperInstanceRef,
    style: styles.popper,
    styleArrow: styles.arrow,
    targetRef: targetRef
  };
}
//# sourceMappingURL=usePopper.js.map