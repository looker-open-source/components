"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVerticalSpace = void 0;
var _react = require("react");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var topPlacements = ['top', 'top-start', 'top-end', 'right-end', 'left-end'];
var bottomPlacements = ['bottom', 'bottom-start', 'bottom-end', 'right-start', 'left-start'];
var sidePlacements = ['left-start', 'left-end', 'left', 'right-start', 'right-end', 'right'];
var useVerticalSpace = function useVerticalSpace(element, pin, placement, isOpen, popperStyle) {
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    spaceTop = _useState2[0],
    setSpaceTop = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    spaceBottom = _useState4[0],
    setSpaceBottom = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    maxForPlacement = _useState6[0],
    setMaxForPlacement = _useState6[1];
  var placementIsBottom = placement && bottomPlacements.includes(placement);
  var placementIsTop = placement && topPlacements.includes(placement);
  var placementIsSide = placement && sidePlacements.includes(placement);
  (0, _react.useEffect)(function () {
    var getVerticalSpace = function getVerticalSpace() {
      if (element) {
        if (placementIsBottom || placementIsTop) {
          var _element$getBoundingC = element.getBoundingClientRect(),
            top = _element$getBoundingC.top,
            bottom = _element$getBoundingC.bottom;
          if (!pin || placementIsTop) {
            var _spaceTop = placementIsSide ? bottom : top;
            setSpaceTop(_spaceTop);
          } else if (pin) {
            setSpaceTop(0);
          }
          if (!pin || placementIsBottom) {
            var sideToUse = placementIsSide ? top : bottom;
            setSpaceBottom(window.innerHeight - sideToUse);
          } else if (pin) {
            setSpaceBottom(0);
          }
        } else {
          setSpaceTop(window.innerHeight);
        }
      }
    };
    if (isOpen) {
      window.addEventListener('resize', getVerticalSpace);
      getVerticalSpace();
    }
    return function () {
      window.removeEventListener('resize', getVerticalSpace);
    };
  }, [element, pin, placementIsBottom, placementIsTop, placementIsSide, isOpen, popperStyle.transform]);
  (0, _react.useEffect)(function () {
    var t = window.setTimeout(function () {
      if (isOpen) {
        setMaxForPlacement(placementIsBottom ? spaceBottom : spaceTop);
      }
    }, 0);
    return function () {
      window.clearTimeout(t);
    };
  }, [placementIsBottom, spaceBottom, spaceTop, isOpen]);
  var totalMax = Math.max(spaceTop, spaceBottom);
  var max = maxForPlacement || totalMax;
  var windowHeight = (typeof window === "undefined" ? "undefined" : _typeof(window)) !== "undefined" ? window.innerHeight : 50;
  return max > 50 ? max : windowHeight;
};
exports.useVerticalSpace = useVerticalSpace;
//# sourceMappingURL=useVerticalSpace.js.map