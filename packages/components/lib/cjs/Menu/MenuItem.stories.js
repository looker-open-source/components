"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Selected = exports.Link = exports.IconAndDetailAndDescription = exports.IconAndDetail = exports.IconAndDescription = exports.Icon = exports.DetailAndDescription = exports.Detail = exports.Description = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _materialOutlined = require("@styled-icons/material-outlined");

var _storybook = require("@looker/storybook");

var _MenuItem = require("./MenuItem");

var Template = function Template(args) {
  return _react["default"].createElement(_MenuItem.MenuItem, args, "Menu Item");
};

var Basic = Template.bind({});
exports.Basic = Basic;
var Icon = Template.bind({});
exports.Icon = Icon;
Icon.args = {
  icon: _react["default"].createElement(_materialOutlined.PersonOutline, null)
};
var Detail = Template.bind({});
exports.Detail = Detail;
Detail.args = {
  detail: 'A Detail'
};
var IconAndDetail = Template.bind({});
exports.IconAndDetail = IconAndDetail;
IconAndDetail.args = {
  detail: 'A Detail',
  icon: _react["default"].createElement(_materialOutlined.PersonOutline, null)
};
var Description = Template.bind({});
exports.Description = Description;
Description.args = {
  description: 'A description'
};
var IconAndDescription = Template.bind({});
exports.IconAndDescription = IconAndDescription;
IconAndDescription.args = {
  description: 'A description',
  icon: _react["default"].createElement(_materialOutlined.PersonOutline, null)
};
var DetailAndDescription = Template.bind({});
exports.DetailAndDescription = DetailAndDescription;
DetailAndDescription.args = {
  description: 'A description',
  detail: 'A detail'
};
var IconAndDetailAndDescription = Template.bind({});
exports.IconAndDetailAndDescription = IconAndDetailAndDescription;
IconAndDetailAndDescription.args = {
  description: 'A description',
  detail: 'A detail',
  icon: _react["default"].createElement(_materialOutlined.PersonOutline, null)
};
var Selected = Template.bind({});
exports.Selected = Selected;
Selected.args = {
  selected: true
};

var Link = function Link() {
  return _react["default"].createElement(_MenuItem.MenuItem, {
    itemRole: "link",
    href: "https://google.com",
    target: "_blank"
  }, "MenuItem that links to Google");
};

exports.Link = Link;
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _MenuItem.MenuItem,
  title: 'MenuItem'
};
exports["default"] = _default;
//# sourceMappingURL=MenuItem.stories.js.map