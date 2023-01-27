
import { normalizeChartTypes, chartConfigByType, sanitizeSDKResponse } from '../configTransformations';
import flow from 'lodash/flow';
export const buildChartConfig = args => {
  var _args$data, _args$fields, _args$fields$measures;
  const isDataValid = ((_args$data = args.data) === null || _args$data === void 0 ? void 0 : _args$data.length) && ((_args$fields = args.fields) === null || _args$fields === void 0 ? void 0 : (_args$fields$measures = _args$fields.measures) === null || _args$fields$measures === void 0 ? void 0 : _args$fields$measures.length);
  const {
    config
  } = flow([normalizeChartTypes, args => {
    const {
      type
    } = args.config;
    const configTransformations = chartConfigByType[type] || chartConfigByType.default;
    if (isDataValid) {
      return flow(configTransformations)(args);
    } else {
      return args;
    }
  }, sanitizeSDKResponse])(args);
  return config;
};
//# sourceMappingURL=buildChartConfig.js.map