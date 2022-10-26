"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldSelector = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("@looker/components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FieldSelector = function FieldSelector(_ref) {
  var groups = _ref.groups,
      current = _ref.current,
      onChange = _ref.onChange;

  var _useContext = (0, _react.useContext)(_components.DialogContext),
      closeModal = _useContext.closeModal;

  var getFieldClickHandler = function getFieldClickHandler(field) {
    return function () {
      onChange(field);
      closeModal();
    };
  };

  return _react["default"].createElement(_components.TreeCollection, null, Object.keys(groups).map(function (group) {
    var _current$name;

    return _react["default"].createElement(_components.Tree, {
      selected: (current === null || current === void 0 ? void 0 : (_current$name = current.name) === null || _current$name === void 0 ? void 0 : _current$name.split('.')[0]) === group,
      key: group,
      label: group.replace(/_/g, ' ')
    }, groups[group].map(function (field) {
      var _field$name = field.name,
          name = _field$name === void 0 ? '' : _field$name;
      return _react["default"].createElement(_components.TreeItem, {
        selected: (current === null || current === void 0 ? void 0 : current.name) === name,
        key: name,
        onClick: getFieldClickHandler(field)
      }, name.replace("".concat(group, "."), '').replace(/_/g, ' '));
    }));
  }));
};

exports.FieldSelector = FieldSelector;
//# sourceMappingURL=FieldSelector.js.map