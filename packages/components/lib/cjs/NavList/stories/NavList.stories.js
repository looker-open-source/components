"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyboardNavigation = exports.Basic = void 0;
Object.defineProperty(exports, "LeftNav", {
  enumerable: true,
  get: function get() {
    return _LeftNav.LeftNav;
  }
});
exports["default"] = exports.MixedNavigation = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _materialOutlined = require("@styled-icons/material-outlined");

var _storybook = require("@looker/storybook");

var _Button = require("../../Button");

var _Layout = require("../../Layout");

var _ListItem = require("../../ListItem");

var _ProgressCircular = require("../../ProgressCircular");

var _NavTree = require("../../NavTree");

var _NavList = require("../NavList");

var _LeftNav = require("./LeftNav");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _NavList.NavList,
  title: 'NavList'
};
exports["default"] = _default;

var Basic = function Basic() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var handleClick = function handleClick() {
    setSelected(!selected);
  };

  return _react["default"].createElement(_NavList.NavList, null, _react["default"].createElement(_ListItem.ListItem, {
    description: "Description",
    detail: "Interesting details",
    icon: _react["default"].createElement(_materialOutlined.Home, null),
    selected: true
  }, "Explore"), _react["default"].createElement(_ListItem.ListItem, {
    icon: _react["default"].createElement(_materialOutlined.Info, null),
    onClick: handleClick,
    selected: selected,
    truncate: {
      description: "It's an item"
    }
  }, "Develop"), _react["default"].createElement(_ListItem.ListItem, {
    icon: _react["default"].createElement(_materialOutlined.Info, null),
    truncate: {
      description: 'Word Document - Last update 3 days ago'
    }
  }, "This is a really long navigation list item that should get truncated at some point waaaayyyy out in the nether regions of a long line of text"));
};

exports.Basic = Basic;

var MixedNavigation = function MixedNavigation() {
  return _react["default"].createElement(_Layout.Aside, {
    width: "navigation"
  }, _react["default"].createElement(_NavList.NavList, null, _react["default"].createElement(_ListItem.ListItem, {
    icon: _react["default"].createElement(_materialOutlined.Home, null),
    selected: true
  }, "Home"), _react["default"].createElement(_NavTree.NavTree, {
    icon: _react["default"].createElement(_materialOutlined.Info, null),
    label: "NavTree",
    selected: true,
    defaultOpen: true
  }, _react["default"].createElement(_NavTree.NavTree, {
    defaultOpen: true,
    label: "Blah",
    icon: _react["default"].createElement(_materialOutlined.Info, null)
  }, _react["default"].createElement(_NavTree.NavTreeItem, {
    parentIcon: true,
    color: "text2"
  }, _react["default"].createElement("em", null, "Not yet available")), _react["default"].createElement(_NavTree.NavTreeItem, {
    parentIcon: true,
    icon: _react["default"].createElement(_ProgressCircular.ProgressCircular, {
      size: "xsmall",
      progress: 0.75
    })
  }, "Loading..."))), _react["default"].createElement(_NavTree.NavTree, {
    icon: _react["default"].createElement(_materialOutlined.Info, null),
    label: "NavTree w icon-free NavTreeItems and long title",
    defaultOpen: true
  }, _react["default"].createElement(_NavTree.NavTree, {
    label: "Folders",
    defaultOpen: true
  }, _react["default"].createElement(_NavTree.NavTreeItem, {
    description: "description",
    detail: "detail",
    selected: true
  }, "My Awesome Item"), _react["default"].createElement(_NavTree.NavTreeItem, null, "Truncate example with long text running off screen"), _react["default"].createElement(_NavTree.NavTreeItem, {
    description: "description",
    detail: "detail"
  }, "Truncate example with long text running off screen")))));
};

exports.MixedNavigation = MixedNavigation;

var KeyboardNavigation = function KeyboardNavigation() {
  var getDetail = function getDetail(label) {
    return {
      content: _react["default"].createElement(_Button.IconButton, {
        label: "".concat(label, "-button"),
        icon: _react["default"].createElement(_materialOutlined.Info, null),
        tooltipDisabled: true
      }),
      options: {
        hoverDisclosure: true
      }
    };
  };

  return _react["default"].createElement(_NavList.NavList, null, _react["default"].createElement(_ListItem.ListItem, {
    icon: _react["default"].createElement(_materialOutlined.Info, null),
    detail: getDetail('list-item-detail'),
    itemRole: "none"
  }, "List Item"), _react["default"].createElement(_NavTree.NavTree, {
    icon: _react["default"].createElement(_materialOutlined.Info, null),
    label: "Nav Tree Default",
    detail: getDetail('nav-tree-detail'),
    defaultOpen: true
  }, _react["default"].createElement(_NavTree.NavTreeItem, {
    parentIcon: true,
    detail: getDetail('nav-tree-item-detail'),
    itemRole: "none"
  }, "Nav Tree Item")), _react["default"].createElement(_NavTree.NavTree, {
    icon: _react["default"].createElement(_materialOutlined.Info, null),
    indicatorLabel: "Nav Tree Link Indicator",
    label: "Nav Tree Link",
    detail: getDetail('nav-tree-link-detail'),
    defaultOpen: true,
    href: "https://google.com",
    target: "_blank"
  }, _react["default"].createElement(_NavTree.NavTreeItem, {
    parentIcon: true,
    itemRole: "none"
  }, "Now You See Me")));
};

exports.KeyboardNavigation = KeyboardNavigation;
KeyboardNavigation.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=NavList.stories.js.map