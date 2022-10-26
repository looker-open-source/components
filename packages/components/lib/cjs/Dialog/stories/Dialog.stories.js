"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Basic: true,
  Open: true,
  AnimationCallbacks: true,
  MediumContent: true,
  Height: true,
  PlacementTop: true,
  PlacementCover: true,
  LongContent: true,
  withCheckbox: true,
  ClickOutside: true,
  MultiFunctionButton: true,
  CloseIconButton: true,
  ActiveElement: true
};
Object.defineProperty(exports, "ActiveElement", {
  enumerable: true,
  get: function get() {
    return _ActiveElement["default"];
  }
});
exports.withCheckbox = exports["default"] = exports.PlacementTop = exports.PlacementCover = exports.Open = exports.MultiFunctionButton = exports.MediumContent = exports.LongContent = exports.Height = exports.CloseIconButton = exports.ClickOutside = exports.Basic = exports.AnimationCallbacks = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _DialogLongContent = require("../../fixtures/DialogLongContent");

var _DialogMediumContent = require("../../fixtures/DialogMediumContent");

var _SpaceVertical = require("../../Layout/Space/SpaceVertical");

var _CopyToClipboard = require("../../CopyToClipboard");

var _Button = require("../../Button");

var _Dialog = require("../Dialog");

var _dialogWidth = require("../dialogWidth");

var _DialogSurface = require("../DialogSurface");

var _Layout = require("../Layout");

var _Checkbox = require("../../Form/Inputs/Checkbox");

var _ActiveElement = _interopRequireDefault(require("./ActiveElement"));

var _Controlled = require("./Controlled");

Object.keys(_Controlled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Controlled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Controlled[key];
    }
  });
});

var _SaveChanges = require("./SaveChanges");

Object.keys(_SaveChanges).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SaveChanges[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SaveChanges[key];
    }
  });
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

Object.assign(_ActiveElement["default"], {
  parameters: {
    storyshots: {
      disable: true
    }
  }
});

var Template = function Template(args) {
  return _react["default"].createElement(_Dialog.Dialog, args, _react["default"].createElement(_Button.ButtonOutline, null, "Open Dialog"));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  content: 'Simple Content'
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
Open.parameters = {
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
var MediumContent = Template.bind({});
exports.MediumContent = MediumContent;
MediumContent.args = {
  content: _react["default"].createElement(_DialogMediumContent.DialogMediumContent, null),
  defaultOpen: true,
  id: 'CustomDialogId'
};
MediumContent.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
var Height = Template.bind({});
exports.Height = Height;
Height.args = _objectSpread(_objectSpread({}, MediumContent.args), {}, {
  height: '1000rem'
});
Height.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
var PlacementTop = Template.bind({});
exports.PlacementTop = PlacementTop;
PlacementTop.args = _objectSpread(_objectSpread({}, MediumContent.args), {}, {
  defaultOpen: true,
  placement: 'top'
});
PlacementTop.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
var PlacementCover = Template.bind({});
exports.PlacementCover = PlacementCover;
PlacementCover.args = _objectSpread(_objectSpread({}, MediumContent.args), {}, {
  defaultOpen: true,
  placement: 'cover'
});
PlacementCover.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
var LongContent = Template.bind({});
exports.LongContent = LongContent;
LongContent.args = {
  content: _react["default"].createElement(_DialogLongContent.DialogLongContent, null),
  defaultOpen: true
};
LongContent.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
var withCheckbox = Template.bind({});
exports.withCheckbox = withCheckbox;
withCheckbox.args = {
  content: _react["default"].createElement(_Layout.DialogLayout, {
    footer: "Footer",
    header: "Header"
  }, "The top line & bottom shadow should not be there.", _react["default"].createElement(_Checkbox.Checkbox, {
    checked: true
  }))
};
withCheckbox.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};

var ClickOutside = function ClickOutside() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("input", {
    type: "text",
    style: {
      position: 'absolute',
      right: '0',
      top: '0',
      zIndex: 100
    }
  }), _react["default"].createElement(_Dialog.Dialog, {
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "button 1"), _react["default"].createElement("button", null, "button 2"))
  }, _react["default"].createElement("button", null, "Open Dialog")));
};

exports.ClickOutside = ClickOutside;
ClickOutside.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};

var MultiFunctionButton = function MultiFunctionButton() {
  return _react["default"].createElement(_Dialog.Dialog, {
    content: _react["default"].createElement(_Layout.DialogLayout, {
      header: "A Dialog Example"
    }, _react["default"].createElement(_SpaceVertical.SpaceVertical, null, _react["default"].createElement(_CopyToClipboard.CopyToClipboard, {
      success: "Copied",
      content: "Copy content"
    }, _react["default"].createElement(_Button.Button, null, "Copy"))))
  }, _react["default"].createElement(_Button.Button, null, "Open Dialog"));
};

exports.MultiFunctionButton = MultiFunctionButton;
MultiFunctionButton.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};

var CloseIconButton = function CloseIconButton() {
  return _react["default"].createElement(_Dialog.Dialog, {
    content: _react["default"].createElement(_Layout.DialogLayout, {
      header: "Has a close icon button"
    }, "Some content")
  }, _react["default"].createElement(_Button.Button, null, "Open Dialog"));
};

exports.CloseIconButton = CloseIconButton;
CloseIconButton.parameters = {
  storyshots: {
    disable: true
  }
};
var _default = {
  argTypes: _objectSpread(_objectSpread({}, _storybook.defaultArgTypes), {}, {
    placement: {
      control: {
        options: _DialogSurface.dialogPlacements,
        type: 'select'
      }
    },
    width: {
      control: {
        options: Object.keys(_dialogWidth.dialogSizes),
        type: 'select'
      }
    }
  }),
  component: _Dialog.Dialog,
  title: 'Dialog'
};
exports["default"] = _default;
//# sourceMappingURL=Dialog.stories.js.map