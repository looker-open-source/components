"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Accept", {
  enumerable: true,
  get: function get() {
    return _Accept["default"];
  }
});
Object.defineProperty(exports, "Basic", {
  enumerable: true,
  get: function get() {
    return _Basic["default"];
  }
});
Object.defineProperty(exports, "ButtonText", {
  enumerable: true,
  get: function get() {
    return _ButtonText["default"];
  }
});
Object.defineProperty(exports, "Placeholder", {
  enumerable: true,
  get: function get() {
    return _Placeholder["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _InputFile = require("../InputFile");
var _Accept = _interopRequireDefault(require("./Accept"));
var _Basic = _interopRequireDefault(require("./Basic"));
var _ButtonText = _interopRequireDefault(require("./ButtonText"));
var _Placeholder = _interopRequireDefault(require("./Placeholder"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _InputFile.InputFile,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/InputFile'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map