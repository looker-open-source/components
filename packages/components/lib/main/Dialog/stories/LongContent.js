"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LongContent;
var _react = _interopRequireWildcard(require("react"));
var _Dialog = require("../../Dialog");
var _Button = require("../../Button");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function LongContent() {
  return _react["default"].createElement(_Dialog.Dialog, {
    defaultOpen: true,
    content: _react["default"].createElement(DialogExampleLayout, null)
  }, _react["default"].createElement(_Button.ButtonOutline, null, "Open Dialog"));
}
var DialogExampleLayout = function DialogExampleLayout() {
  var _useContext = (0, _react.useContext)(_Dialog.DialogContext),
    closeModal = _useContext.closeModal;
  return _react["default"].createElement(_Dialog.DialogLayout, {
    header: "Simple header",
    footer: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button.Button, {
      onClick: closeModal
    }, "Done Reading"), _react["default"].createElement(_Button.ButtonTransparent, {
      color: "neutral",
      onClick: closeModal
    }, "Finish Later"))
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus pulvinar elementum integer enim. In aliquam sem fringilla ut. Massa id neque aliquam vestibulum morbi blandit cursus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Elit ut aliquam purus sit amet luctus. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Tempus egestas sed sed risus pretium quam. Maecenas accumsan lacus vel facilisis. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Odio facilisis mauris sit amet massa vitae. Suscipit tellus mauris a diam maecenas sed enim ut. Orci dapibus ultrices in iaculis nunc sed. Etiam sit amet nisl purus. Lacus sed viverra tellus in hac habitasse. Libero justo laoreet sit amet cursus sit amet. Mi eget mauris pharetra et ultrices neque. Elit ut aliquam purus sit. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. In hendrerit gravida rutrum quisque non. Quam lacus suspendisse faucibus interdum. Eget arcu dictum varius duis at. Eget aliquet nibh praesent tristique magna sit amet. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Scelerisque eu ultrices vitae auctor eu augue. Amet porttitor eget dolor morbi non arcu risus quis varius. Ut pharetra sit amet aliquam id diam maecenas ultricies. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Enim eu turpis egestas pretium. Volutpat consequat mauris nunc congue. Libero enim sed faucibus turpis in eu mi bibendum. Sed velit dignissim sodales ut eu sem integer vitae justo. Odio pellentesque diam volutpat commodo sed. Non quam lacus suspendisse faucibus interdum posuere lorem. Tristique nulla aliquet enim tortor at auctor urna nunc. Odio pellentesque diam volutpat commodo. Vitae semper quis lectus nulla at volutpat diam. Condimentum lacinia quis vel eros donec. Justo donec enim diam vulputate. Quis varius quam quisque id. In nibh mauris cursus mattis molestie a iaculis. Ac turpis egestas sed tempus urna et. Non consectetur a erat nam at lectus urna duis. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Interdum varius sit amet mattis vulputate enim nulla aliquet. Phasellus faucibus scelerisque eleifend donec pretium. Venenatis urna cursus eget nunc scelerisque viverra mauris. Orci dapibus ultrices in iaculis nunc sed augue. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Donec et odio pellentesque diam. Sit amet est placerat in egestas erat. Arcu non odio euismod lacinia. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Lectus quam id leo in. Ullamcorper a lacus vestibulum sed arcu non odio. Enim nec dui nunc mattis enim ut. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. At augue eget arcu dictum varius duis at. Nibh tortor id aliquet lectus proin nibh nisl. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Leo a diam sollicitudin tempor id eu. Cursus sit amet dictum sit. Laoreet non curabitur gravida arcu ac. Ullamcorper eget nulla facilisi etiam dignissim diam. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Urna nec tincidunt praesent semper feugiat. Velit sed ullamcorper morbi tincidunt.", ' ');
};
//# sourceMappingURL=LongContent.js.map