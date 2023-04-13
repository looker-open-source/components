"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;
var _color = require("../color");
var _elevation = require("../elevation");
var _space = require("../space");
var _defaults = require("../defaults");
var _tokens = require("../tokens");
var _generateDashboardAppearance = require("./utils/generateDashboardAppearance");

var theme = {
  breakpoints: _tokens.breakpoints,
  colors: _color.colors,
  dashboardAppearance: (0, _generateDashboardAppearance.generateDashboardAppearance)(_color.colors),
  defaults: _defaults.componentSettingsDefaults,
  easings: _tokens.easings,
  elevations: _elevation.elevations,
  fontSizes: _tokens.fontSizes,
  fontWeights: _tokens.fontWeights,
  fonts: _tokens.fontFamilies,
  lineHeights: _tokens.lineHeights,
  radii: _tokens.radii,
  shadows: _tokens.shadows,
  sizes: _tokens.sizes,
  space: _space.space,
  transitions: _tokens.transitions,
  zIndexFloor: 1
};
exports.theme = theme;
//# sourceMappingURL=theme.js.map