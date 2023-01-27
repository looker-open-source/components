"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PairedWithText;
var _react = _interopRequireDefault(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function PairedWithText() {
  return _react["default"].createElement(_.SpaceVertical, null, _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Heading, {
    fontSize: "xxsmall"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_.Icon, {
    size: "xxxsmall",
    icon: _react["default"].createElement(MaterialIcons.Create, null)
  })), _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Heading, {
    fontSize: "xsmall"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_.Icon, {
    size: "xxxsmall",
    icon: _react["default"].createElement(MaterialIcons.Create, null)
  })), _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Heading, {
    fontSize: "small"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_.Icon, {
    size: "xxsmall",
    icon: _react["default"].createElement(MaterialIcons.Create, null)
  })), _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Heading, {
    fontSize: "medium"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_.Icon, {
    size: "xxsmall",
    icon: _react["default"].createElement(MaterialIcons.Create, null)
  })), _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Heading, {
    fontSize: "large"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_.Icon, {
    size: "xsmall",
    icon: _react["default"].createElement(MaterialIcons.Create, null)
  })), _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Heading, {
    fontSize: "xlarge"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_.Icon, {
    size: "small",
    icon: _react["default"].createElement(MaterialIcons.Create, null)
  })), _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Heading, {
    fontSize: "xxlarge"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_.Icon, {
    size: "small",
    icon: _react["default"].createElement(MaterialIcons.Create, null)
  })), _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Heading, {
    fontSize: "xxxlarge"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_.Icon, {
    size: "medium",
    icon: _react["default"].createElement(MaterialIcons.Create, null)
  })), _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Heading, {
    fontSize: "xxxxlarge"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_.Icon, {
    size: "medium",
    icon: _react["default"].createElement(MaterialIcons.Create, null)
  })), _react["default"].createElement(_.Space, {
    gap: "u2"
  }, _react["default"].createElement(_.Heading, {
    fontSize: "xxxxxlarge"
  }, "This is to compare icons size with a Heading"), _react["default"].createElement(_.Icon, {
    size: "large",
    icon: _react["default"].createElement(MaterialIcons.Create, null)
  })));
}
//# sourceMappingURL=PairedWithText.js.map