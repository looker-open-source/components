"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InsideComponents;
var _react = _interopRequireDefault(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function InsideComponents() {
  return _react["default"].createElement(_.SpaceVertical, null, _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Button, {
    size: "large",
    iconAfter: _react["default"].createElement(MaterialIcons.Refresh, null)
  }, "Add"), _react["default"].createElement(_.IconButton, {
    size: "large",
    icon: _react["default"].createElement(MaterialIcons.FilterList, null),
    label: "Filter"
  })), _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Button, {
    iconAfter: _react["default"].createElement(MaterialIcons.Refresh, null)
  }, "Add"), _react["default"].createElement(_.IconButton, {
    size: "medium",
    icon: _react["default"].createElement(MaterialIcons.FilterList, null),
    label: "Filter"
  })), _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Button, {
    size: "small",
    iconAfter: _react["default"].createElement(MaterialIcons.Refresh, null)
  }, "Add"), _react["default"].createElement(_.IconButton, {
    size: "small",
    icon: _react["default"].createElement(MaterialIcons.FilterList, null),
    label: "Filter"
  })), _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Button, {
    size: "xsmall",
    iconAfter: _react["default"].createElement(MaterialIcons.Refresh, null)
  }, "Add"), _react["default"].createElement(_.IconButton, {
    size: "xsmall",
    icon: _react["default"].createElement(MaterialIcons.FilterList, null),
    label: "Filter"
  })), _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Button, {
    size: "xxsmall",
    iconAfter: _react["default"].createElement(MaterialIcons.Refresh, null)
  }, "Add"), _react["default"].createElement(_.IconButton, {
    size: "xxsmall",
    icon: _react["default"].createElement(MaterialIcons.FilterList, null),
    label: "Filter"
  })));
}
//# sourceMappingURL=InsideComponents.js.map