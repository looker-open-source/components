"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Scrolling = exports.DistributedScrolling = exports.Distributed = exports.Controlled = exports.Basic = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _Button = require("../Button");

var _Space = require("../Layout/Space");

var _ = require("./");

var _excluded = ["tabCount", "tabPrefix"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Template = function Template(_ref) {
  var tabCount = _ref.tabCount,
      tabPrefix = _ref.tabPrefix,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var tabs = new Array(tabCount).fill('tab');
  return _react["default"].createElement(_.Tabs, null, _react["default"].createElement(_.TabList, args, tabs.map(function (_k, index) {
    return _react["default"].createElement(_.Tab, {
      key: index
    }, tabPrefix, " ", index);
  })), _react["default"].createElement(_.TabPanels, null, tabs.map(function (_k, index) {
    return _react["default"].createElement(_.TabPanel, {
      key: index
    }, "This is ", index);
  })));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  tabCount: 3,
  tabPrefix: 'My Awesome Tab'
};
var Distributed = Template.bind({});
exports.Distributed = Distributed;
Distributed.args = {
  distribute: true,
  tabCount: 3,
  tabPrefix: 'My Awesome Tab'
};
var DistributedScrolling = Template.bind({});
exports.DistributedScrolling = DistributedScrolling;
DistributedScrolling.args = {
  distribute: true,
  tabCount: 20,
  tabPrefix: 'My Awesome Tab'
};
var Scrolling = Template.bind({});
exports.Scrolling = Scrolling;
Scrolling.args = {
  tabCount: 20,
  tabPrefix: 'My Awesome Tab'
};

var Controlled = function Controlled() {
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      currentTabIndex = _useState2[0],
      setTab = _useState2[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Space.Space, null, _react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setTab(0);
    }
  }, "Go to A"), _react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setTab(1);
    }
  }, "Go to B")), _react["default"].createElement(_.Tabs, {
    index: currentTabIndex,
    onChange: setTab
  }, _react["default"].createElement(_.TabList, null, _react["default"].createElement(_.Tab, null, "A"), _react["default"].createElement(_.Tab, null, "B")), _react["default"].createElement(_.TabPanels, null, _react["default"].createElement(_.TabPanel, null, "A"), _react["default"].createElement(_.TabPanel, null, "B"))));
};

exports.Controlled = Controlled;
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _.Tabs,
  title: 'Tabs'
};
exports["default"] = _default;
//# sourceMappingURL=Tabs.stories.js.map