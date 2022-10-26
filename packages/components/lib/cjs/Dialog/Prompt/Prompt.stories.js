"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Hook = exports.Basic = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _Button = require("../../Button");

var _Prompt = require("./Prompt");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Prompt.Prompt,
  title: 'Prompt'
};
exports["default"] = _default;

var Basic = function Basic() {
  return _react["default"].createElement(_Prompt.Prompt, {
    cancelColor: "neutral",
    cancelLabel: 'Not into cheese',
    title: 'Choose a cheese!',
    inputLabel: 'Name of Cheese',
    saveLabel: 'Save',
    onCancel: function onCancel(close) {
      alert('Prompt closed');
      close();
    },
    onSave: function onSave(value, close) {
      alert("You chose ".concat(value));
      close();
    },
    secondary: _react["default"].createElement(_Button.Button, {
      onClick: function onClick() {
        return alert('Secondary clicked');
      }
    }, "Secondary Cheese")
  }, function (open) {
    return _react["default"].createElement(_Button.Button, {
      onClick: open
    }, "Prompt");
  });
};

exports.Basic = Basic;
Basic.parameters = {
  storyshots: {
    disable: true
  }
};

var Hook = function Hook() {
  var _useState = (0, _react.useState)('pizza'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      tracking = _useState2[0],
      setTracking = _useState2[1];

  var _usePrompt = (0, _Prompt.usePrompt)({
    clearOnCancel: true,
    defaultValue: tracking,
    inputLabel: 'Name of Cheese',
    onSave: function onSave(value, close) {
      close();
      setTracking("".concat(value, " saved"));
    },
    saveLabel: 'Save',
    title: 'Choose a cheese!'
  }),
      _usePrompt2 = (0, _slicedToArray2["default"])(_usePrompt, 2),
      prompt = _usePrompt2[0],
      open = _usePrompt2[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("p", null, "Value: ", tracking), prompt, _react["default"].createElement(_Button.Button, {
    onClick: open
  }, "usePrompt"));
};

exports.Hook = Hook;
Hook.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Prompt.stories.js.map