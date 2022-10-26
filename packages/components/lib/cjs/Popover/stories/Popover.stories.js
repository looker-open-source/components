"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Basic: true,
  PopoverWithLayout: true,
  PopoverWithLayoutBasic: true,
  PopoverFocusTrap: true,
  OverlayOpenDialog: true,
  RenderProps: true,
  RenderPropsSpread: true,
  Placement: true,
  MovingTarget: true,
  MouseUp: true,
  MultiFunctionButton: true,
  PopoverFieldRadioGroup: true
};
exports["default"] = exports.RenderPropsSpread = exports.RenderProps = exports.PopoverWithLayoutBasic = exports.PopoverWithLayout = exports.PopoverFocusTrap = exports.PopoverFieldRadioGroup = exports.Placement = exports.OverlayOpenDialog = exports.MultiFunctionButton = exports.MovingTarget = exports.MouseUp = exports.Basic = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _componentsProviders = require("@looker/components-providers");

var _storybook = require("@looker/storybook");

var _ = require("../..");

var _Tooltip = require("../../Tooltip");

var _Popover = require("../Popover");

var _PopoverContent = require("../Layout/PopoverContent");

var _usePopover2 = require("../usePopover");

var _Constitution = require("../../fixtures/Constitution");

var _OverflowExamples = require("./OverflowExamples");

Object.keys(_OverflowExamples).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _OverflowExamples[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _OverflowExamples[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Popover.Popover,
  title: 'Popover'
};
exports["default"] = _default;

var Basic = function Basic() {
  return _react["default"].createElement(_Popover.Popover, {
    content: _react["default"].createElement(_PopoverContent.PopoverContent, null, "Some content")
  }, _react["default"].createElement(_.Button, null, "Open"));
};

exports.Basic = Basic;
Basic.parameters = {
  storyshots: {
    disable: true
  }
};

var PopoverWithLayout = function PopoverWithLayout() {
  return _react["default"].createElement(_Popover.Popover, {
    width: 640,
    content: _react["default"].createElement(_.PopoverLayout, {
      header: "Header text",
      footer: true
    }, _react["default"].createElement(_Constitution.Constitution, null))
  }, _react["default"].createElement(_.Button, null, "Open"));
};

exports.PopoverWithLayout = PopoverWithLayout;
PopoverWithLayout.parameters = {
  storyshots: {
    disable: true
  }
};

var PopoverWithLayoutBasic = function PopoverWithLayoutBasic() {
  return _react["default"].createElement(_Popover.Popover, {
    width: 640,
    content: _react["default"].createElement(_.PopoverLayout, {
      header: "Header text",
      footer: false
    }, _react["default"].createElement(_Constitution.ConstitutionShort, {
      fontSize: "small"
    }))
  }, _react["default"].createElement(_.Button, null, "Open Popover"));
};

exports.PopoverWithLayoutBasic = PopoverWithLayoutBasic;
PopoverWithLayoutBasic.parameters = {
  storyshots: {
    disable: true
  }
};
var options = [{
  label: 'Apples',
  value: '1'
}, {
  label: 'Bananas',
  value: '2'
}, {
  label: 'Oranges',
  value: '3'
}, {
  label: 'Pineapples',
  value: '4'
}, {
  label: 'Kiwis',
  value: '5'
}, {
  label: 'Apples2',
  value: '12'
}, {
  label: 'Bananas2',
  value: '22'
}, {
  label: 'Oranges2',
  value: '32'
}, {
  label: 'Pineapples2',
  value: '42'
}, {
  label: 'Kiwis3',
  value: '52'
}, {
  label: 'Apples3',
  value: '13'
}, {
  label: 'Bananas3',
  value: '23'
}, {
  label: 'Oranges3',
  value: '33'
}, {
  label: 'Pineapples3',
  value: '43'
}, {
  label: 'Kiwis3',
  value: '53'
}, {
  label: 'Apples4',
  value: '14'
}, {
  label: 'Bananas4',
  value: '24'
}, {
  label: 'Oranges4',
  value: '34'
}, {
  label: 'Pineapples4',
  value: '44'
}, {
  label: 'Kiwis4',
  value: '54'
}, {
  label: 'Apples5',
  value: '15'
}, {
  label: 'Bananas5',
  value: '25'
}, {
  label: 'Oranges5',
  value: '35'
}, {
  label: 'Pineapples5',
  value: '45'
}, {
  label: 'Kiwis5',
  value: '55'
}];

var PopoverFocusTrap = function PopoverFocusTrap() {
  var _useToggle = (0, _.useToggle)(false),
      value = _useToggle.value,
      toggle = _useToggle.toggle;

  function getButtonAlert(text) {
    return function () {
      return alert(text);
    };
  }

  return _react["default"].createElement(_.SpaceVertical, {
    mt: "large"
  }, _react["default"].createElement(_.Heading, null, "Focus Trap Test"), _react["default"].createElement(_.FieldToggleSwitch, {
    on: value,
    onChange: function onChange() {
      return toggle();
    },
    label: "Cancel Click Outside"
  }), _react["default"].createElement(_.Space, null, _react["default"].createElement(_Popover.Popover, {
    cancelClickOutside: value,
    content: _react["default"].createElement(_PopoverContent.PopoverContent, {
      p: "u5",
      width: "360px"
    }, _react["default"].createElement(_.Paragraph, null, "Does tabbing focus only loop through these 3 buttons & Select?"), _react["default"].createElement(_.Paragraph, null, "Does clicking (or mousedown) each trigger an alert?"), _react["default"].createElement(_.Button, {
      mr: "small",
      onClick: getButtonAlert('First')
    }, "First"), _react["default"].createElement(_.Button, {
      mr: "small",
      onClick: getButtonAlert('Second')
    }, "Second"), _react["default"].createElement(_.Button, {
      mt: "small",
      mb: "medium",
      onMouseDown: getButtonAlert('Third')
    }, "Third (mousedown)"), _react["default"].createElement(_.FieldSelect, {
      label: "Default Value",
      width: 300,
      options: options,
      "aria-label": "Fruits",
      defaultValue: "1"
    }), _react["default"].createElement(_.Paragraph, null, "Does it scroll here when the Select is closed?"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"))
  }, _react["default"].createElement(_.Button, null, "Open Focus Trap Test Popover")), _react["default"].createElement(_.ButtonOutline, {
    onClick: function onClick() {
      return alert("You clicked the button!");
    }
  }, "Click me with the popover open")), _react["default"].createElement(_.Paragraph, null, "Does it scroll here when the Popover is closed?"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"), _react["default"].createElement(_.Paragraph, null, "Long text"));
};

exports.PopoverFocusTrap = PopoverFocusTrap;
PopoverFocusTrap.parameters = {
  storyshots: {
    disable: true
  }
};

var OverlayOpenDialog = function OverlayOpenDialog() {
  var _useToggle2 = (0, _.useToggle)(),
      value = _useToggle2.value,
      setOn = _useToggle2.setOn,
      setOff = _useToggle2.setOff;

  return _react["default"].createElement(_.SpaceVertical, {
    mt: "large",
    align: "start",
    width: 1000,
    mx: "auto"
  }, _react["default"].createElement(_.Paragraph, null, "Centered layout would be affected by the scrollbar \"jump\" bug on scroll lock."), _react["default"].createElement(_.Heading, null, "Popover Opening a Dialog"), _react["default"].createElement(_Popover.Popover, {
    content: _react["default"].createElement(_.SpaceVertical, {
      p: "u5"
    }, _react["default"].createElement(_.Button, {
      onClick: setOn
    }, "Open Dialog"), _react["default"].createElement(_.Box2, {
      height: 500
    }))
  }, _react["default"].createElement(_.Button, null, "Open Popover")), _react["default"].createElement(_.Dialog, {
    isOpen: value,
    onClose: setOff
  }, _react["default"].createElement(DialogInner, null)), _react["default"].createElement(_.Heading, null, "Menu Opening a Dialog"), _react["default"].createElement(_.Menu, {
    content: _react["default"].createElement(_.MenuItem, {
      onClick: setOn
    }, "Open Dialog")
  }, _react["default"].createElement(_Tooltip.Tooltip, {
    content: "Select your favorite kind"
  }, _react["default"].createElement(_.Button, {
    mt: "medium"
  }, "Open Menu"))), _react["default"].createElement(_.Heading, null, "Opening a Dialog Directly"), _react["default"].createElement(_.Button, {
    onClick: setOn
  }, "Open Dialog"), _react["default"].createElement(_.Box2, {
    height: 1000
  }));
};

exports.OverlayOpenDialog = OverlayOpenDialog;
OverlayOpenDialog.parameters = {
  storyshots: {
    disable: true
  }
};

var DialogInner = function DialogInner() {
  var _useContext = (0, _react.useContext)(_componentsProviders.ScrollLockContext),
      activeLockRef = _useContext.activeTrapRef,
      disableCurrentLock = _useContext.disableCurrentTrap,
      enableCurrentLock = _useContext.enableCurrentTrap;

  var toggleScrollLock = function toggleScrollLock() {
    if (activeLockRef && activeLockRef.current) {
      disableCurrentLock === null || disableCurrentLock === void 0 ? void 0 : disableCurrentLock();
    } else {
      enableCurrentLock === null || enableCurrentLock === void 0 ? void 0 : enableCurrentLock();
    }
  };

  var _useContext2 = (0, _react.useContext)(_componentsProviders.FocusTrapContext),
      activeTrapRef = _useContext2.activeTrapRef,
      disableCurrentTrap = _useContext2.disableCurrentTrap,
      enableCurrentTrap = _useContext2.enableCurrentTrap;

  var toggleFocusTrap = function toggleFocusTrap() {
    if (activeTrapRef && activeTrapRef.current) {
      disableCurrentTrap === null || disableCurrentTrap === void 0 ? void 0 : disableCurrentTrap();
    } else {
      enableCurrentTrap === null || enableCurrentTrap === void 0 ? void 0 : enableCurrentTrap();
    }
  };

  function openAlert() {
    alert("It's working!");
  }

  return _react["default"].createElement(_.DialogContent, null, _react["default"].createElement(_.SpaceVertical, {
    align: "start"
  }, _react["default"].createElement(_.Paragraph, null, "Scroll lock can be disabled via ScrollLockContext but due to fixed positioning in Dialog, there will be a scrollbar jump."), _react["default"].createElement(_.Button, {
    onClick: toggleScrollLock
  }, "Toggle Scroll Lock"), _react["default"].createElement(_.Button, {
    onClick: toggleFocusTrap
  }, "Toggle Focus Trap"), _react["default"].createElement(_.Paragraph, null, "Try opening the Select and picking an option:"), _react["default"].createElement(_.FieldSelect, {
    label: "Default Value",
    width: 300,
    options: options,
    "aria-label": "Fruits",
    defaultValue: "1"
  }), _react["default"].createElement(_.Paragraph, null, "Try clicking the button:"), _react["default"].createElement(_.Button, {
    onClick: openAlert
  }, "Open Alert"), _react["default"].createElement(_.Box2, {
    height: 500
  })));
};

var popoverContent = _react["default"].createElement(_PopoverContent.PopoverContent, null, _react["default"].createElement(_.Paragraph, {
  width: 300,
  p: "u10"
}, "\uD83D\uDC4B Hello, I am a popover!"));

var RenderProps = function RenderProps() {
  return _react["default"].createElement(_Popover.Popover, {
    content: popoverContent
  }, function (props) {
    return _react["default"].createElement("button", props, "Test");
  });
};

exports.RenderProps = RenderProps;
RenderProps.parameters = {
  storyshots: {
    disable: true
  }
};

var RenderPropsSpread = function RenderPropsSpread() {
  return _react["default"].createElement(_Popover.Popover, {
    content: popoverContent
  }, function (props) {
    return _react["default"].createElement("button", props, "Test");
  });
};

exports.RenderPropsSpread = RenderPropsSpread;
RenderPropsSpread.parameters = {
  storyshots: {
    disable: true
  }
};

var Placement = function Placement() {
  var popoverContent = _react["default"].createElement(_PopoverContent.PopoverContent, null, _react["default"].createElement(_.Paragraph, {
    width: 300,
    p: "u10"
  }, "\uD83D\uDC4B Hello, I am a popover!"));

  return _react["default"].createElement(_.Box2, {
    mt: "large"
  }, _react["default"].createElement(_.Heading, null, "Placement"), _react["default"].createElement(_.Box2, {
    my: "medium"
  }, _react["default"].createElement(_Popover.Popover, {
    content: popoverContent
  }, _react["default"].createElement(_.Button, null, "Default")), _react["default"].createElement(_Popover.Popover, {
    content: popoverContent
  }, _react["default"].createElement(_.Button, null, "Default"))));
};

exports.Placement = Placement;
Placement.parameters = {
  storyshots: {
    disable: true
  }
};

var MovingTargetInner = function MovingTargetInner() {
  var _useToggle3 = (0, _.useToggle)(),
      value = _useToggle3.value,
      toggle = _useToggle3.toggle;

  var _usePopover = (0, _usePopover2.usePopover)({
    content: _react["default"].createElement(_PopoverContent.PopoverContent, {
      p: "u5",
      width: "360px"
    }, _react["default"].createElement(_.Paragraph, null, "The anchor is moving around so the Popover position must be updated via popperInstanceRef.current.update.")),
    placement: 'right-end'
  }),
      popover = _usePopover.popover,
      popperInstanceRef = _usePopover.popperInstanceRef,
      open = _usePopover.open,
      ref = _usePopover.ref,
      isOpen = _usePopover.isOpen;

  (0, _react.useEffect)(function () {
    popperInstanceRef.current && popperInstanceRef.current.update();
  }, [popperInstanceRef, value]);
  (0, _react.useEffect)(function () {
    var _int = setInterval(function () {
      toggle();
    }, 6000);

    return function () {
      clearInterval(_int);
    };
  }, [toggle]);
  return _react["default"].createElement(_.Box2, {
    mt: "large"
  }, _react["default"].createElement(_.Heading, null, "Moving Target"), popover, _react["default"].createElement(_.Box2, {
    mt: value ? 'xxxlarge' : 'medium',
    border: true,
    width: 150,
    p: "u3",
    cursor: "pointer",
    height: value ? 80 : undefined,
    onClick: open,
    ref: ref,
    className: isOpen ? 'active' : ''
  }, "Open Popover"));
};

var MovingTarget = function MovingTarget() {
  return _react["default"].createElement(MovingTargetInner, null);
};

exports.MovingTarget = MovingTarget;
MovingTarget.parameters = {
  storyshots: {
    disable: true
  }
};

var MouseUp = function MouseUp() {
  return _react["default"].createElement(_.SpaceVertical, null, _react["default"].createElement(_.Paragraph, null, "Test that the the 1st click outside is cancelled and that clicking the Popover's trigger a 2nd time closes the Popover"), _react["default"].createElement(_.Paragraph, null, "Previously, the useCapture = true on the mouseup listener caused the click outside behavior to break on any page that has a React onMouseUp on any element."), _react["default"].createElement(_.Space, null, _react["default"].createElement(_Popover.Popover, {
    content: "Popover 1"
  }, _react["default"].createElement(_.Button, null, "Open 1st Popover")), _react["default"].createElement(_Popover.Popover, {
    content: "Popover 2"
  }, _react["default"].createElement(_.Button, null, "Open 2nd Popover")), _react["default"].createElement(_.Button, {
    onClick: function onClick() {
      return alert('I should be canceled if a Popover was open');
    }
  }, "Click"), _react["default"].createElement(_.Button, {
    onMouseUp: function onMouseUp() {
      return alert('A simple onMouseUp');
    }
  }, "onMouseUp")));
};

exports.MouseUp = MouseUp;
MouseUp.parameters = {
  storyshots: {
    disable: true
  }
};

var MultiFunctionButton = function MultiFunctionButton() {
  return _react["default"].createElement(_Popover.Popover, {
    content: _react["default"].createElement(_PopoverContent.PopoverContent, null, _react["default"].createElement(_.CopyToClipboard, {
      success: "Copied",
      content: "Copy content"
    }, _react["default"].createElement(_.Button, null, "Copy")))
  }, _react["default"].createElement(_.Button, null, "Open Popover"));
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

var Wrapper = function Wrapper() {
  var _React$useState = _react["default"].useState(''),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useContext = _react["default"].useContext(_.DialogContext),
      closeModal = _React$useContext.closeModal;

  return _react["default"].createElement(_.Box2, {
    pt: "u3",
    width: "100%"
  }, _react["default"].createElement(_.FieldCheckbox, {
    label: "Checkbox",
    value: "checked"
  }), _react["default"].createElement(_.Box2, {
    pl: "u6",
    pt: "u2"
  }, _react["default"].createElement(_.FieldRadioGroup, {
    options: [{
      label: 'One',
      value: '1'
    }, {
      label: 'Two',
      value: '2'
    }, {
      label: 'Three',
      value: '3'
    }],
    value: value,
    onChange: setValue
  })), _react["default"].createElement(_.Button, {
    onClick: closeModal
  }, "Done"));
};

var PopoverFieldRadioGroup = function PopoverFieldRadioGroup() {
  return _react["default"].createElement(_.ComponentsProvider, null, _react["default"].createElement(_.Box2, {
    p: "ui1",
    className: "App"
  }, _react["default"].createElement(_Popover.Popover, {
    "aria-haspopup": true,
    width: "300px",
    content: _react["default"].createElement(Wrapper, null)
  }, _react["default"].createElement(_.Button, null, "Open Popover"))));
};

exports.PopoverFieldRadioGroup = PopoverFieldRadioGroup;
PopoverFieldRadioGroup.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Popover.stories.js.map