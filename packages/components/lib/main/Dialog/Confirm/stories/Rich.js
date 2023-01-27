"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Critical;
var _react = _interopRequireDefault(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _Dialog = require("../../../Dialog");
var _Button = require("../../../Button");
var _Layout = require("../../../Layout");
var _Paragraph = require("../../../Text/Paragraph");
var _Icon = require("../../../Icon");
var _Link = require("../../../Link");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Critical() {
  var message = _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Icon.Icon, {
    icon: _react["default"].createElement(MaterialIcons.Info, null),
    size: "80px"
  }), _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Paragraph.Paragraph, null, "Canadians say \"sorry\" so often that", ' ', _react["default"].createElement("strong", null, "in 2009 a law was passed"), " declaring that an apology cannot be used as an admission of guilt."), _react["default"].createElement("cite", null, "SOURCE:", ' ', _react["default"].createElement(_Link.Link, {
    href: "https://www.theloop.ca/canadians-love-to-say-sorry-so-much-we-had-to-make-this-law/",
    target: "_blank"
  }, "the loop"))));
  return _react["default"].createElement(_Dialog.Confirm, {
    title: "Did you know?",
    message: message,
    onConfirm: function onConfirm(close) {
      alert('Now you know.');
      close();
    },
    width: ['10rem', '20rem', '30rem', '40rem']
  }, function (open) {
    return _react["default"].createElement(_Button.Button, {
      onClick: open
    }, "Do something fancy");
  });
}
//# sourceMappingURL=Rich.js.map