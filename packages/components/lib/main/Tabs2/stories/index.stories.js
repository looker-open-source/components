"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Basic", {
  enumerable: true,
  get: function get() {
    return _Basic["default"];
  }
});
Object.defineProperty(exports, "Controlled", {
  enumerable: true,
  get: function get() {
    return _Controlled["default"];
  }
});
Object.defineProperty(exports, "DefaultTab", {
  enumerable: true,
  get: function get() {
    return _DefaultTab["default"];
  }
});
Object.defineProperty(exports, "Disabled", {
  enumerable: true,
  get: function get() {
    return _Disabled["default"];
  }
});
Object.defineProperty(exports, "Distributed", {
  enumerable: true,
  get: function get() {
    return _Distributed["default"];
  }
});
Object.defineProperty(exports, "Scrolling", {
  enumerable: true,
  get: function get() {
    return _Scrolling["default"];
  }
});
Object.defineProperty(exports, "StateChanges", {
  enumerable: true,
  get: function get() {
    return _StateChanges["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _Tabs = require("../Tabs2");
var _Basic = _interopRequireDefault(require("./Basic"));
var _Distributed = _interopRequireDefault(require("./Distributed"));
var _DefaultTab = _interopRequireDefault(require("./DefaultTab"));
var _Controlled = _interopRequireDefault(require("./Controlled"));
var _Scrolling = _interopRequireDefault(require("./Scrolling"));
var _Disabled = _interopRequireDefault(require("./Disabled"));
var _StateChanges = _interopRequireDefault(require("./StateChanges"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Tabs.Tabs2,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Tabs2'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map