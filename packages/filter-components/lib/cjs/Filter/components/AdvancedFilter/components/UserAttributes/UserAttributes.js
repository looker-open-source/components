"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserAttributes = void 0;

var _filterExpressions = require("@looker/filter-expressions");

var _react = _interopRequireDefault(require("react"));

var _GroupSelect = require("../GroupSelect");

var createOptions = function createOptions() {
  var userAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return userAttributes.map(function (_ref) {
    var name = _ref.name,
        label = _ref.label,
        value = _ref.value;
    return {
      value: name,
      label: "".concat(label, " (").concat(value, ")")
    };
  });
};

var UserAttributes = function UserAttributes(_ref2) {
  var item = _ref2.item,
      attributeName = _ref2.item.attributeName,
      userAttributes = _ref2.userAttributes,
      onChange = _ref2.onChange,
      validationMessage = _ref2.validationMessage;

  var userAttributeChange = function userAttributeChange(value) {
    var userAttribute = (0, _filterExpressions.findUserAttribute)(value, userAttributes);
    onChange(item.id, {
      attributeName: value,
      attributeValue: userAttribute && userAttribute.value
    });
  };

  return _react["default"].createElement(_GroupSelect.GroupSelect, {
    value: attributeName,
    placeholder: "Select...",
    options: createOptions(userAttributes),
    onChange: userAttributeChange,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    placement: "right"
  });
};

exports.UserAttributes = UserAttributes;
//# sourceMappingURL=UserAttributes.js.map