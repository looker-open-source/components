

import { numberExpressionTestItems } from '../../grammars';
import { summary } from '../summary/summary';
import { i18nInit } from '../i18n';
import { describeNumber } from './describe_number';
describe('Summary', () => {
  beforeEach(() => i18nInit());
  numberExpressionTestItems.forEach(testItem => {
    const {
      expression,
      describe
    } = testItem;
    it('works for number expression ' + expression, () => {
      const description = summary({
        type: 'number',
        expression
      });
      expect(description).toBe(describe);
    });
  });
  it('is empty for an undefined value', () => {
    const item = {
      id: '0',
      is: true,
      type: 'other'
    };
    const description = describeNumber(item);
    expect(description).toBe('');
  });
});
//# sourceMappingURL=describe_number.spec.js.map