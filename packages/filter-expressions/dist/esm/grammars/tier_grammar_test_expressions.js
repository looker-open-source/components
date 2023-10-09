const parameterField = {
  has_allowed_values: true,
  parameter: true,
  enumerations: [{
    label: 'first item',
    value: 'first item'
  }, {
    label: 'sub_region',
    value: 'sub^_region'
  }]
};
export const tierGrammarTestItems = [{
  expression: '20 to 29',
  describe: 'is 20 to 29',
  type: 'match',
  output: '20 to 29'
}, {
  expression: 'sub^_region',
  describe: 'is sub_region',
  type: 'match',
  output: 'sub^_region',
  field: parameterField
}];
//# sourceMappingURL=tier_grammar_test_expressions.js.map