"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LongList = exports.KeyboardNavigation = exports.IconGutter = exports.FontFamily = exports.Focused = exports.ExpandingList = exports.DensityWithNonstringChildren = exports.Density = exports.Color = exports.Basic = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _materialOutlined = require("@styled-icons/material-outlined");

var _material = require("@styled-icons/material");

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _Layout = require("../Layout");

var _ListItem = require("../ListItem");

var _Button = require("../Button");

var _List = require("./List");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _List.List,
  title: 'List'
};
exports["default"] = _default;

var listItems = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_ListItem.ListItem, {
  icon: _react["default"].createElement(_materialOutlined.DateRange, null),
  description: "Orange-y"
}, "Cheddar"), _react["default"].createElement(_ListItem.ListItem, {
  icon: _react["default"].createElement(_material.SubdirectoryArrowLeft, null),
  detail: "Netherlands"
}, "Gouda"), _react["default"].createElement(_ListItem.ListItem, {
  selected: true
}, "Mozzarella"), _react["default"].createElement(_ListItem.ListItem, null, "Swiss"));

var Template = function Template(args) {
  return _react["default"].createElement(_List.List, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  children: listItems
};
var Focused = Template.bind({});
exports.Focused = Focused;
Focused.args = _objectSpread({}, Basic.args);
Focused.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
var FontFamily = Template.bind({});
exports.FontFamily = FontFamily;
FontFamily.args = {
  children: listItems,
  fontFamily: 'code'
};

var Color = function Color() {
  return _react["default"].createElement(_List.List, {
    color: "key"
  }, listItems);
};

exports.Color = Color;
var IconGutter = Template.bind({});
exports.IconGutter = IconGutter;
IconGutter.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  iconGutter: true
});
var array3000 = Array.from(Array(3000), function (_, i) {
  return String(i);
});

var LongList = function LongList() {
  return _react["default"].createElement(_Layout.Flex, {
    height: 500
  }, _react["default"].createElement(_List.List, {
    width: 200
  }, array3000.map(function (item, i) {
    return _react["default"].createElement(_ListItem.ListItem, {
      key: i
    }, i > 0 && i % 30 === 0 ? 'Longlonglonglonglonglonglonglonglonglonglong' : item);
  })), _react["default"].createElement("div", null, "Without width on List, windowing plus variable item widths causes the layout to be unstable."));
};

exports.LongList = LongList;
LongList.parameters = {
  storyshots: false
};

var ExpandingList = function ExpandingList() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      showMore = _useState2[0],
      setShowMore = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      showMore2 = _useState4[0],
      setShowMore2 = _useState4[1];

  return _react["default"].createElement(_Layout.Space, {
    align: "start"
  }, _react["default"].createElement(_List.List, null, _react["default"].createElement(_ListItem.ListItem, null, "Cheddar"), _react["default"].createElement(_ListItem.ListItem, null, "Gouda"), showMore ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_ListItem.ListItem, null, "Swiss"), _react["default"].createElement(_ListItem.ListItem, null, "American"), _react["default"].createElement(_ListItem.ListItem, {
    onClick: function onClick() {
      return setShowMore(false);
    },
    description: "Keyboard nav should still work"
  }, "Show Less")) : _react["default"].createElement(_ListItem.ListItem, {
    onClick: function onClick() {
      return setShowMore(true);
    },
    description: "To test keyboard nav"
  }, "Show More")), _react["default"].createElement(_List.List, null, showMore2 ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_ListItem.ListItem, {
    key: "0"
  }, "Cheddar"), _react["default"].createElement(_ListItem.ListItem, {
    key: "1"
  }, "Swiss"), _react["default"].createElement(_ListItem.ListItem, {
    key: "2"
  }, "Gouda"), _react["default"].createElement(_ListItem.ListItem, {
    key: "3"
  }, "American"), _react["default"].createElement(_ListItem.ListItem, {
    key: "4",
    onClick: function onClick() {
      return setShowMore2(false);
    },
    description: "Replaces all items"
  }, "Show less")) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_ListItem.ListItem, {
    key: "5"
  }, "Cheddar"), _react["default"].createElement(_ListItem.ListItem, {
    key: "6"
  }, "Gouda"), _react["default"].createElement(_ListItem.ListItem, {
    key: "7",
    onClick: function onClick() {
      return setShowMore2(true);
    },
    description: "Replaces all items"
  }, "Show more"))));
};

exports.ExpandingList = ExpandingList;
ExpandingList.parameters = {
  storyshots: false
};

var DensityExample = function DensityExample(_ref) {
  var children = _ref.children,
      density = _ref.density;
  return _react["default"].createElement(_List.List, {
    iconGutter: true,
    density: density
  }, children);
};

var Density = function Density() {
  return _react["default"].createElement(_Layout.Grid, {
    columns: 5
  }, _react["default"].createElement(DensityExample, {
    density: 1
  }, listItems), _react["default"].createElement(DensityExample, null, listItems), _react["default"].createElement(DensityExample, {
    density: -1
  }, listItems), _react["default"].createElement(DensityExample, {
    density: -2
  }, listItems), _react["default"].createElement(DensityExample, {
    density: -3
  }, listItems));
};

exports.Density = Density;

var CheeseWrapper = function CheeseWrapper(_ref2) {
  var children = _ref2.children;
  return _react["default"].createElement("div", null, _react["default"].createElement("strong", null, children), " cheese");
};

var listItemsNonstringChildren = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_ListItem.ListItem, {
  icon: _react["default"].createElement(_materialOutlined.DateRange, null),
  description: "Orange-y"
}, _react["default"].createElement(CheeseWrapper, null, "Cheddar")), _react["default"].createElement(_ListItem.ListItem, {
  icon: _react["default"].createElement(_material.SubdirectoryArrowLeft, null),
  detail: "Netherlands"
}, _react["default"].createElement(CheeseWrapper, null, "Gouda")), _react["default"].createElement(_ListItem.ListItem, {
  selected: true
}, _react["default"].createElement(CheeseWrapper, null, "Mozzarella")), _react["default"].createElement(_ListItem.ListItem, null, _react["default"].createElement(CheeseWrapper, null, "Swiss")));

var DensityWithNonstringChildren = function DensityWithNonstringChildren() {
  return _react["default"].createElement(_Layout.Grid, {
    columns: 5
  }, _react["default"].createElement(DensityExample, {
    density: 1
  }, listItemsNonstringChildren), _react["default"].createElement(DensityExample, null, listItemsNonstringChildren), _react["default"].createElement(DensityExample, {
    density: -1
  }, listItemsNonstringChildren), _react["default"].createElement(DensityExample, {
    density: -2
  }, listItemsNonstringChildren), _react["default"].createElement(DensityExample, {
    density: -3
  }, listItemsNonstringChildren));
};

exports.DensityWithNonstringChildren = DensityWithNonstringChildren;

var KeyboardNavigation = function KeyboardNavigation() {
  return _react["default"].createElement(_List.List, null, _react["default"].createElement(_ListItem.ListItem, {
    itemRole: "none",
    detail: {
      content: _react["default"].createElement(_Button.IconButton, {
        label: "cheddar-button",
        icon: _react["default"].createElement(_materialOutlined.DateRange, null),
        tooltipDisabled: true
      }),
      options: {
        hoverDisclosure: true
      }
    }
  }, "Cheddar"), _react["default"].createElement(_ListItem.ListItem, {
    itemRole: "none",
    detail: _react["default"].createElement(_Button.IconButton, {
      label: "gouda-button",
      icon: _react["default"].createElement(_materialOutlined.DateRange, null),
      tooltipDisabled: true
    })
  }, "Gouda"));
};

exports.KeyboardNavigation = KeyboardNavigation;
KeyboardNavigation.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=List.stories.js.map