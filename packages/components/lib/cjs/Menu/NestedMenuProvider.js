"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NestedMenuProvider = exports.NestedMenuContext = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var nestedMenuContext = {
  change: function change() {
    return undefined;
  },
  delayChange: function delayChange() {
    return undefined;
  },
  value: '',
  waitChange: function waitChange() {
    return undefined;
  }
};
var NestedMenuContext = (0, _react.createContext)(nestedMenuContext);
exports.NestedMenuContext = NestedMenuContext;

var NestedMenuProvider = function NestedMenuProvider(_ref) {
  var children = _ref.children,
      closeParentMenu = _ref.closeParentMenu;
  var delayedStateProps = (0, _utils.useDelayedState)('');

  var _useContext = (0, _react.useContext)(NestedMenuContext),
      closeGrandparentMenu = _useContext.closeParentMenu;

  var wrappedCloseParentMenu = (0, _react.useCallback)(function () {
    closeGrandparentMenu === null || closeGrandparentMenu === void 0 ? void 0 : closeGrandparentMenu();
    closeParentMenu === null || closeParentMenu === void 0 ? void 0 : closeParentMenu();
  }, [closeGrandparentMenu, closeParentMenu]);
  return _react["default"].createElement(NestedMenuContext.Provider, {
    value: _objectSpread(_objectSpread({}, delayedStateProps), {}, {
      closeParentMenu: wrappedCloseParentMenu
    })
  }, children);
};

exports.NestedMenuProvider = NestedMenuProvider;
//# sourceMappingURL=NestedMenuProvider.js.map