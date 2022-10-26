"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StateChanges = exports.Scrolling = exports.DistributedScrolling = exports.Distributed = exports.Disabled = exports.DefaultTab = exports.Controlled = exports.Basic = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Form = require("../Form");

var _Layout = require("../Layout");

var _ = require("./");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  component: _.Tabs2,
  title: 'Tabs2'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_Layout.Box2, {
    height: "8rem"
  }, _react["default"].createElement(_.Tabs2, args, _react["default"].createElement(_.Tab2, {
    id: "cats",
    label: "Cats"
  }, "Here's awesome story about cats"), _react["default"].createElement(_.Tab2, {
    id: "dogs",
    label: "Dogs"
  }, "Cats are way better than dogs. Go to other tab"), _react["default"].createElement(_.Tab2, {
    label: "Fish"
  }, "Are kinda smelly")));
};

var Basic = Template.bind({});
exports.Basic = Basic;
var Distributed = Template.bind({});
exports.Distributed = Distributed;
Distributed.args = {
  distributed: true
};

var DistributedScrolling = function DistributedScrolling() {
  var tabs = new Array(20).fill('Tab2');
  return _react["default"].createElement(_Layout.Box2, {
    height: "8rem"
  }, _react["default"].createElement(_.Tabs2, {
    distributed: true
  }, tabs.map(function (value, index) {
    return _react["default"].createElement(_.Tab2, {
      label: "Hello World ".concat(index),
      key: index
    }, "This is ", value, " ", index);
  })));
};

exports.DistributedScrolling = DistributedScrolling;
var DefaultTab = Template.bind({});
exports.DefaultTab = DefaultTab;
DefaultTab.args = {
  defaultTabId: 'dogs'
};

var Controlled = function Controlled() {
  var _useState = (0, _react.useState)('cats'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      currentTabId = _useState2[0],
      setTabId = _useState2[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("p", null, "The current selected tab is: ", currentTabId), _react["default"].createElement("button", {
    onClick: function onClick() {
      return setTabId('cats');
    }
  }, "Switch to Cats"), _react["default"].createElement("button", {
    onClick: function onClick() {
      return setTabId('dogs');
    }
  }, "Switch to Dogs"), _react["default"].createElement(_.Tabs2, {
    tabId: currentTabId,
    onTabChange: setTabId
  }, _react["default"].createElement(_.Tab2, {
    id: "cats",
    label: "Cats"
  }, "Here's awesome story about cats"), _react["default"].createElement(_.Tab2, {
    id: "dogs",
    label: "Dogs"
  }, "Cats are way better than dogs. Go to other tab")));
};

exports.Controlled = Controlled;
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};

var Scrolling = function Scrolling() {
  var tabs = new Array(20).fill('Tab2');
  return _react["default"].createElement(_.Tabs2, null, tabs.map(function (value, index) {
    return _react["default"].createElement(_.Tab2, {
      label: "Hello World ".concat(index),
      key: index
    }, "This is ", value, " ", index);
  }));
};

exports.Scrolling = Scrolling;
Scrolling.parameters = {
  storyshots: {
    disable: true
  }
};

var Disabled = function Disabled() {
  return _react["default"].createElement(_Layout.Box2, {
    height: "8rem"
  }, _react["default"].createElement(_.Tabs2, null, _react["default"].createElement(_.Tab2, {
    id: "cats",
    label: "Cats"
  }, "Here's awesome story about cats"), _react["default"].createElement(_.Tab2, {
    id: "dogs",
    label: "Dogs"
  }, "Cats are way better than dogs. Go to other tab"), _react["default"].createElement(_.Tab2, {
    label: "Fish"
  }, "Are kinda smelly"), _react["default"].createElement(_.Tab2, {
    disabled: true,
    id: "human",
    label: "Human"
  }, "Humans tab is disabled")));
};

exports.Disabled = Disabled;

var StateChanges = function StateChanges() {
  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var handleChange = function handleChange(e) {
    setValue(e.currentTarget.value);
  };

  return _react["default"].createElement(_.Tabs2, null, _react["default"].createElement(_.Tab2, {
    label: "Tab 1"
  }, "Go to Tab 2 and try entering text in the field"), _react["default"].createElement(_.Tab2, {
    label: "Tab 2"
  }, _react["default"].createElement(_Form.FieldText, {
    value: value,
    onChange: handleChange
  })));
};

exports.StateChanges = StateChanges;
StateChanges.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Tabs2.stories.js.map