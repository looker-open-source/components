"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputFilters = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _omit = _interopRequireDefault(require("lodash/omit"));

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

var _excluded = ["className", "filters", "hideFilterIcon", "onChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var InputFiltersLayout = function InputFiltersLayout(_ref) {
  var className = _ref.className,
      filters = _ref.filters,
      _ref$hideFilterIcon = _ref.hideFilterIcon,
      hideFilterIcon = _ref$hideFilterIcon === void 0 ? false : _ref$hideFilterIcon,
      onChange = _ref.onChange,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useTranslation = (0, _utils.useTranslation)('InputFilters'),
      t = _useTranslation.t;

  var placeholder = props.placeholder || t('Filter List');

  var _useState = (0, _react.useState)(undefined),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
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
        acc = [].concat((0, _toConsumableArray2["default"])(acc), [option]);
      }

      return acc;
    }, []);
  }, [filterTerm, unassignedFilters]);
  var inputRef = (0, _react.useRef)(null);
  var isClearable = assignedFilters.length > 0;

  var clearFilters = function clearFilters() {
    onChange(filters.map(function (filter) {
      return (0, _omit["default"])(filter, 'value');
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
        return currentFilter.field !== field ? currentFilter : (0, _omit["default"])(currentFilter, 'value');
      }));
    };

    var setFieldEditingValue = function setFieldEditingValue(value) {
      var filterIndex = assignedFilters.findIndex(function (f) {
        return f.field === fieldEditing;
      });
      var newFilters = [].concat((0, _toConsumableArray2["default"])(assignedFilters), (0, _toConsumableArray2["default"])(unassignedFilters));

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
      placement: t('bottom-start'),
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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-flex;\n  flex: 1;\n  flex-wrap: wrap;\n\n  @supports (gap: 4px) {\n    gap: ", ";\n    ", " {\n      margin: 0;\n    }\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.u1;
}, _Chip.Chip);

var InputFilters = (0, _styledComponents["default"])(InputFiltersLayout).withConfig({
  displayName: "InputFilters",
  componentId: "sc-1eligs2-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  align-items: start;\n  display: flex;\n  flex-wrap: wrap;\n  padding: ", " 0;\n  padding-left: ", ";\n  width: 100%;\n  &:focus-within {\n    ", "\n  }\n\n  ", " {\n    margin-left: ", ";\n  }\n\n  ", " ", " {\n    display: none;\n  }\n\n  ", " {\n    border: none;\n    height: 30px;\n    padding: 0;\n\n    &:focus-within {\n      box-shadow: none;\n    }\n\n    input {\n      padding: 0;\n    }\n  }\n"])), _InputText.inputCSS, function (_ref3) {
  var space = _ref3.theme.space;
  return space.u05;
}, function (_ref4) {
  var space = _ref4.theme.space;
  return space.u2;
}, _InputText.inputTextFocus, _Select.Select, function (_ref5) {
  var space = _ref5.theme.space;
  return space.u1;
}, _Select.Select, _Icon.Icon, _InputText.InputText);
exports.InputFilters = InputFilters;
//# sourceMappingURL=InputFilters.js.map