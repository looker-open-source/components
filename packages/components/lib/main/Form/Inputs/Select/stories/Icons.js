"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Icons;
var _react = _interopRequireDefault(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _ = require("..");
var _Layout = require("../../../../Layout");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Icons() {
  return _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_.Select, {
    placeholder: "Select a visualization",
    options: [{
      icon: _react["default"].createElement(MaterialIcons.BarChart, null),
      label: 'Column',
      value: 'column'
    }, {
      icon: _react["default"].createElement(MaterialIcons.ShowChart, null),
      label: 'Line',
      value: 'line'
    }, {
      icon: _react["default"].createElement(MaterialIcons.Map, null),
      label: 'Map',
      value: 'map'
    }, {
      icon: _react["default"].createElement(MaterialIcons.PieChart, null),
      label: 'Pie',
      value: 'pie'
    }, {
      icon: _react["default"].createElement(MaterialIcons.TableChart, null),
      label: 'Table',
      value: 'table'
    }]
  }), _react["default"].createElement(_.Select, {
    placeholder: "Custom Icons",
    options: [{
      icon: _react["default"].createElement("svg", {
        viewBox: "0 0 24 24",
        width: "20px",
        height: "20px",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react["default"].createElement("path", {
        d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",
        fill: "#7FFFD4"
      })),
      label: 'Aqua',
      value: 'Aqua'
    }, {
      icon: _react["default"].createElement("svg", {
        viewBox: "0 0 24 24",
        width: "20px",
        height: "20px",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react["default"].createElement("path", {
        d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",
        fill: "#ff00e6"
      })),
      label: 'Pink',
      value: 'Pink'
    }]
  }));
}
//# sourceMappingURL=Icons.js.map