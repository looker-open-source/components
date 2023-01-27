

import sortBy from 'lodash/sortBy';

export const sortByDateTime = ({
  data,
  fields,
  config
}) => {
  var _fields$dimensions;
  const dimension = fields.dimensions[0];
  const draftData = Array.from(data);
  const isTimeframeDataset = (fields === null || fields === void 0 ? void 0 : (_fields$dimensions = fields.dimensions) === null || _fields$dimensions === void 0 ? void 0 : _fields$dimensions.length) === 1 && dimension.is_timeframe;
  return {
    data: isTimeframeDataset ? sortBy(draftData, [d => new Date(d[dimension.name])]) : draftData,
    fields,
    config
  };
};
//# sourceMappingURL=sortByDateTime.js.map