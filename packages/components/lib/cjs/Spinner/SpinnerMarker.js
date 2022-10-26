"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpinnerMarker = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var markerStyle = function markerStyle(props) {
  var markerIndex = props.markerIndex,
      markerRadius = props.markerRadius,
      markers = props.markers,
      speed = props.speed;
  var delay = markerIndex * speed / markers;
  var rotateAngle = 360 / markers * markerIndex;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    animation: ", " ", "ms linear ", "ms infinite;\n    border-radius: ", ";\n    transform: rotate(", "deg) translate(0, -160%);\n  "])), _designTokens.quarterFade, speed, delay, markerRadius && "".concat(markerRadius, "px"), rotateAngle);
};

var SpinnerMarker = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "SpinnerMarker",
  componentId: "sc-ddzia7-0"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  height: 20%;\n  left: 48%;\n  opacity: 0.25;\n  position: absolute;\n  top: 40%;\n  width: 6%;\n"])), _designTokens.color, markerStyle);

exports.SpinnerMarker = SpinnerMarker;
//# sourceMappingURL=SpinnerMarker.js.map