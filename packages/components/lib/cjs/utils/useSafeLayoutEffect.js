"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSafeLayoutEffect = exports.SafeSSRProvider = exports.SafeSSRContext = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SafeSSRContext = (0, _react.createContext)(false);
exports.SafeSSRContext = SafeSSRContext;

var SafeSSRProvider = function SafeSSRProvider(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(SafeSSRContext.Provider, {
    value: true
  }, children);
};

exports.SafeSSRProvider = SafeSSRProvider;

var useSafeLayoutEffect = function useSafeLayoutEffect() {
  var value = (0, _react.useContext)(SafeSSRContext);
  var isSSR = value || typeof window === 'undefined';
  var useLayoutEffect = isSSR ? _react.useEffect : _react.useLayoutEffect;
  return useLayoutEffect.apply(void 0, arguments);
};

exports.useSafeLayoutEffect = useSafeLayoutEffect;
//# sourceMappingURL=useSafeLayoutEffect.js.map