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
Object.defineProperty(exports, "DateObject", {
  enumerable: true,
  get: function get() {
    return _DateObject["default"];
  }
});
Object.defineProperty(exports, "Timezone", {
  enumerable: true,
  get: function get() {
    return _Timezone["default"];
  }
});
exports["default"] = void 0;
var _DateFormat = require("../DateFormat");
var _Basic = _interopRequireDefault(require("./Basic"));
var _DateObject = _interopRequireDefault(require("./DateObject"));
var _Timezone = _interopRequireDefault(require("./Timezone"));
var _default = {
  component: _DateFormat.DateFormat,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/DateFormat'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map