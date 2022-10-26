"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinValues = exports.InputChipsBaseInternal = exports.InputChipsBase = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _difference = _interopRequireDefault(require("lodash/difference"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Chip = require("../../../Chip");

var _height = require("../height");

var _InputText = require("../InputText");

var _AdvancedInputControls = require("../AdvancedInputControls");

var _utils = require("../../../utils");

var _VisuallyHidden = require("../../../VisuallyHidden");

var _templateObject, _templateObject2, _templateObject3;

var _excluded = ["values", "onChange", "onKeyDown", "onFocus", "chipIconLabel", "clearIconLabel", "inputValue", "inputReadOnly", "onInputChange", "formatTextToCopy", "disabled", "noErrorIcon", "validationType", "onClear", "isVisibleOptions", "showCaret", "isClearable", "readOnly", "summary", "removeOnBackspace", "formatChip", "height"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var joinValues = function joinValues(selectedValues) {
  return selectedValues.join(',');
};

exports.joinValues = joinValues;

function isCtrlCmdPressed(event) {
  return event.ctrlKey || event.metaKey;
}

function focusInput(inputRef) {
  inputRef.current && inputRef.current.focus();
}

var InputChipsBaseInternal = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var values = _ref.values,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      onFocus = _ref.onFocus,
      chipIconLabel = _ref.chipIconLabel,
      clearIconLabel = _ref.clearIconLabel,
      inputValue = _ref.inputValue,
      inputReadOnly = _ref.inputReadOnly,
      onInputChange = _ref.onInputChange,
      _ref$formatTextToCopy = _ref.formatTextToCopy,
      formatTextToCopy = _ref$formatTextToCopy === void 0 ? joinValues : _ref$formatTextToCopy,
      disabled = _ref.disabled,
      noErrorIcon = _ref.noErrorIcon,
      validationType = _ref.validationType,
      onClear = _ref.onClear,
      isVisibleOptions = _ref.isVisibleOptions,
      _ref$showCaret = _ref.showCaret,
      showCaret = _ref$showCaret === void 0 ? false : _ref$showCaret,
      _ref$isClearable = _ref.isClearable,
      isClearable = _ref$isClearable === void 0 ? true : _ref$isClearable,
      readOnly = _ref.readOnly,
      summary = _ref.summary,
      _ref$removeOnBackspac = _ref.removeOnBackspace,
      removeOnBackspace = _ref$removeOnBackspac === void 0 ? true : _ref$removeOnBackspac,
      formatChip = _ref.formatChip,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 'auto' : _ref$height,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var internalRef = (0, _react.useRef)(null);
  var hiddenInputRef = (0, _react.useRef)(null);
  var ref = (0, _utils.useForkedRef)(forwardedRef, internalRef);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selectedValues = _useState2[0],
      setSelectedValues = _useState2[1];

  function selectAll() {
    setSelectedValues((0, _toConsumableArray2["default"])(values));
  }

  function deselectAll() {
    setSelectedValues([]);
  }

  function selectPrevious(e) {
    if (selectedValues.length === 0) {
      setSelectedValues([values[values.length - 1]]);
    } else {
      var curIndex = values.indexOf(selectedValues[0]);

      if (curIndex > 0) {
        var newSelectedValue = values[curIndex - 1];

        if (e.shiftKey) {
          setSelectedValues([newSelectedValue].concat((0, _toConsumableArray2["default"])(selectedValues)));
        } else {
          setSelectedValues([newSelectedValue]);
        }
      }
    }
  }

  function selectNext(e) {
    if (selectedValues.length > 0) {
      var curIndex = values.indexOf(selectedValues[selectedValues.length - 1]);

      if (curIndex === values.length - 1) {
        focusInput(internalRef);
      } else {
        var newSelectedValue = values[curIndex + 1];

        if (e.shiftKey) {
          setSelectedValues([].concat((0, _toConsumableArray2["default"])(selectedValues), [newSelectedValue]));
        } else {
          setSelectedValues([newSelectedValue]);
        }
      }
    }
  }

  function deleteSelected() {
    if (!readOnly) {
      var newValues = (0, _difference["default"])(values, selectedValues);
      onChange(newValues);
      focusInput(internalRef);
    }
  }

  function stopPropagation(e) {
    e.stopPropagation();
  }

  function handleDeleteChip(value, e) {
    var newValues = values.filter(function (v) {
      return value !== v;
    });
    onChange(newValues);
    focusInput(internalRef);
    e && e.stopPropagation();
  }

  function handleChipClick(value) {
    return function (e) {
      focusInput(hiddenInputRef);
      e.stopPropagation();

      if (selectedValues.length > 0) {
        if (isCtrlCmdPressed(e)) {
          var newSelectedValues = values.reduce(function (acc, currentValue) {
            var isSelected = selectedValues.includes(currentValue);

            if (isSelected && currentValue !== value || !isSelected && currentValue === value) {
              return [].concat((0, _toConsumableArray2["default"])(acc), [currentValue]);
            }

            return acc;
          }, []);
          setSelectedValues(newSelectedValues);
          return;
        } else if (e.shiftKey) {
          var newIndex = values.indexOf(value);
          var previousLow = values.indexOf(selectedValues[0]);
          var previousHigh = values.indexOf(selectedValues[selectedValues.length - 1]);

          if (newIndex > previousHigh) {
            setSelectedValues(values.slice(previousLow, newIndex + 1));
          } else if (newIndex < previousLow) {
            setSelectedValues(values.slice(newIndex, previousHigh + 1));
          }

          return;
        }
      }

      setSelectedValues([value]);
    };
  }

  function handleKeyDown(e) {
    if (inputValue === '') {
      if (e.key === 'Backspace' && removeOnBackspace && !readOnly) {
        inputValue === '' && handleDeleteChip(values[values.length - 1]);
      } else if (isCtrlCmdPressed(e) && e.key === 'a') {
        focusInput(hiddenInputRef);
        selectAll();
      } else if (e.key === 'ArrowLeft') {
        focusInput(hiddenInputRef);
        selectPrevious(e);
      }
    }
  }

  function copyToClipboard() {
    hiddenInputRef.current && hiddenInputRef.current.select();
    document.execCommand('copy');
  }

  function handleHiddenInputKeyDown(e) {
    if (isCtrlCmdPressed(e)) {
      switch (e.key) {
        case 'a':
          selectAll();
          break;

        case 'x':
          copyToClipboard();
          deleteSelected();
          break;

        case 'c':
          copyToClipboard();
          break;
      }
    } else {
      switch (e.key) {
        case 'Delete':
        case 'Backspace':
          deleteSelected();
          break;

        case 'ArrowLeft':
          selectPrevious(e);
          break;

        case 'ArrowRight':
          selectNext(e);
          break;
      }
    }
  }

  function handleHiddenInputBlur(e) {
    var nextFocusTarget = e.relatedTarget;

    if (nextFocusTarget && nextFocusTarget.parentNode !== e.currentTarget.parentNode) {
      deselectAll();
    }
  }

  function handleClear() {
    onChange([]);
    onInputChange('');
    onClear && onClear();
    focusInput(internalRef);
  }

  var chips = values.map(function (value) {
    function onChipDelete(e) {
      handleDeleteChip(value, e);
    }

    var isSelected = selectedValues.includes(value);
    var chipLabel = formatChip ? formatChip(value) : value;
    return _react["default"].createElement(_Chip.Chip, {
      "aria-selected": isSelected,
      disabled: disabled,
      iconLabel: chipIconLabel,
      key: value,
      onClick: handleChipClick(value),
      onDelete: onChipDelete,
      onMouseDown: stopPropagation,
      readOnly: readOnly,
      role: "option",
      tabIndex: disabled ? undefined : -1
    }, chipLabel);
  });

  function handleInputChange(e) {
    onInputChange(e.currentTarget.value, e);
  }

  var wrappedOnFocus = (0, _utils.useWrapEvent)(deselectAll, onFocus);
  var wrappedOnKeyDown = (0, _utils.useWrapEvent)(handleKeyDown, onKeyDown);
  return _react["default"].createElement(_InputText.InputText, (0, _extends2["default"])({
    disabled: disabled,
    after: _react["default"].createElement(_AdvancedInputControls.AdvancedInputControls, {
      disabled: disabled,
      clearIconLabel: clearIconLabel,
      isVisibleOptions: isVisibleOptions,
      onClear: handleClear,
      showCaret: showCaret,
      showClear: isClearable && values.length > 0 && !disabled && !readOnly,
      summary: summary,
      errorIcon: !noErrorIcon && validationType === 'error'
    }),
    height: height,
    onChange: handleInputChange,
    onFocus: wrappedOnFocus,
    onKeyDown: wrappedOnKeyDown,
    readOnly: readOnly || inputReadOnly,
    ref: ref,
    validationType: validationType,
    value: inputValue
  }, props), chips, _react["default"].createElement(HiddenInput, {
    "data-testid": "hidden-input",
    "aria-hidden": "true",
    disabled: disabled,
    onBlur: handleHiddenInputBlur,
    onKeyDown: handleHiddenInputKeyDown,
    readOnly: true,
    ref: hiddenInputRef,
    tabIndex: -1,
    value: formatTextToCopy(selectedValues)
  }));
});
exports.InputChipsBaseInternal = InputChipsBaseInternal;

var HiddenInput = _styledComponents["default"].input.withConfig({
  displayName: "InputChipsBase__HiddenInput",
  componentId: "sc-1a9apwv-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _VisuallyHidden.visuallyHiddenStyle);

InputChipsBaseInternal.displayName = 'InputChipsBaseInternal';
var inputHeightStyle = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  height: calc(", " - 6px);\n"])), _height.inputHeight);
var InputChipsBase = (0, _styledComponents["default"])(InputChipsBaseInternal).withConfig({
  displayName: "InputChipsBase",
  componentId: "sc-1a9apwv-1"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: stretch;\n  position: relative;\n\n  ", " {\n    margin: 1px 0;\n    margin-right: ", ";\n  }\n\n  .inner {\n    align-content: flex-start;\n    display: flex;\n    flex-wrap: wrap;\n    /* Workaround for Chip's truncate styling breaking flexbox layout */\n    min-width: 0;\n    overflow-y: auto;\n    width: 100%;\n  }\n\n  input {\n    min-width: 25%;\n    width: auto;\n    ", "\n  }\n\n  ", " {\n    ", "\n  }\n"])), _Chip.Chip, function (_ref2) {
  var space = _ref2.theme.space;
  return space.u1;
}, inputHeightStyle, _InputText.InputTextContent, inputHeightStyle);
exports.InputChipsBase = InputChipsBase;
//# sourceMappingURL=InputChipsBase.js.map