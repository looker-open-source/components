"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TruncateAndIconAndDetailAndAccessory = exports.TruncateAndIconAndDetail = exports.Truncate = exports.Selected = exports.RoleVariants = exports.NoRole = exports.Link = exports.KeyColor = exports.IconStatus = exports.IconCustomColor = exports.IconColorDisabled = exports.IconColor = exports.IconAndDetailAndDescription = exports.IconAndDetail = exports.IconAndDescription = exports.Icon = exports.HoverDisclosure = exports.Disabled = exports.DetailAndDescription = exports.Detail = exports.Description = exports.ColorComparison = exports.Basic = exports.Accessory = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _material = require("@styled-icons/material");

var _materialOutlined = require("@styled-icons/material-outlined");

var _storybook = require("@looker/storybook");

var _Button = require("../Button");

var _Text = require("../Text");

var _Grid = require("../Layout/Grid");

var _SpaceVertical = require("../Layout/Space/SpaceVertical");

var _Status = require("../Status");

var _List = require("../List");

var _ListItem = require("./ListItem");

var _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  return _react["default"].createElement(_ListItem.ListItem, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
var basicArgs = {
  children: 'List Item'
};
Basic.args = _objectSpread({}, basicArgs);
var Icon = Template.bind({});
exports.Icon = Icon;

var iconArgs = _objectSpread(_objectSpread({}, basicArgs), {}, {
  icon: _react["default"].createElement(_material.PersonOutline, null)
});

Icon.args = _objectSpread({}, iconArgs);

var IconColor = function IconColor() {
  return _react["default"].createElement(_ListItem.ListItem, (0, _extends2["default"])({}, iconArgs, {
    color: "calculation"
  }));
};

exports.IconColor = IconColor;

var IconStatus = function IconStatus() {
  return _react["default"].createElement(_ListItem.ListItem, (0, _extends2["default"])({}, iconArgs, {
    icon: _react["default"].createElement(_Status.Status, {
      intent: "warn"
    })
  }));
};

exports.IconStatus = IconStatus;

var IconCustomColor = function IconCustomColor() {
  return _react["default"].createElement(_ListItem.ListItem, (0, _extends2["default"])({}, iconArgs, {
    color: "#cc00cc"
  }));
};

exports.IconCustomColor = IconCustomColor;

var IconColorDisabled = function IconColorDisabled() {
  return _react["default"].createElement(_ListItem.ListItem, (0, _extends2["default"])({}, iconArgs, {
    color: "warn",
    disabled: true
  }));
};

exports.IconColorDisabled = IconColorDisabled;

var Example = function Example(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var args = _objectSpread({
    icon: _react["default"].createElement(_material.PersonOutline, null)
  }, props);

  return _react["default"].createElement(_SpaceVertical.SpaceVertical, null, _react["default"].createElement(_Text.Heading, {
    as: "h3"
  }, children), _react["default"].createElement(_List.List, {
    width: "100%"
  }, _react["default"].createElement(_ListItem.ListItem, args, "Default"), _react["default"].createElement(_ListItem.ListItem, (0, _extends2["default"])({}, args, {
    color: "key"
  }), "Key"), _react["default"].createElement(_ListItem.ListItem, (0, _extends2["default"])({}, args, {
    color: "calculation"
  }), "Calculation"), _react["default"].createElement(_ListItem.ListItem, (0, _extends2["default"])({}, args, {
    color: "dimension"
  }), "Dimension"), _react["default"].createElement(_ListItem.ListItem, (0, _extends2["default"])({}, args, {
    color: "measure"
  }), "Measure")));
};

var ColorComparison = function ColorComparison() {
  return _react["default"].createElement(_Grid.Grid, {
    columns: 3
  }, _react["default"].createElement(Example, null, "Default"), _react["default"].createElement(Example, {
    selected: true
  }, "Selected"), _react["default"].createElement(Example, {
    selected: true,
    disabled: true
  }, "Selected + Disabled"));
};

exports.ColorComparison = ColorComparison;
var Detail = Template.bind({});
exports.Detail = Detail;
Detail.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: 'A Detail'
});
var Accessory = Template.bind({});
exports.Accessory = Accessory;
Accessory.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: {
    content: _react["default"].createElement(_Button.IconButton, {
      icon: _react["default"].createElement(_material.SubdirectoryArrowLeft, null),
      label: "Pivot"
    }),
    options: {
      accessory: true
    }
  }
});
var HoverDisclosure = Template.bind({});
exports.HoverDisclosure = HoverDisclosure;
HoverDisclosure.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: {
    content: _react["default"].createElement(_Button.IconButton, {
      icon: _react["default"].createElement(_material.SubdirectoryArrowLeft, null),
      label: "Pivot"
    }),
    options: {
      hoverDisclosure: true
    }
  }
});
HoverDisclosure.parameters = {
  storyshots: {
    disable: true
  }
};
var IconAndDetail = Template.bind({});
exports.IconAndDetail = IconAndDetail;
IconAndDetail.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: 'A Detail',
  icon: _react["default"].createElement(_material.PersonOutline, null)
});
var Description = Template.bind({});
exports.Description = Description;
Description.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'A description'
});
var IconAndDescription = Template.bind({});
exports.IconAndDescription = IconAndDescription;
IconAndDescription.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'A description',
  icon: _react["default"].createElement(_material.PersonOutline, null)
});
var DetailAndDescription = Template.bind({});
exports.DetailAndDescription = DetailAndDescription;
DetailAndDescription.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'A description',
  detail: 'A detail'
});
var IconAndDetailAndDescription = Template.bind({});
exports.IconAndDetailAndDescription = IconAndDetailAndDescription;
IconAndDetailAndDescription.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'A description',
  detail: 'A detail',
  icon: _react["default"].createElement(_material.PersonOutline, null)
});
var Selected = Template.bind({});
exports.Selected = Selected;
Selected.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  selected: true
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});

var KeyColor = function KeyColor() {
  return _react["default"].createElement(_ListItem.ListItem, (0, _extends2["default"])({
    selected: true,
    color: "key"
  }, basicArgs));
};

exports.KeyColor = KeyColor;

var Link = function Link() {
  return _react["default"].createElement(_ListItem.ListItem, {
    itemRole: "link",
    href: "https://google.com",
    target: "_blank"
  }, "ListItem that links to Google");
};

exports.Link = Link;

var NoRole = function NoRole() {
  return _react["default"].createElement(_ListItem.ListItem, {
    itemRole: "none",
    detail: _react["default"].createElement(_Button.IconButton, {
      onClick: function onClick() {
        return alert('Show me calendar');
      },
      icon: _react["default"].createElement(_material.PersonOutline, null),
      label: "Person",
      ml: "large"
    })
  }, "ListItem");
};

exports.NoRole = NoRole;
var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
var Truncate = Template.bind({});
exports.Truncate = Truncate;
Truncate.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  children: lorem,
  description: lorem,
  truncate: true
});
var TruncateAndIconAndDetail = Template.bind({});
exports.TruncateAndIconAndDetail = TruncateAndIconAndDetail;
TruncateAndIconAndDetail.args = _objectSpread(_objectSpread({}, Truncate.args), {}, {
  detail: {
    content: 'Detail',
    options: {}
  },
  icon: _react["default"].createElement(_materialOutlined.DateRange, null)
});
var TruncateAndIconAndDetailAndAccessory = Template.bind({});
exports.TruncateAndIconAndDetailAndAccessory = TruncateAndIconAndDetailAndAccessory;
TruncateAndIconAndDetailAndAccessory.args = _objectSpread(_objectSpread({}, Truncate.args), {}, {
  detail: {
    content: _react["default"].createElement(_Text.Text, {
      fontSize: "xsmall"
    }, "Detail Accessory"),
    options: {
      accessory: true
    }
  },
  icon: _react["default"].createElement(_materialOutlined.DateRange, null)
});

var RoleVariant = function RoleVariant(_ref2) {
  var itemRole = _ref2.itemRole,
      description = _ref2.description;
  return _react["default"].createElement(_ListItem.ListItem, {
    itemRole: itemRole,
    description: description
  }, "Hello World");
};

var RoleVariants = function RoleVariants() {
  return _react["default"].createElement(_Grid.Grid, {
    columns: 3
  }, _react["default"].createElement("div", null, _react["default"].createElement(RoleVariant, {
    itemRole: "button"
  }), _react["default"].createElement(RoleVariant, {
    itemRole: "button",
    description: "Definitely a button"
  })), _react["default"].createElement("div", null, _react["default"].createElement(RoleVariant, {
    itemRole: "link"
  }), _react["default"].createElement(RoleVariant, {
    itemRole: "link",
    description: "Definitely a link"
  })), _react["default"].createElement("div", null, _react["default"].createElement(RoleVariant, {
    itemRole: "none"
  }), _react["default"].createElement(RoleVariant, {
    itemRole: "none",
    description: "Definitely a none"
  })));
};

exports.RoleVariants = RoleVariants;
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _ListItem.ListItem,
  title: 'ListItem'
};
exports["default"] = _default;
//# sourceMappingURL=ListItem.stories.js.map