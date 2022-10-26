"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplaceText = void 0;

var _react = _interopRequireWildcard(require("react"));

var _isRegExp = _interopRequireDefault(require("lodash/isRegExp"));

var _escapeRegExp = _interopRequireDefault(require("lodash/escapeRegExp"));

var _isString = _interopRequireDefault(require("lodash/isString"));

var _flatten = _interopRequireDefault(require("lodash/flatten"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function replaceString(str, match, replace) {
  var curCharStart = 0;
  var curCharLen = 0;
  var re = match;

  if (!(0, _isRegExp["default"])(re)) {
    re = new RegExp('(' + (0, _escapeRegExp["default"])(re) + ')', 'gi');
  }

  var stringArr = str.split(re);
  return stringArr.map(function (stringItem, i) {
    if (i % 2 === 1) {
      curCharLen = stringItem.length;
      curCharStart += stringArr[i - 1].length;
      curCharStart += curCharLen;
      return replace(stringItem, i, curCharStart);
    }

    return stringItem;
  });
}

var ReplaceText = function ReplaceText(_ref) {
  var children = _ref.children,
      match = _ref.match,
      replace = _ref.replace;
  var content = (0, _react.useMemo)(function () {
    return (0, _flatten["default"])(_react.Children.map(children, function (child) {
      return (0, _isString["default"])(child) ? replaceString(child, match, replace) : child;
    }));
  }, [children, match, replace]);
  return _react["default"].createElement(_react["default"].Fragment, null, content);
};

exports.ReplaceText = ReplaceText;
//# sourceMappingURL=ReplaceText.js.map