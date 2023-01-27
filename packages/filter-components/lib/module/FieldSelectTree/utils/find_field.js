

export const findField = (name, explore) => {
  if (name === '' || !explore || !explore.fields) return undefined;
  const {
    fields
  } = explore;
  let result;
  const matchName = field => field.name === name;
  if (fields.dimensions) {
    result = fields.dimensions.find(matchName);
  }
  if (!result && fields.measures) {
    result = fields.measures.find(matchName);
  }
  return result;
};
//# sourceMappingURL=find_field.js.map