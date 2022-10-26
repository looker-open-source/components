"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Popover = require("../Popover");

var _utils = require("../utils");

var _MenuList = require("./MenuList");

var _excluded = ["children", "content", "id", "listRef"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var partitionMenuProps = function partitionMenuProps(props, popoverPropKeys) {
  var allProps = _objectSpread({}, props);

  var popoverProps = {};
  popoverPropKeys.forEach(function (key) {
    if (props[key] !== undefined) {
      popoverProps[key] = props[key];
    }

    delete allProps[key];
  });
  var listProps = allProps;
  return [popoverProps, listProps];
};

var Menu = (0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      content = _ref.content,
      propsID = _ref.id,
      listRef = _ref.listRef,
      restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _partitionMenuProps = partitionMenuProps(restProps, _Popover.popoverPropKeys),
      _partitionMenuProps2 = (0, _slicedToArray2["default"])(_partitionMenuProps, 2),
      popoverProps = _partitionMenuProps2[0],
      listProps = _partitionMenuProps2[1];

  var id = (0, _utils.useID)(propsID);

  var list = content && _react["default"].createElement(_MenuList.MenuList, (0, _extends2["default"])({
    id: id
  }, listProps, {
    ref: listRef,
    "data-autofocus": "true"
  }), content);

  children = (0, _react.cloneElement)(children, {
    'aria-controls': id
  });
  return _react["default"].createElement(_Popover.Popover, (0, _extends2["default"])({
    content: list,
    ref: ref
  }, popoverProps), children);
});
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map