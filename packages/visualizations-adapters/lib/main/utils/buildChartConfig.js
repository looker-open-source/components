"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildChartConfig = void 0;
var _configTransformations = require("../configTransformations");
var _flow2 = _interopRequireDefault(require("lodash/flow"));

var buildChartConfig = function buildChartConfig(args) {
  var _args$data, _args$fields, _args$fields$measures;
  var isDataValid = ((_args$data = args.data) === null || _args$data === void 0 ? void 0 : _args$data.length) && ((_args$fields = args.fields) === null || _args$fields === void 0 ? void 0 : (_args$fields$measures = _args$fields.measures) === null || _args$fields$measures === void 0 ? void 0 : _args$fields$measures.length);
  var _flow = (0, _flow2["default"])([_configTransformations.normalizeChartTypes, function (args) {
      var type = args.config.type;
      var configTransformations = _configTransformations.chartConfigByType[type] || _configTransformations.chartConfigByType["default"];
      if (isDataValid) {
        return (0, _flow2["default"])(configTransformations)(args);
      } else {
        return args;
      }
    }, _configTransformations.sanitizeSDKResponse])(args),
    config = _flow.config;
  return config;
};
exports.buildChartConfig = buildChartConfig;
//# sourceMappingURL=buildChartConfig.js.map