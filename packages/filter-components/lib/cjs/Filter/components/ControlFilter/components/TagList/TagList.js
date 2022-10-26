"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagList = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _components = require("@looker/components");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _filter_styles = require("../../../../utils/filter_styles");

var _use_option_filtering = require("../../../../utils/use_option_filtering");

var _use_placeholder = require("../../../../utils/use_placeholder");

var _templateObject;

var _excluded = ["value", "options", "onChange", "onInputChange", "validationMessage"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TagListComponent = function TagListComponent(_ref) {
  var value = _ref.value,
      options = _ref.options,
      onChange = _ref.onChange,
      onInputChange = _ref.onInputChange,
      validationMessage = _ref.validationMessage,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useOptionFiltering = (0, _use_option_filtering.useOptionFiltering)({
    value: value,
    options: options,
    onInputChange: onInputChange
  }),
      filteredOptions = _useOptionFiltering.filteredOptions,
      noOptionsLabel = _useOptionFiltering.noOptionsLabel,
      onFilter = _useOptionFiltering.onFilter;

  var handleChange = function handleChange(newValues) {
    onChange(newValues || []);
  };

  var placeholderProps = (0, _use_placeholder.usePlaceholder)(value, validationMessage);
  var resizeHappened = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (options.length && !resizeHappened.current) {
      window.dispatchEvent(new Event('resize'));
      resizeHappened.current = true;
    }
  }, [options.length]);
  return _react["default"].createElement(_components.SelectMulti, (0, _extends2["default"])({}, props, placeholderProps, {
    removeOnBackspace: false,
    values: value,
    onChange: handleChange,
    isFilterable: true,
    onFilter: onFilter,
    options: filteredOptions,
    noOptionsLabel: noOptionsLabel,
    width: 410,
    maxWidth: "100%",
    maxHeight: 145,
    listLayout: {
      maxWidth: ['95vw', '90vw', '80vw', '65vw', '50vw'],
      width: 'auto'
    },
    noErrorIcon: true,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type
  }));
};

var TagList = (0, _styledComponents["default"])(TagListComponent).withConfig({
  displayName: "TagList",
  componentId: "sc-s3oxgm-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", " {\n    ", "\n  }\n"])), _components.InputText, _filter_styles.tokenStylePlaceholder);
exports.TagList = TagList;
//# sourceMappingURL=TagList.js.map