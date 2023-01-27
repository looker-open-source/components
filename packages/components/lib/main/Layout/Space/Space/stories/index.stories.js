"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Around", {
  enumerable: true,
  get: function get() {
    return _Around["default"];
  }
});
Object.defineProperty(exports, "Basic", {
  enumerable: true,
  get: function get() {
    return _Basic["default"];
  }
});
Object.defineProperty(exports, "Between", {
  enumerable: true,
  get: function get() {
    return _Between["default"];
  }
});
Object.defineProperty(exports, "Evenly", {
  enumerable: true,
  get: function get() {
    return _Evenly["default"];
  }
});
Object.defineProperty(exports, "Gap", {
  enumerable: true,
  get: function get() {
    return _Gap["default"];
  }
});
Object.defineProperty(exports, "Properties", {
  enumerable: true,
  get: function get() {
    return _Properties["default"];
  }
});
Object.defineProperty(exports, "Reverse", {
  enumerable: true,
  get: function get() {
    return _Reverse["default"];
  }
});
Object.defineProperty(exports, "SpaceCrush", {
  enumerable: true,
  get: function get() {
    return _SpaceCrush["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _ = require("..");
var _Around = _interopRequireDefault(require("./Around"));
var _Basic = _interopRequireDefault(require("./Basic"));
var _Between = _interopRequireDefault(require("./Between"));
var _Evenly = _interopRequireDefault(require("./Evenly"));
var _Gap = _interopRequireDefault(require("./Gap"));
var _Properties = _interopRequireDefault(require("./Properties"));
var _Reverse = _interopRequireDefault(require("./Reverse"));
var _SpaceCrush = _interopRequireDefault(require("./SpaceCrush"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _.Space,
  parameters: {
    docs: {
      source: {
        type: 'dynamic'
      }
    },
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Space'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map