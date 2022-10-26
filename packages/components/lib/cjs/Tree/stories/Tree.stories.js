"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Border = exports.Basic = exports.Accessory = void 0;
Object.defineProperty(exports, "BorderRadiusOverride", {
  enumerable: true,
  get: function get() {
    return _BorderRadius.BorderRadiusOverride;
  }
});
Object.defineProperty(exports, "ColorfulTree", {
  enumerable: true,
  get: function get() {
    return _ColorfulTree.ColorfulTree;
  }
});
exports.Controlled = void 0;
Object.defineProperty(exports, "Density", {
  enumerable: true,
  get: function get() {
    return _Density.Density;
  }
});
Object.defineProperty(exports, "DisabledAndSelected", {
  enumerable: true,
  get: function get() {
    return _DisabledAndSelected.DisabledAndSelected;
  }
});
Object.defineProperty(exports, "FileTree", {
  enumerable: true,
  get: function get() {
    return _FileTree.FileTree;
  }
});
Object.defineProperty(exports, "FileTreeClosed", {
  enumerable: true,
  get: function get() {
    return _FileTree.FileTreeClosed;
  }
});
Object.defineProperty(exports, "HoverDisclosure", {
  enumerable: true,
  get: function get() {
    return _HoverDisclosure.HoverDisclosure;
  }
});
exports.Link = exports.Icon = void 0;
Object.defineProperty(exports, "LongLabels", {
  enumerable: true,
  get: function get() {
    return _LongLabels.LongLabels;
  }
});
Object.defineProperty(exports, "Windowing", {
  enumerable: true,
  get: function get() {
    return _Windowing.Windowing;
  }
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _material = require("@styled-icons/material");

var _storybook = require("@looker/storybook");

var _ = require("..");

var _Button = require("../../Button");

var _Layout = require("../../Layout");

var _Form = require("../../Form");

var _utils = require("../../utils");

var _BorderRadius = require("./BorderRadius");

var _ColorfulTree = require("./ColorfulTree");

var _Density = require("./Density");

var _DisabledAndSelected = require("./DisabledAndSelected");

var _FileTree = require("./FileTree");

var _HoverDisclosure = require("./HoverDisclosure");

var _LongLabels = require("./LongLabels");

var _Windowing = require("./Windowing");

var _excluded = ["label"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _.Tree,
  title: 'Tree'
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? _react["default"].createElement("strong", null, "Orders") : _ref$label,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_.TreeCollection, null, _react["default"].createElement(_.Tree, (0, _extends2["default"])({
    label: label
  }, args), _react["default"].createElement(_.Tree, {
    label: _react["default"].createElement("strong", null, "Orders"),
    defaultOpen: true
  }, _react["default"].createElement(_.TreeItem, null, "ID"), _react["default"].createElement(_.TreeItem, null, "Status"), _react["default"].createElement(_.Tree, {
    label: _react["default"].createElement("strong", null, "Created"),
    defaultOpen: true
  }, _react["default"].createElement(_.TreeItem, null, "Created Date"), _react["default"].createElement(_.TreeItem, null, "Created Month"), _react["default"].createElement(_.TreeItem, null, "Created Year"), _react["default"].createElement(_.TreeItem, null, "Created Quarter")))));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  defaultOpen: true
};
var Border = Template.bind({});
exports.Border = Border;
Border.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  border: true
});
var Link = Template.bind({});
exports.Link = Link;
Link.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  href: 'https://google.com',
  itemRole: 'link',
  label: _react["default"].createElement("strong", null, "Click my label to go to Google"),
  rel: 'noopener noreferrer',
  target: '_blank'
});

var Icon = function Icon() {
  return _react["default"].createElement(_.TreeCollection, null, _react["default"].createElement(_.Tree, {
    defaultOpen: true,
    icon: _react["default"].createElement(_material.Alarm, null),
    label: _react["default"].createElement("strong", null, _react["default"].createElement(_Layout.Space, {
      between: true
    }, "\"Alarm\" icon has margin-right, but \"Download\" icon does not", _react["default"].createElement(_material.Download, {
      size: 20
    })))
  }, _react["default"].createElement(_.TreeItem, null, "Don't mind me")));
};

exports.Icon = Icon;
var Accessory = Template.bind({});
exports.Accessory = Accessory;
Accessory.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: {
    content: _react["default"].createElement(_Button.Button, {
      ml: "large",
      onClick: function onClick() {
        return alert('Accessory Button');
      }
    }, "Accessory Button"),
    options: {
      accessory: true
    }
  }
});
Accessory.parameters = {
  storyshots: {
    disable: true
  }
};

var Controlled = function Controlled() {
  var _useToggle = (0, _utils.useToggle)(true),
      value = _useToggle.value,
      change = _useToggle.change,
      toggle = _useToggle.toggle;

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Form.FieldToggleSwitch, {
    on: value,
    onChange: toggle,
    label: "Toggle"
  }), _react["default"].createElement(_.Tree, {
    isOpen: value,
    toggleOpen: change,
    label: "Controlled Tree"
  }, "Stuff here"));
};

exports.Controlled = Controlled;
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Tree.stories.js.map