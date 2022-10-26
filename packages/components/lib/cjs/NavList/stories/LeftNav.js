"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeftNav = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@styled-icons/material");

var _materialOutlined = require("@styled-icons/material-outlined");

var _Button = require("../../Button");

var _Divider = require("../../Divider");

var _Layout = require("../../Layout");

var _ListItem = require("../../ListItem");

var _NavTree = require("../../NavTree");

var _NavList = require("../NavList");

var LeftNav = function LeftNav() {
  return _react["default"].createElement(_Layout.Aside, {
    width: "navigation"
  }, _react["default"].createElement(_NavList.NavList, null, _react["default"].createElement(_ListItem.ListItem, {
    icon: _react["default"].createElement(_materialOutlined.Explore, null)
  }, "Explore"), _react["default"].createElement(_ListItem.ListItem, {
    icon: _react["default"].createElement(_material.Code, null)
  }, "Develop"), _react["default"].createElement(_Divider.Divider, {
    my: "medium"
  }), _react["default"].createElement(_ListItem.ListItem, {
    icon: _react["default"].createElement(_materialOutlined.Home, null)
  }, "Home"), _react["default"].createElement(_NavTree.NavTree, {
    defaultOpen: true,
    icon: _react["default"].createElement(_materialOutlined.Schedule, null),
    label: "Recently Viewed"
  }, _react["default"].createElement(_NavTree.NavTreeItem, {
    parentIcon: true
  }, "I just saw you."), _react["default"].createElement(_NavTree.NavTreeItem, {
    parentIcon: true
  }, "Yeah, you!")), _react["default"].createElement(_NavTree.NavTree, {
    icon: _react["default"].createElement(_materialOutlined.FavoriteBorder, null),
    label: "Favorites"
  }, _react["default"].createElement(_NavTree.NavTreeItem, {
    parentIcon: true
  }, "My Favorite Dashboard")), _react["default"].createElement(_NavTree.NavTree, {
    defaultOpen: true,
    icon: _react["default"].createElement(_materialOutlined.Assignment, null),
    label: "Boards",
    detail: _react["default"].createElement(_Button.IconButton, {
      icon: _react["default"].createElement(_material.Add, null),
      label: "Add Board",
      onClick: function onClick() {
        return alert('Board added!');
      },
      size: "medium"
    })
  }, _react["default"].createElement(_NavTree.NavTree, {
    defaultOpen: true,
    label: "Elliot's Sick Board",
    href: "https://google.com",
    indicatorLabel: "Sick Board Indicator",
    target: "_blank",
    detail: {
      content: _react["default"].createElement(_Button.IconButton, {
        icon: _react["default"].createElement(_material.MoreVert, null),
        label: "Edit Board",
        onClick: function onClick() {
          return alert('Edited board!');
        },
        size: "medium"
      }),
      options: {
        hoverDisclosure: true
      }
    }
  }, _react["default"].createElement(_NavTree.NavTree, {
    defaultOpen: true,
    label: "Section 1"
  }, _react["default"].createElement(_NavTree.NavTreeItem, null, "Dashboard 1")), _react["default"].createElement(_NavTree.NavTree, {
    label: "Section 2"
  }, _react["default"].createElement(_NavTree.NavTreeItem, null, "Dashboard 2"))), _react["default"].createElement(_NavTree.NavTree, {
    label: "The Illest Board"
  })), _react["default"].createElement(_Divider.Divider, {
    my: "medium"
  }), _react["default"].createElement(_NavTree.NavTree, {
    icon: _react["default"].createElement(_materialOutlined.Folder, null),
    label: "Folders"
  }), _react["default"].createElement(_NavTree.NavTree, {
    icon: _react["default"].createElement(_materialOutlined.Widgets, null),
    label: "Blocks"
  }), _react["default"].createElement(_NavTree.NavTree, {
    icon: _react["default"].createElement(_materialOutlined.Extension, null),
    label: "Applications"
  })));
};

exports.LeftNav = LeftNav;
//# sourceMappingURL=LeftNav.js.map