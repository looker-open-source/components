"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MenuListSpacing = exports.MenuHeadingOverride = exports.MenuHeadingComposition = exports.LongList = exports.Density = exports.Basic = exports.AdjacentDividers = void 0;

var _materialOutlined = require("@styled-icons/material-outlined");

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _Layout = require("../Layout");

var _MenuDivider = require("./MenuDivider");

var _MenuItem = require("./MenuItem");

var _MenuList = require("./MenuList");

var _MenuHeading = require("./MenuHeading");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var groups = [{
  items: [{
    children: 'Edit Dashboard',
    detail: 'cmd+shift+E',
    icon: _react["default"].createElement(_materialOutlined.Create, null)
  }, {
    children: 'Get LookML',
    description: 'some description'
  }, {
    children: 'Revert to original dashboard',
    detail: 'A longer detail',
    icon: _react["default"].createElement(_materialOutlined.Undo, null)
  }],
  label: 'Options'
}, {
  items: [{
    children: 'Log Out',
    detail: 'esc'
  }]
}];

var Template = function Template(args) {
  return _react["default"].createElement(_MenuList.MenuList, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  children: groups.map(function (_ref, key) {
    var label = _ref.label,
        items = _ref.items;
    return _react["default"].createElement(_react.Fragment, {
      key: key
    }, label && _react["default"].createElement(_MenuHeading.MenuHeading, null, label), items.map(function (item, i) {
      return _react["default"].createElement(_MenuItem.MenuItem, {
        key: i,
        icon: item.icon,
        detail: item.detail,
        description: item.description
      }, item.children);
    }), _react["default"].createElement(_MenuDivider.MenuDivider, null));
  }),
  iconGutter: true
};
var array3000 = Array.from(Array(3000), function (_, i) {
  return String(i + 1);
});

var LongList = function LongList() {
  return _react["default"].createElement(_Layout.Box2, {
    height: "500px"
  }, _react["default"].createElement(_MenuList.MenuList, null, array3000.map(function (item, i) {
    return _react["default"].createElement(_MenuItem.MenuItem, {
      key: i
    }, item);
  })));
};

exports.LongList = LongList;
LongList.parameters = {
  storyshots: false
};

var MenuHeadingComposition = function MenuHeadingComposition() {
  return _react["default"].createElement(_MenuList.MenuList, null, _react["default"].createElement(_MenuHeading.MenuHeading, null, "Mild Cheeses"), _react["default"].createElement(_MenuItem.MenuItem, null, "Cheddar"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuHeading.MenuHeading, null, "Spicy Cheeses"), _react["default"].createElement(_MenuItem.MenuItem, null, "Pepper Jack"));
};

exports.MenuHeadingComposition = MenuHeadingComposition;

var DensityExample = function DensityExample(_ref2) {
  var density = _ref2.density;
  return _react["default"].createElement(_MenuList.MenuList, {
    iconGutter: true,
    density: density
  }, _react["default"].createElement(_MenuHeading.MenuHeading, null, "Cheeses of the World"), _react["default"].createElement(_MenuItem.MenuItem, {
    icon: _react["default"].createElement(_materialOutlined.DateRange, null),
    description: "Yellow"
  }, "Swiss"), _react["default"].createElement(_MenuItem.MenuItem, {
    selected: true
  }, "Parmesan"), _react["default"].createElement(_MenuItem.MenuItem, null, "Cheddar"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuItem.MenuItem, null, "Pepper Jack"));
};

var Density = function Density() {
  return _react["default"].createElement(_Layout.Grid, {
    columns: 5
  }, _react["default"].createElement(DensityExample, {
    density: 1
  }), _react["default"].createElement(DensityExample, null), _react["default"].createElement(DensityExample, {
    density: -1
  }), _react["default"].createElement(DensityExample, {
    density: -2
  }), _react["default"].createElement(DensityExample, {
    density: -3
  }));
};

exports.Density = Density;

var MenuHeadingOverride = function MenuHeadingOverride() {
  return _react["default"].createElement(_MenuList.MenuList, null, _react["default"].createElement(_MenuHeading.MenuHeading, null, "Hello World"), _react["default"].createElement(_MenuHeading.MenuHeading, {
    color: "inform",
    fontSize: "small",
    fontWeight: "bold",
    lineHeight: "small",
    py: "xxsmall"
  }, "Custom Hello World"));
};

exports.MenuHeadingOverride = MenuHeadingOverride;

var MenuListSpacing = function MenuListSpacing() {
  return _react["default"].createElement(_Layout.Space, {
    p: "u4",
    style: {
      background: '#ff8c69'
    }
  }, _react["default"].createElement(_Layout.Box2, {
    bg: "background"
  }, _react["default"].createElement(_MenuList.MenuList, null, _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuItem.MenuItem, {
    selected: true
  }, "Top Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    selected: true
  }, "Top Item"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuItem.MenuItem, {
    selected: true
  }, "Bottom Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    selected: true
  }, "Bottom Item"), _react["default"].createElement(_MenuDivider.MenuDivider, null))), _react["default"].createElement(_Layout.Box2, {
    bg: "background"
  }, _react["default"].createElement(_MenuList.MenuList, null, _react["default"].createElement(_MenuItem.MenuItem, {
    selected: true
  }, "Top Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    selected: true
  }, "Top Item"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuItem.MenuItem, {
    selected: true
  }, "Bottom Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    selected: true
  }, "Bottom Item"), _react["default"].createElement(_MenuDivider.MenuDivider, null))), _react["default"].createElement(_Layout.Box2, {
    bg: "background"
  }, _react["default"].createElement(_MenuList.MenuList, null, _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuItem.MenuItem, {
    selected: true
  }, "Top Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    selected: true
  }, "Top Item"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuItem.MenuItem, {
    selected: true
  }, "Bottom Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    selected: true
  }, "Bottom Item"))));
};

exports.MenuListSpacing = MenuListSpacing;

var AdjacentDividers = function AdjacentDividers() {
  return _react["default"].createElement(_MenuList.MenuList, null, _react["default"].createElement(_MenuItem.MenuItem, null, "There should only be one divider here..."), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuItem.MenuItem, null, "even though there are technically two"));
};

exports.AdjacentDividers = AdjacentDividers;
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _MenuList.MenuList,
  title: 'MenuList'
};
exports["default"] = _default;
//# sourceMappingURL=MenuList.stories.js.map