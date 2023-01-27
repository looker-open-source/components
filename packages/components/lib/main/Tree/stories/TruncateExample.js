"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TruncateExample;
var _react = _interopRequireDefault(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _ = require("..");
var _Text = require("../../Text");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TruncateExample() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Text.Heading, null, "Default Text Wrapping Layout"), _react["default"].createElement(_.TreeCollection, null, _react["default"].createElement(_.Tree, {
    border: true,
    label: "A very long label that wraps to a second line. Both the label and the tree item will wrap to two or more lines because there is just too much text.",
    icon: _react["default"].createElement(MaterialIcons.TableChart, null),
    defaultOpen: true
  }, _react["default"].createElement(_.TreeItem, {
    icon: _react["default"].createElement(MaterialIcons.Tag, null)
  }, "Cheese is a dairy product, derived from milk and produced in wide ranges of flavours, textures and forms by coagulation of the milk protein casein. It comprises proteins and fat from milk, usually the milk of cows, buffalo, goats, or sheep."))), _react["default"].createElement(_Text.Heading, null, "Truncated Text"), _react["default"].createElement(_.TreeCollection, null, _react["default"].createElement(_.Tree, {
    border: true,
    label: "A very label that wraps to a second line. Sometimes you don't want to take up extra vertical space, and instead it will cut off the text.",
    truncate: true,
    icon: _react["default"].createElement(MaterialIcons.TableChart, null),
    defaultOpen: true
  }, _react["default"].createElement(_.TreeItem, {
    icon: _react["default"].createElement(MaterialIcons.Tag, null),
    truncate: true
  }, "Hover over me for a tooltip of the full content. Cheese is a dairy product, derived from milk and produced in wide ranges of flavours, textures and forms by coagulation of the milk protein casein. It comprises proteins and fat from milk, usually the milk of cows, buffalo, goats, or sheep."))));
}
//# sourceMappingURL=TruncateExample.js.map