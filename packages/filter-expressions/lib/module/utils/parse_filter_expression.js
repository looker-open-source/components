

import { generate } from 'pegjs';
import { getNumberFromString } from './number/get_number_from_string';
import { getMatchesAdvancedNode } from './get_matches_advanced_node';
import { transformAST } from './transform/transform_ast';
import { userAttributeTransform } from './transform/userAttributeTransform';
import { typeToGrammar } from './type_to_grammar';

const generateParser = (() => {
  const parserCache = {};
  return (type, grammar) => {
    if (!parserCache[type]) {
      parserCache[type] = generate(grammar);
    }
    return parserCache[type];
  };
})();

export const parserOptions = {
  Object,
  getNumberFromString
};

export const parseFilterExpression = (type, expression, userAttributes) => {
  const {
    grammar,
    anyvalue,
    transform = root => root
  } = typeToGrammar(type);
  if (expression === '') {
    return anyvalue;
  }
  try {
    const parser = generateParser(type, grammar);
    const transforms = [userAttributeTransform(userAttributes), transform];
    return transformAST(parser.parse(expression, parserOptions), transforms);
  } catch (error) {
    return getMatchesAdvancedNode(expression);
  }
};
//# sourceMappingURL=parse_filter_expression.js.map