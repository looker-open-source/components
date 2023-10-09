"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputFilters = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _Close = require("@styled-icons/material/Close");
var _FilterList = require("@styled-icons/material/FilterList");
var _Select = require("../Select");
var _InputText = require("../InputText");
var _Icon = require("../../../Icon");
var _Button = require("../../../Button");
var _Chip = require("../../../Chip");
var _Text = require("../../../Text");
var _Popover = require("../../../Popover");
var _utils = require("../../../utils");
var _InputFiltersChip = require("./InputFiltersChip");
var _inputFilterEditor = require("./inputFilterEditor");
var _templateObject, _templateObject2;
var _excluded = ["className", "filters", "hideFilterIcon", "onChange"],
  _excluded2 = ["value"],
  _excluded3 = ["value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var InputFiltersLayout = function InputFiltersLayout(_ref) {
  var className = _ref.className,
    filters = _ref.filters,
    _ref$hideFilterIcon = _ref.hideFilterIcon,
    hideFilterIcon = _ref$hideFilterIcon === void 0 ? false : _ref$hideFilterIcon,
    onChange = _ref.onChange,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useTranslation = (0, _utils.useTranslation)('InputFilters'),
    t = _useTranslation.t;
  var placeholder = props.placeholder || t('Filter List');
  var _useState = (0, _react.useState)(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    fieldEditing = _useState2[0],
    setFieldEditing = _useState2[1];
  var assignedFilters = filters.filter(function (filter) {
    return filter.value || filter.field === fieldEditing;
  }).sort(function (a, b) {
    if (a.value === undefined) {
      return 1;
    } else if (b.value === undefined) {
      return -1;
    } else {
      return 0;
    }
  });
  var unassignedFilters = filters.filter(function (filter) {
    return !assignedFilters.map(function (assigned) {
      return assigned.field;
    }).includes(filter.field);
  });
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    filterTerm = _useState4[0],
    setFilterTerm = _useState4[1];
  var options = (0, _react.useMemo)(function () {
    return unassignedFilters.reduce(function (acc, filter) {
      var option = {
        label: filter.label || filter.field,
        value: filter.field
      };
      var optionMatchesFilter = Object.values(option).some(function (value) {
        return value.toLocaleLowerCase().indexOf(filterTerm.toLocaleLowerCase()) > -1;
      });
      if (optionMatchesFilter) {
        acc = [].concat(_toConsumableArray(acc), [option]);
      }
      return acc;
    }, []);
  }, [filterTerm, unassignedFilters]);
  var inputRef = (0, _react.useRef)(null);
  var isClearable = assignedFilters.length > 0;
  var clearFilters = function clearFilters() {
    onChange(filters.map(function (_ref2) {
      var value = _ref2.value,
        rest = _objectWithoutProperties(_ref2, _excluded2);
      return rest;
    }));
  };
  var focusInput = function focusInput() {
    return inputRef.current && inputRef.current.focus();
  };
  var handleFilterLookupChange = function handleFilterLookupChange(field) {
    var filter = filters.find(function (option) {
      return option.field === field;
    });
    if (filter) {
      setFieldEditing(filter.field);
    }
  };
  return _react["default"].createElement("div", {
    className: className,
    onClick: focusInput
  }, !hideFilterIcon && _react["default"].createElement(_Icon.Icon, {
    color: "ui4",
    mr: "xsmall",
    mt: "xxsmall",
    icon: _react["default"].createElement(_FilterList.FilterList, null),
    size: 20
  }), _react["default"].createElement(ChipWrapper, null, assignedFilters.map(function (filter, i) {
    var editor = filter.editor,
      field = filter.field,
      value = filter.value;
    var editFilter = function editFilter() {
      return setFieldEditing(field);
    };
    var handleDelete = function handleDelete() {
      return onChange(filters.map(function (currentFilter) {
        if (currentFilter.field !== field) {
          return currentFilter;
        }
        var _value = currentFilter.value,
          rest = _objectWithoutProperties(currentFilter, _excluded3);
        return rest;
      }));
    };
    var setFieldEditingValue = function setFieldEditingValue(value) {
      var filterIndex = assignedFilters.findIndex(function (f) {
        return f.field === fieldEditing;
      });
      var newFilters = [].concat(_toConsumableArray(assignedFilters), _toConsumableArray(unassignedFilters));
      var updateFilter = _objectSpread(_objectSpread({}, newFilters[filterIndex]), {}, {
        value: value
      });
      newFilters[filterIndex] = updateFilter;
      onChange(newFilters);
    };
    var closeEditor = function closeEditor() {
      return setFieldEditing(undefined);
    };
    var filterToken = value ? _react["default"].createElement(_InputFiltersChip.InputFiltersChip, {
      filter: filter,
      key: i,
      onClick: editFilter,
      onDelete: handleDelete
    }) : _react["default"].createElement(_Text.Text, {
      fontSize: "small",
      lineHeight: "xlarge"
    }, (filter === null || filter === void 0 ? void 0 : filter.label) || filter.field, ":");
    return filter.field === fieldEditing ? _react["default"].createElement(_Popover.Popover, {
      content: _react["default"].createElement(_Popover.PopoverContent, null, editor ? editor({
        closeEditor: closeEditor,
        filterOptions: filter,
        onChange: setFieldEditingValue,
        value: value
      }) : (0, _inputFilterEditor.inputFilterEditor)({
        closeEditor: closeEditor,
        filterOptions: filter,
        onChange: setFieldEditingValue,
        value: value
      })),
      isOpen: fieldEditing !== undefined,
      key: i,
      placement: "bottom-start",
      setOpen: closeEditor
    }, filterToken) : filterToken;
  }), !fieldEditing && _react["default"].createElement(_Select.Select, {
    autoResize: true,
    openOnFocus: true,
    indicator: false,
    onFilter: setFilterTerm,
    isFilterable: true,
    onChange: handleFilterLookupChange,
    options: options,
    placeholder: placeholder,
    ref: inputRef
  })), isClearable && _react["default"].createElement(_Button.IconButton, {
    icon: _react["default"].createElement(_Close.Close, null),
    label: t('Clear Filters'),
    ml: "auto",
    mt: "xxsmall",
    mr: "xsmall",
    onClick: clearFilters,
    size: "xsmall"
  }));
};
var ChipWrapper = _styledComponents["default"].div.withConfig({
  displayName: "InputFilters__ChipWrapper",
  componentId: "sc-1eligs2-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex: 1;\n  flex-wrap: wrap;\n\n  @supports (gap: 4px) {\n    gap: ", ";\n    ", " {\n      margin: 0;\n    }\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.u1;
}, _Chip.Chip);
var InputFilters = (0, _styledComponents["default"])(InputFiltersLayout).withConfig({
  displayName: "InputFilters",
  componentId: "sc-1eligs2-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  align-items: start;\n  display: flex;\n  flex-wrap: wrap;\n  padding: ", " 0;\n  padding-left: ", ";\n  width: 100%;\n  &:focus-within {\n    ", "\n  }\n\n  ", " {\n    margin-left: ", ";\n  }\n\n  ", " ", " {\n    display: none;\n  }\n\n  ", " {\n    border: none;\n    height: 30px;\n    padding: 0;\n\n    &:focus-within {\n      box-shadow: none;\n    }\n\n    input {\n      padding: 0;\n    }\n  }\n"])), _InputText.inputCSS, function (_ref4) {
  var space = _ref4.theme.space;
  return space.u05;
}, function (_ref5) {
  var space = _ref5.theme.space;
  return space.u2;
}, _InputText.inputTextFocus, _Select.Select, function (_ref6) {
  var space = _ref6.theme.space;
  return space.u1;
}, _Select.Select, _Icon.Icon, _InputText.InputText);
exports.InputFilters = InputFilters;
//# sourceMappingURL=InputFilters.js.map