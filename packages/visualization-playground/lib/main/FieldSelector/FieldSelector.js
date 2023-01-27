"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _components = require("@looker/components");
var _filterComponents = require("@looker/filter-components");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FieldSelector = function FieldSelector(_ref) {
  var tree = _ref.tree,
    current = _ref.current,
    onChange = _ref.onChange;
  var _useContext = (0, _react.useContext)(_components.DialogContext),
    closeModal = _useContext.closeModal;
  var getFieldClickHandler = function getFieldClickHandler(field) {
    onChange(field.fieldOptions);
    closeModal();
  };
  return _react["default"].createElement(_components.Box, {
    p: "u2"
  }, _react["default"].createElement(_filterComponents.TreeSelect, {
    searchInputValue: (current === null || current === void 0 ? void 0 : current.label_short) || '',
    tree: tree,
    onSelectedFieldChange: getFieldClickHandler,
    withDropdown: false
  }));
};
exports.FieldSelector = FieldSelector;
//# sourceMappingURL=FieldSelector.js.map