"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Before = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Text = require("../../../Text");

var _utils = require("../../../utils");

var _InputTextContext = require("./InputTextContext");

var _InputTextContent = require("./InputTextContent");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Measure = function Measure(_ref) {
  var children = _ref.children;

  var _useContext = (0, _react.useContext)(_InputTextContext.InputTextContext),
      setBeforeWidth = _useContext.setBeforeWidth;

  var ref = (0, _react.useCallback)(function (element) {
    var _measureElement = (0, _utils.measureElement)(element),
        width = _measureElement.width;

    setBeforeWidth(width);
  }, [setBeforeWidth]);
  return _react["default"].createElement("span", {
    ref: ref
  }, children);
};

var Before = function Before(_ref2) {
  var iconBefore = _ref2.iconBefore,
      before = _ref2.before;

  var iconBeforeWrapped = iconBefore && _react["default"].createElement(_InputTextContent.InputTextContent, {
    pl: "u2"
  }, iconBefore);

  var beforeStringWrapped = typeof before === 'string' && _react["default"].createElement(Measure, null, _react["default"].createElement(_InputTextContent.InputTextContent, {
    pl: "u2"
  }, _react["default"].createElement(_Text.Span, {
    fontSize: "small"
  }, before)));

  var beforeWrapped = before && typeof before !== 'string' && _react["default"].createElement(Measure, null, before);

  return iconBeforeWrapped || beforeStringWrapped || beforeWrapped || null;
};

exports.Before = Before;
//# sourceMappingURL=Before.js.map