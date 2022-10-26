"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongLabels = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@styled-icons/material");

var _materialOutlined = require("@styled-icons/material-outlined");

var _ = require("../..");

var LongLabels = function LongLabels() {
  return _react["default"].createElement(_.TreeCollection, null, _react["default"].createElement(_.Tree, {
    label: _react["default"].createElement("strong", null, "Tree with long labels"),
    icon: _react["default"].createElement(_materialOutlined.Explore, null),
    defaultOpen: true
  }, _react["default"].createElement(_.Tree, {
    label: _react["default"].createElement("strong", null, "Wrapping next"),
    icon: _react["default"].createElement(_materialOutlined.Visibility, null),
    defaultOpen: true
  }, _react["default"].createElement(_.Tree, {
    label: _react["default"].createElement("strong", null, "Orders Lorem ipsum dolor sit amet, consectetur adipiscing elit. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."),
    icon: _react["default"].createElement(_materialOutlined.TableChart, null),
    defaultOpen: true
  }, _react["default"].createElement(_.TreeItem, {
    icon: _react["default"].createElement(_material.Info, null)
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."), _react["default"].createElement(_.TreeItem, {
    icon: _react["default"].createElement(_material.Info, null)
  }, "Nam sit amet imperdiet lacus, eget ullamcorper nunc. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."), _react["default"].createElement(_.TreeItem, {
    icon: _react["default"].createElement(_material.Info, null),
    detail: {
      content: _react["default"].createElement(_.IconButton, {
        icon: _react["default"].createElement(_material.Info, null),
        label: "Get Info",
        onClick: function onClick() {
          return alert("You've got info!");
        }
      }),
      options: {
        accessory: true
      }
    }
  }, "Nunc convallis justo sed turpis interdum rutrum ac a neque. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."))), _react["default"].createElement(_.Tree, {
    label: _react["default"].createElement("strong", null, "Truncated text"),
    icon: _react["default"].createElement(_materialOutlined.Visibility, null),
    defaultOpen: true
  }, _react["default"].createElement(_.Tree, {
    label: _react["default"].createElement("strong", null, "Users Lorem ipsum dolor sit amet, consectetur adipiscing elit. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."),
    icon: _react["default"].createElement(_materialOutlined.TableChart, null),
    truncate: true,
    defaultOpen: true
  }, _react["default"].createElement(_.TreeItem, {
    icon: _react["default"].createElement(_material.Info, null),
    truncate: true
  }, "Very long text renders a tooltip. Vivamus vitae mauris et erat sagittis tempus. Mauris euismod aliquet arcu ut viverra. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."), _react["default"].createElement(_.TreeItem, {
    icon: _react["default"].createElement(_material.Info, null),
    truncate: true,
    detail: {
      content: _react["default"].createElement(_.IconButton, {
        icon: _react["default"].createElement(_material.Info, null),
        label: "Get Info",
        onClick: function onClick() {
          return alert("You've got info!");
        }
      }),
      options: {
        accessory: true
      }
    }
  }, "Quisque euismod risus quis sapien luctus rutrum. Cras a dui luctus, dictum elit vel, pellentesque nisl. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."), _react["default"].createElement(_.TreeItem, {
    icon: _react["default"].createElement(_material.Info, null),
    truncate: true
  }, "This short text should not render a tooltip")))));
};

exports.LongLabels = LongLabels;
//# sourceMappingURL=LongLabels.js.map