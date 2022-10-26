"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithTree = exports.WithDrawer = exports.Open = exports.Nested = exports.IconToggle = exports.Hook = exports.DirectionRight = exports.CloseLabel = exports.CenterPlacement = exports.Basic = exports.AnimationCallbacks = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@styled-icons/material");

var _storybook = require("@looker/storybook");

var _Button = require("../Button");

var _Form = require("../Form");

var _Drawer = require("../Drawer");

var _List = require("../List");

var _ListItem = require("../ListItem");

var _Layout = require("../Layout");

var _Text = require("../Text");

var _Tree = require("../Tree");

var _ = require("./");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _.Panel,
  title: 'Panel'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_Layout.Page, {
    hasAside: true
  }, _react["default"].createElement(_Layout.Aside, {
    width: "12rem"
  }, _react["default"].createElement(_.Panels, null, _react["default"].createElement(_List.List, null, _react["default"].createElement(_.Panel, args, _react["default"].createElement(_ListItem.ListItem, null, "option A")), _react["default"].createElement(_ListItem.ListItem, null, "option B"), _react["default"].createElement(_ListItem.ListItem, null, "option C"), _react["default"].createElement(_ListItem.ListItem, null, "option D")))), _react["default"].createElement(_Layout.Section, null, "Main stuff here..."));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  content: 'Panel Content',
  title: 'Panel Title'
};
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
var Open = Template.bind({});
exports.Open = Open;
Open.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultOpen: true
});
var IconToggle = Template.bind({});
exports.IconToggle = IconToggle;
IconToggle.args = _objectSpread(_objectSpread({}, Open.args), {}, {
  iconToggle: true
});
var DirectionRight = Template.bind({});
exports.DirectionRight = DirectionRight;
DirectionRight.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultOpen: true,
  direction: 'right'
});
var CloseLabel = Template.bind({});
exports.CloseLabel = CloseLabel;
CloseLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  closeLabel: 'Back to the last thing'
});
CloseLabel.parameters = {
  storyshots: {
    disable: true
  }
};

var Nested = function Nested() {
  return _react["default"].createElement(_Layout.Page, {
    hasAside: true
  }, _react["default"].createElement(_Layout.Aside, {
    width: "12rem"
  }, _react["default"].createElement(_Button.Button, null, "Before"), _react["default"].createElement(_.Panels, null, _react["default"].createElement(_List.List, null, _react["default"].createElement(_.Panel, {
    title: "Panel Title",
    content: _react["default"].createElement(_.Panel, {
      content: "Nested Panel content",
      title: "Nested"
    }, _react["default"].createElement(_Button.Button, null, "Open nested panel"))
  }, _react["default"].createElement(_ListItem.ListItem, null, "option A")), _react["default"].createElement(_ListItem.ListItem, null, "option B"), _react["default"].createElement(_ListItem.ListItem, null, "option C"), _react["default"].createElement(_ListItem.ListItem, null, "option D")))), _react["default"].createElement(_Layout.Section, null, _react["default"].createElement(_Text.Paragraph, null, "Main stuff here..."), _react["default"].createElement(_Button.Button, null, "After")));
};

exports.Nested = Nested;
Nested.parameters = {
  storyshots: {
    disable: true
  }
};

var HookInner = function HookInner() {
  var _usePanel = (0, _.usePanel)({
    content: 'Panel content',
    title: 'Panel Hook'
  }),
      panel = _usePanel.panel,
      setOpen = _usePanel.setOpen;

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_ListItem.ListItem, {
    onClick: function onClick() {
      return setOpen(true);
    },
    icon: _react["default"].createElement(_material.Done, null)
  }, "Option A"), panel);
};

var Hook = function Hook() {
  return _react["default"].createElement(_.Panels, null, _react["default"].createElement(_List.List, null, _react["default"].createElement(HookInner, null), _react["default"].createElement(_ListItem.ListItem, {
    icon: _react["default"].createElement(_material.Done, null)
  }, "Option B")));
};

exports.Hook = Hook;
Hook.parameters = {
  storyshots: {
    disable: true
  }
};

var CenterPlacement = function CenterPlacement() {
  return _react["default"].createElement(_Layout.Page, {
    hasAside: true,
    height: "100vh"
  }, _react["default"].createElement(_Layout.Aside, {
    width: "navigation"
  }, "Left sidebar"), _react["default"].createElement(_Layout.Layout, {
    hasAside: true
  }, _react["default"].createElement(_Layout.Section, null, _react["default"].createElement(_.Panels, null, _react["default"].createElement(_.Panel, {
    title: "Some title",
    content: _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_.Panel, {
      title: "Another title",
      direction: "right",
      content: _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"))
    }, _react["default"].createElement(_Button.Button, null, "Open Another Panel")), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"))
  }, _react["default"].createElement(_Button.Button, null, "Open Panel")), _react["default"].createElement(_Text.Paragraph, null, "Content to be covered by the panel"))), _react["default"].createElement(_Layout.Aside, {
    width: "sidebar"
  }, "Right sidebar")));
};

exports.CenterPlacement = CenterPlacement;
CenterPlacement.parameters = {
  storyshots: {
    disable: true
  }
};

var WithTree = function WithTree() {
  return _react["default"].createElement(_Layout.Page, {
    hasAside: true
  }, _react["default"].createElement(_Layout.Aside, {
    width: "navigation"
  }, _react["default"].createElement(_.Panels, null, _react["default"].createElement(_.Panel, {
    title: "Some title",
    content: "Tree should be hidden"
  }, _react["default"].createElement(_Button.Button, null, "Open Panel")), _react["default"].createElement(_Tree.TreeCollection, null, _react["default"].createElement(_Tree.Tree, {
    label: _react["default"].createElement("strong", null, "Orders"),
    defaultOpen: true
  }, _react["default"].createElement(_Tree.TreeItem, null, "ID"), _react["default"].createElement(_Tree.TreeItem, null, "Status"), _react["default"].createElement(_Tree.Tree, {
    label: _react["default"].createElement("strong", null, "Created"),
    defaultOpen: true
  }, _react["default"].createElement(_Tree.TreeItem, null, "Created Date"), _react["default"].createElement(_Tree.TreeItem, null, "Created Month"), _react["default"].createElement(_Tree.TreeItem, null, "Created Year"), _react["default"].createElement(_Tree.TreeItem, null, "Created Quarter")))))), _react["default"].createElement(_Layout.Section, null, "Main content"));
};

exports.WithTree = WithTree;

var WithDrawer = function WithDrawer() {
  return _react["default"].createElement(_Drawer.Drawer, {
    placement: "left",
    content: _react["default"].createElement(_.Panels, null, _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_.Panel, {
      defaultOpen: true,
      direction: "right",
      title: "Some title",
      content: "Tree should be hidden"
    }, _react["default"].createElement(_Button.Button, null, "Open Panel")), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text")))
  }, _react["default"].createElement(_Button.Button, null, "Open Drawer"));
};

exports.WithDrawer = WithDrawer;
WithDrawer.parameters = {
  storyshots: {
    disable: true
  }
};

var AnimationCallbacks = function AnimationCallbacks() {
  var inputRef = (0, _react.useRef)(null);
  var focusInput = (0, _react.useCallback)(function () {
    var _inputRef$current;

    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  }, []);

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var showMessage = function showMessage() {
    setMessage('Panel closed');
  };

  return _react["default"].createElement(_Layout.Page, {
    hasAside: true
  }, _react["default"].createElement(_Layout.Aside, {
    width: "20rem"
  }, _react["default"].createElement(_.Panels, null, _react["default"].createElement(_Layout.Box2, {
    p: "medium",
    height: 300
  }, _react["default"].createElement(_.Panel, {
    title: "Animation Callbacks",
    onAfterOpen: focusInput,
    onAfterClose: showMessage,
    content: _react["default"].createElement(_Layout.Box2, {
      px: "medium"
    }, _react["default"].createElement(_Form.FieldText, {
      label: "Focus onAfterOpen",
      ref: inputRef
    }))
  }, _react["default"].createElement(_Button.Button, null, "Open Panel"))))), _react["default"].createElement(_Layout.Section, null, _react["default"].createElement(_Text.Paragraph, null, "Main stuff here..."), _react["default"].createElement(_Text.Paragraph, null, message)));
};

exports.AnimationCallbacks = AnimationCallbacks;
AnimationCallbacks.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Panel.stories.js.map