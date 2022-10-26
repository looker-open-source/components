"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOptionStatus = useOptionStatus;

var _react = require("react");

function useOptionStatus(context, value) {
  var _useContext = (0, _react.useContext)(context),
      data = _useContext.data;

  var navigationOption = data.navigationOption;
  var isActive = navigationOption ? navigationOption.value === value : false;
  var contextOption = data.option;
  var contextOptions = data.options;
  var options = contextOption ? [contextOption] : contextOptions || [];
  var isSelected = options.find(function (option) {
    return option.value === value;
  }) !== undefined;
  return {
    isActive: isActive,
    isSelected: isSelected
  };
}
//# sourceMappingURL=useOptionStatus.js.map