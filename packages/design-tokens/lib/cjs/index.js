"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  shouldForwardProp: true,
  units: true,
  transitions: true
};
exports.shouldForwardProp = void 0;
Object.defineProperty(exports, "transitions", {
  enumerable: true,
  get: function get() {
    return _transitions.transitions;
  }
});
Object.defineProperty(exports, "units", {
  enumerable: true,
  get: function get() {
    return _space.units;
  }
});

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _shouldForwardProp = require("@styled-system/should-forward-prop");

var _color = require("./color");

Object.keys(_color).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _color[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _color[key];
    }
  });
});

var _elevation = require("./elevation");

Object.keys(_elevation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _elevation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _elevation[key];
    }
  });
});

var _space = require("./space");

var _theme = require("./theme");

Object.keys(_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _theme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _theme[key];
    }
  });
});

var _system = require("./system");

Object.keys(_system).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _system[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _system[key];
    }
  });
});

var _transitions = require("./tokens/transitions");

var _breakpoints = require("./tokens/breakpoints");

Object.keys(_breakpoints).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _breakpoints[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _breakpoints[key];
    }
  });
});

var _utils = require("./utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});
var shouldForwardProp = (0, _shouldForwardProp.createShouldForwardProp)((0, _toConsumableArray2["default"])(_shouldForwardProp.props));
exports.shouldForwardProp = shouldForwardProp;
//# sourceMappingURL=index.js.map