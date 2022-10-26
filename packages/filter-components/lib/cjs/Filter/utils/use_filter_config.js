"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFilterConfig = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("react");

var _ = require(".");

var _excluded = ["skipFilterConfigCheck"];

var getSkipFallback = function getSkipFallback(_ref) {
  var skipFilterConfigCheck = _ref.skipFilterConfigCheck,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return skipFilterConfigCheck !== null && skipFilterConfigCheck !== void 0 ? skipFilterConfigCheck : (0, _.canRenderFilter)(props);
};

var useFilterConfig = function useFilterConfig(props) {
  var _useState = (0, _react.useState)(getSkipFallback(props)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      skipFallback = _useState2[0],
      setSkipFallback = _useState2[1];

  var skipFallbackConfigCheckRef = (0, _react.useRef)(props.skipFilterConfigCheck);

  if (props.skipFilterConfigCheck !== skipFallbackConfigCheckRef.current) {
    skipFallbackConfigCheckRef.current = props.skipFilterConfigCheck;
    setSkipFallback(getSkipFallback(props));
  }

  var uiConfig = skipFallback ? props.config || {} : (0, _.getFallbackFilterConfig)(props.config);
  return {
    skipFilterConfigCheck: skipFallback,
    uiConfig: uiConfig
  };
};

exports.useFilterConfig = useFilterConfig;
//# sourceMappingURL=use_filter_config.js.map