
import { parseFilterExpression } from '../utils';
import { i18nInit } from '../utils/i18n';
import { stringGrammarTestItems } from './string_grammar_test_expressions';
import { convertTypeToOption } from '../utils/option/convert_type_to_option';
import { stringFilterToString } from '../utils/string/string_filter_to_string';
import { summary } from '../utils/summary/summary';
import { treeToList } from '../utils/tree/tree_to_list';
const filterType = 'string';
const testStringItem = testItem => {
  test(`${testItem.expression}`, () => {
    const {
      expression,
      type,
      describe,
      output
    } = testItem;
    const ast = parseFilterExpression(filterType, expression);
    const description = summary({
      type: filterType,
      expression
    });
    expect(ast).toMatchSnapshot();
    const list = treeToList(ast);
    const item = list[0];
    const itemType = type === 'matchesAdvanced' ? item.type : convertTypeToOption(item);
    expect(itemType).toEqual(type);

    expect(description).toBe(describe);

    const stringOutput = type === 'matchesAdvanced' ? expression : stringFilterToString(ast);
    expect(stringOutput).toBe(output);
  });
};
describe('String grammar can parse', () => {
  beforeEach(() => i18nInit());
  stringGrammarTestItems.forEach(testStringItem);
});
describe('String grammar can parse expanded character sets', () => {
  it('can parse japanese characters', () => {
    const expression = 'りんご,グレープ';
    const ast = parseFilterExpression('string', expression);
    const {
      type,
      value
    } = ast;
    expect(type).toBe('match');
    expect(value).toHaveLength(2);
    expect(value[0]).toBe('りんご');
    expect(value[1]).toBe('グレープ');
    expect(ast).toMatchInlineSnapshot(`
      Object {
        "id": 1,
        "is": true,
        "left": undefined,
        "right": undefined,
        "type": "match",
        "value": Array [
          "りんご",
          "グレープ",
        ],
      }
    `);
  });
});
//# sourceMappingURL=string_grammar.spec.js.map