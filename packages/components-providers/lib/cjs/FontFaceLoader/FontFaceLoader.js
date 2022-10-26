"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importFont = exports.fontFacesCSS = exports.fontFace = exports.FontFaceLoader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHelmetAsync = require("react-helmet-async");

var _styledComponents = require("styled-components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var fontFacesCSS = function fontFacesCSS(fontSources) {
  return fontSources.map(function (_ref) {
    var face = _ref.face,
        url = _ref.url;
    return face ? fontFace(face, url) : importFont(url);
  }).join('\n');
};

exports.fontFacesCSS = fontFacesCSS;

var importFont = function importFont(url) {
  return "\n@import url(".concat(url, ");");
};

exports.importFont = importFont;

var fontFace = function fontFace(face, url) {
  return "\n@font-face {\n  font-family: ".concat(face, ";\n  src: url('").concat(url, "');\n}");
};

exports.fontFace = fontFace;

var FontFaceLoader = function FontFaceLoader() {
  var _useTheme = (0, _styledComponents.useTheme)(),
      fontSources = _useTheme.fontSources;

  var css = (0, _react.useMemo)(function () {
    if (fontSources && fontSources.length > 0) {
      return fontFacesCSS(fontSources);
    } else {
      return null;
    }
  }, [fontSources]);
  return css === null ? null : _react["default"].createElement(_reactHelmetAsync.Helmet, null, _react["default"].createElement("style", {
    type: "text/css"
  }, css));
};

exports.FontFaceLoader = FontFaceLoader;
//# sourceMappingURL=FontFaceLoader.js.map