"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveChanges = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _2 = require("../..");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SaveChanges = function SaveChanges() {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var hasUnsavedChanges = function hasUnsavedChanges() {
    return name !== '';
  };

  var handleConfirm = function handleConfirm(close) {
    setName('');
    close();
  };

  var _useConfirm = (0, _.useConfirm)({
    buttonColor: 'critical',
    cancelLabel: 'Go Back',
    confirmLabel: 'Discard Changes',
    message: 'Are you sure you want to close the dialog? Unsaved changes will be lost.',
    onCancel: function onCancel(close) {
      close();
    },
    onConfirm: handleConfirm,
    title: 'Discard Changes?',
    width: '500px'
  }),
      _useConfirm2 = (0, _slicedToArray2["default"])(_useConfirm, 2),
      confirm = _useConfirm2[0],
      openConfirmation = _useConfirm2[1];

  var handleSave = function handleSave() {
    setName('');
    setIsOpen(false);
  };

  var handleCancel = function handleCancel() {
    setIsOpen(false);

    if (hasUnsavedChanges()) {
      openConfirmation();
    }
  };

  var handleChange = function handleChange(event) {
    return setName(event.currentTarget.value);
  };

  var footer = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_2.Button, {
    onClick: handleSave
  }, "Save"), _react["default"].createElement(_2.ButtonTransparent, {
    onClick: handleCancel
  }, "Cancel"));

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Dialog, {
    isOpen: isOpen,
    onClose: handleCancel,
    content: _react["default"].createElement(_.DialogLayout, {
      footer: footer,
      header: "Edit Name"
    }, _react["default"].createElement(_2.Form, {
      onSubmit: handleSave
    }, _react["default"].createElement(_2.FieldText, {
      label: "Name",
      onChange: handleChange,
      value: name,
      description: "Enter name, then click \"Cancel\" to trigger confirmation"
    })))
  }), _react["default"].createElement("button", {
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, "Tell us your name..."), confirm);
};

exports.SaveChanges = SaveChanges;
SaveChanges.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=SaveChanges.js.map