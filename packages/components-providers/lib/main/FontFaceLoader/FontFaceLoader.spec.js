"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactHelmetAsync = require("react-helmet-async");
var _styledComponents = require("styled-components");
var _react2 = require("@testing-library/react");
var _FontFaceLoader = require("./FontFaceLoader");

_reactHelmetAsync.HelmetProvider.canUseDOM = false;
var fontSources = [{
  url: 'http//magic.com'
}, {
  face: 'Curly',
  url: 'http//moe.com/curly.ttf'
}];
describe('FontFaceLoader', function () {
  it('Font face with URL', function () {
    expect((0, _FontFaceLoader.fontFacesCSS)([fontSources[1]])).toMatchInlineSnapshot("\n      \"\n      @font-face {\n        font-family: Curly;\n        src: url('http//moe.com/curly.ttf');\n      }\"\n    ");
  });
  it('URL only (Google font)', function () {
    expect((0, _FontFaceLoader.fontFacesCSS)([fontSources[0]])).toMatchInlineSnapshot("\n      \"\n      @import url(http//magic.com);\"\n    ");
  });
  it('Multiple fonts', function () {
    expect((0, _FontFaceLoader.fontFacesCSS)(fontSources)).toMatchInlineSnapshot("\n      \"\n      @import url(http//magic.com);\n\n      @font-face {\n        font-family: Curly;\n        src: url('http//moe.com/curly.ttf');\n      }\"\n    ");
  });
  it('Does nothing if fontSource undefined', function () {
    var context = {};
    (0, _react2.render)(_react["default"].createElement(_reactHelmetAsync.HelmetProvider, {
      context: context
    }, _react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react["default"].createElement(_FontFaceLoader.FontFaceLoader, null))));
    expect(context.helmet.style.toString()).toEqual('');
  });
  it('Does nothing if fontSource empty', function () {
    var context = {};
    (0, _react2.render)(_react["default"].createElement(_reactHelmetAsync.HelmetProvider, {
      context: context
    }, _react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {
        themeSources: []
      }
    }, _react["default"].createElement(_FontFaceLoader.FontFaceLoader, null))));
    expect(context.helmet.style.toString()).toEqual('');
  });
  it('theme.fontSources has entries', function () {
    var context = {};
    (0, _react2.render)(_react["default"].createElement(_reactHelmetAsync.HelmetProvider, {
      context: context
    }, _react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {
        fontSources: fontSources
      }
    }, _react["default"].createElement(_FontFaceLoader.FontFaceLoader, null))));
    expect(context.helmet.style.toString()).toMatchInlineSnapshot("\n      \"<style data-rh=\\\"true\\\" type=\\\"text/css\\\">\n      @import url(http//magic.com);\n\n      @font-face {\n        font-family: Curly;\n        src: url('http//moe.com/curly.ttf');\n      }</style>\"\n    ");
  });
});
//# sourceMappingURL=FontFaceLoader.spec.js.map