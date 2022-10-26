"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMixedStateCheckbox = useMixedStateCheckbox;

var _react = require("react");

var _some = _interopRequireDefault(require("lodash/some"));

var _every = _interopRequireDefault(require("lodash/every"));

function useMixedStateCheckbox(_ref) {
  var parent = _ref.parent,
      children = _ref.children;
  (0, _react.useEffect)(function () {
    if ((0, _every["default"])(children, ['state', true])) {
      parent.setState(true);
    } else if ((0, _some["default"])(children, ['state', true])) {
      parent.setState('mixed');
    } else {
      parent.setState(false);
    }
  }, [children, parent]);

  var handleParentChange = function handleParentChange() {
    var newState = parent.state !== true;
    parent.setState(newState);
    children.map(function (child) {
      return child.setState(newState);
    });
  };

  return handleParentChange;
}
//# sourceMappingURL=useMixedStateCheckbox.js.map