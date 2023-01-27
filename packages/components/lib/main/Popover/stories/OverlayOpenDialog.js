"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = OverlayOpenDialog;
var _components = require("@looker/components");
var _componentsProviders = require("@looker/components-providers");
var _react = _interopRequireWildcard(require("react"));
var _ = require("..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function OverlayOpenDialog() {
  var _useToggle = (0, _components.useToggle)(),
    value = _useToggle.value,
    setOn = _useToggle.setOn,
    setOff = _useToggle.setOff;
  return _react["default"].createElement(_components.SpaceVertical, {
    mt: "large",
    align: "start",
    width: 1000,
    mx: "auto"
  }, _react["default"].createElement(_components.Paragraph, null, "Centered layout would be affected by the scrollbar \"jump\" bug on scroll lock."), _react["default"].createElement(_components.Heading, null, "Popover Opening a Dialog"), _react["default"].createElement(_.Popover, {
    content: _react["default"].createElement(_components.SpaceVertical, {
      p: "u5"
    }, _react["default"].createElement(_components.Button, {
      onClick: setOn
    }, "Open Dialog"), _react["default"].createElement(_components.Box, {
      height: 500
    }))
  }, _react["default"].createElement(_components.Button, null, "Open Popover")), _react["default"].createElement(_components.Dialog, {
    isOpen: value,
    onClose: setOff
  }, _react["default"].createElement(DialogInner, null)), _react["default"].createElement(_components.Heading, null, "Menu Opening a Dialog"), _react["default"].createElement(_components.Menu, {
    content: _react["default"].createElement(_components.MenuItem, {
      onClick: setOn
    }, "Open Dialog")
  }, _react["default"].createElement(_components.Tooltip, {
    content: "Select your favorite kind"
  }, _react["default"].createElement(_components.Button, {
    mt: "medium"
  }, "Open Menu"))), _react["default"].createElement(_components.Heading, null, "Opening a Dialog Directly"), _react["default"].createElement(_components.Button, {
    onClick: setOn
  }, "Open Dialog"), _react["default"].createElement(_components.Box, {
    height: 1000
  }));
}
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
  return _react["default"].createElement(_components.DialogContent, null, _react["default"].createElement(_components.SpaceVertical, {
    align: "start"
  }, _react["default"].createElement(_components.Paragraph, null, "Scroll lock can be disabled via ScrollLockContext but due to fixed positioning in Dialog, there will be a scrollbar jump."), _react["default"].createElement(_components.Button, {
    onClick: toggleScrollLock
  }, "Toggle Scroll Lock"), _react["default"].createElement(_components.Button, {
    onClick: toggleFocusTrap
  }, "Toggle Focus Trap"), _react["default"].createElement(_components.Paragraph, null, "Try opening the Select and picking an option:"), _react["default"].createElement(_components.FieldSelect, {
    label: "Default Value",
    width: 300,
    options: options,
    "aria-label": "Fruits",
    defaultValue: "1"
  }), _react["default"].createElement(_components.Paragraph, null, "Try clicking the button:"), _react["default"].createElement(_components.Button, {
    onClick: openAlert
  }, "Open Alert"), _react["default"].createElement(_components.Box, {
    height: 500
  })));
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
//# sourceMappingURL=OverlayOpenDialog.js.map