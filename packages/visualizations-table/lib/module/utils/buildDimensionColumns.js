

export const buildDimensionColumns = dimensions => {
  return dimensions.map(dimension => {
    return {
      header: dimension.label,
      accessorFn: data => data[dimension.name],
      id: dimension.name
    };
  });
};
//# sourceMappingURL=buildDimensionColumns.js.map