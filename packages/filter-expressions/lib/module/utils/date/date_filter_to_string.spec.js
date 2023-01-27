
import { convertTypeToMatchesAdvancedOption, treeToList } from '..';
import { dateExpressionTestItems } from '../../grammars';
import { parseFilterExpression } from '../parse_filter_expression';
import { dateFilterToString } from './date_filter_to_string';
describe('Date To String', () => {
  dateExpressionTestItems.forEach(testItem => {
    const {
      expression,
      output
    } = testItem;
    it('date filter output matches expected value for expression ' + expression, () => {
      const ast = parseFilterExpression('date', expression);
      const list = treeToList(ast);
      const item = list[0];
      const dateComponentType = convertTypeToMatchesAdvancedOption(item);
      const stringOutput = dateComponentType === 'matchesAdvanced' ? expression : dateFilterToString(ast, 'date');
      expect(stringOutput).toBe(output);
    });
  });
});
//# sourceMappingURL=date_filter_to_string.spec.js.map