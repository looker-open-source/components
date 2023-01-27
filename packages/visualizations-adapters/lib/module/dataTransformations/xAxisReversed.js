

export const xAxisReversed = ({
  data,
  fields,
  config
}) => {
  var _x_axis;
  const xAxisReversed = config === null || config === void 0 ? void 0 : (_x_axis = config.x_axis) === null || _x_axis === void 0 ? void 0 : _x_axis[0].reversed;
  const dataCopy = xAxisReversed ? data.slice().reverse() : data;
  return {
    data: dataCopy,
    fields,
    config
  };
};
//# sourceMappingURL=xAxisReversed.js.map