"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeSelect = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _components = require("@looker/components");
var _react = _interopRequireDefault(require("react"));
var _TreeResults = require("./TreeResults");
var _FieldSearch = require("./FieldSearch");
var _TreeSelectPopup = require("./TreeSelectPopup");
var _excluded = ["disabled", "disabledText", "placeholder", "label", "tree", "shortcutTree", "withDropdown", "treeHeight", "searchInputValue", "selectedSection", "showSelectedSection", "onSelectedFieldChange"];
var TreeSelect = function TreeSelect(_ref) {
  var disabled = _ref.disabled,
    disabledText = _ref.disabledText,
    placeholder = _ref.placeholder,
    label = _ref.label,
    tree = _ref.tree,
    shortcutTree = _ref.shortcutTree,
    _ref$withDropdown = _ref.withDropdown,
    withDropdown = _ref$withDropdown === void 0 ? true : _ref$withDropdown,
    treeHeight = _ref.treeHeight,
    valueFromProps = _ref.searchInputValue,
    selectedSection = _ref.selectedSection,
    _ref$showSelectedSect = _ref.showSelectedSection,
    showSelectedSection = _ref$showSelectedSect === void 0 ? false : _ref$showSelectedSect,
    onSelectedFieldChange = _ref.onSelectedFieldChange,
    flexProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    inputElement = _React$useState2[0],
    setInputElement = _React$useState2[1];
  var isInputting = _react["default"].useRef(false);
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    isOpen = _React$useState4[0],
    setOpen = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(valueFromProps || ''),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    inputValue = _React$useState6[0],
    setInputValue = _React$useState6[1];
  var fieldSearchInputId = (0, _components.useID)();
  _react["default"].useEffect(function () {
    if (!isInputting.current) {
      if (showSelectedSection && !isOpen) {
        setInputValue(valueFromProps && selectedSection ? "".concat(selectedSection, " \u2022 ").concat(valueFromProps) : '');
      } else {
        setInputValue(valueFromProps || '');
      }
    }
  }, [showSelectedSection, isOpen, valueFromProps, selectedSection]);
  var setOpenTrue = function setOpenTrue() {
    return setOpen(true);
  };
  var handleClick = function handleClick() {
    if (!isOpen && !disabled) {
      setOpenTrue();
      if (valueFromProps) setInputValue(valueFromProps);
    }
  };
  var handleFieldClick = function handleFieldClick(payload) {
    if (onSelectedFieldChange) {
      onSelectedFieldChange(payload);
    }
    setOpen(false);
  };
  var onChange = function onChange(event) {
    isInputting.current = true;
    setInputValue(event.currentTarget.value);
    setOpenTrue();
    window.requestAnimationFrame(function () {
      return isInputting.current = false;
    });
  };
  var innerTree = _react["default"].createElement(_TreeResults.TreeResults, {
    shortcutTree: shortcutTree,
    tree: tree,
    onSelectedFieldChange: handleFieldClick,
    searchInputValue: inputValue
  });
  return _react["default"].createElement(_components.SpaceVertical, {
    align: "stretch"
  }, _react["default"].createElement(_FieldSearch.FieldSearch, {
    disabled: disabled,
    disabledText: disabledText,
    fieldSearchInputId: fieldSearchInputId,
    height: _components.inputHeight,
    label: label,
    onChange: onChange,
    onClick: handleClick,
    placeholder: placeholder,
    ref: setInputElement,
    value: inputValue,
    width: "100%",
    isOpen: isOpen,
    withDropdown: withDropdown,
    showSelectedSection: showSelectedSection
  }), withDropdown ? _react["default"].createElement(_TreeSelectPopup.TreeSelectPopup, {
    anchorElement: inputElement,
    isOpen: isOpen,
    setOpen: setOpen
  }, innerTree) : _react["default"].createElement(_components.Box, {
    overflow: "auto",
    height: treeHeight
  }, innerTree));
};
exports.TreeSelect = TreeSelect;
//# sourceMappingURL=TreeSelect.js.map