"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Box: true,
  Box2: true,
  Flex: true,
  FlexItem: true
};
Object.defineProperty(exports, "Box", {
  enumerable: true,
  get: function get() {
    return _Box.Box;
  }
});
Object.defineProperty(exports, "Box2", {
  enumerable: true,
  get: function get() {
    return _Box2.Box2;
  }
});
Object.defineProperty(exports, "Flex", {
  enumerable: true,
  get: function get() {
    return _Flex.Flex;
  }
});
Object.defineProperty(exports, "FlexItem", {
  enumerable: true,
  get: function get() {
    return _FlexItem.FlexItem;
  }
});

var _Box = require("./Box");

var _Box2 = require("./Box2");

var _Flex = require("./Flex");

var _FlexItem = require("./FlexItem");

var _Grid = require("./Grid");

Object.keys(_Grid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Grid[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Grid[key];
    }
  });
});

var _Semantics = require("./Semantics");

Object.keys(_Semantics).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Semantics[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Semantics[key];
    }
  });
});

var _Space = require("./Space");

Object.keys(_Space).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Space[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Space[key];
    }
  });
});

var _simple = require("./utils/simple");

Object.keys(_simple).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _simple[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _simple[key];
    }
  });
});
//# sourceMappingURL=index.js.map