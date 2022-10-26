"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Basic: true,
  Open: true,
  PlacementLeft: true,
  Width: true,
  AnimationCallbacks: true
};
exports["default"] = exports.Width = exports.PlacementLeft = exports.Open = exports.Basic = exports.AnimationCallbacks = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _DialogLongContent = require("../../fixtures/DialogLongContent");

var _dialogWidth = require("../../Dialog/dialogWidth");

var _Drawer = require("../Drawer");

var _Button = require("../../Button");

var _useDrawer = require("./useDrawer.stories");

Object.keys(_useDrawer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useDrawer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useDrawer[key];
    }
  });
});

var _renderProps = require("./renderProps.stories");

Object.keys(_renderProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _renderProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _renderProps[key];
    }
  });
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  return _react["default"].createElement(_Drawer.Drawer, (0, _extends2["default"])({}, args, {
    content: _react["default"].createElement(_DialogLongContent.DialogLongContent, null)
  }), _react["default"].createElement(_Button.ButtonOutline, null, "Open Drawer"));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {};
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
var Open = Template.bind({});
exports.Open = Open;
Open.args = {
  defaultOpen: true
};
Open.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
var PlacementLeft = Template.bind({});
exports.PlacementLeft = PlacementLeft;
PlacementLeft.args = {
  defaultOpen: true,
  placement: 'left'
};
PlacementLeft.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
var Width = Template.bind({});
exports.Width = Width;
Width.args = _objectSpread(_objectSpread({}, Open.args), {}, {
  width: '50rem'
});
Width.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
var AnimationCallbacks = Template.bind({});
exports.AnimationCallbacks = AnimationCallbacks;
AnimationCallbacks.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  onAfterClose: function onAfterClose() {
    console.log('Close');
  },
  onAfterOpen: function onAfterOpen() {
    console.log('Open');
  }
});
AnimationCallbacks.parameters = {
  storyshots: {
    disable: true
  }
};
var _default = {
  argTypes: _objectSpread(_objectSpread({}, _storybook.defaultArgTypes), {}, {
    width: {
      control: {
        options: Object.keys(_dialogWidth.dialogSizes),
        type: 'radio'
      }
    }
  }),
  component: _Drawer.Drawer,
  title: 'Drawer'
};
exports["default"] = _default;
//# sourceMappingURL=Drawer.stories.js.map