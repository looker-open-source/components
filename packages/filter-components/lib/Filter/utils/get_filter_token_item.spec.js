import { getFilterTokenItem } from './get_filter_token_item';
import { parseFilterExpression } from '@looker/filter-expressions';
describe('get_filter_token_item', () => {
  describe('gets number item', () => {
    const type = 'number';
    it('works for slider', () => {
      const ast = parseFilterExpression(type, '[35,60]');
      const item = getFilterTokenItem(ast, type, 'slider');
      expect(item.type).toEqual('=');
      expect(item.value).toStrictEqual([35]);
    });
    it('works for range', () => {
      const ast = parseFilterExpression(type, '35');
      const item = getFilterTokenItem(ast, type, 'range_slider');
      expect(item.type).toEqual('between');
      expect(item.low).toBe(35);
      expect(item.high).toBe(35);
    });
  });
  describe('gets a date item', () => {
    const type = 'date';
    beforeEach(() => {
      const defaultDate = new Date('2019-03-10T00:00:00.000-08:00');
      jest.spyOn(Date, 'now').mockImplementation(() => defaultDate.getTime());
    });
    it('works for day_picker', () => {
      const ast = parseFilterExpression(type, '2019/03/03 to 2019/03/07');
      const item = getFilterTokenItem(ast, type, 'day_picker');
      expect(item.type).toEqual('on');
      expect(item.date).toMatchInlineSnapshot(`
        Object {
          "day": 10,
          "month": 3,
          "year": 2019,
        }
      `);
    });
    it('works for day_range_picker', () => {
      const ast = parseFilterExpression(type, '2019/03/03');
      const item = getFilterTokenItem(ast, type, 'day_range_picker');
      expect(item.type).toEqual('range');
      expect(item.start).toMatchInlineSnapshot(`
        Object {
          "day": "03",
          "month": "03",
          "year": "2019",
        }
      `);
      expect(item.end).toMatchInlineSnapshot({
        day: 11,
        hour: 0,
        minute: 0,
        month: 3,
        second: 0,
        year: 2019
      }, `
        Object {
          "day": 11,
          "hour": 0,
          "minute": 0,
          "month": 3,
          "second": 0,
          "year": 2019,
        }
      `);
    });
    it('works for relative_timeframes for a day value', () => {
      const ast = parseFilterExpression(type, '2019/03/03');
      const item = getFilterTokenItem(ast, type, 'relative_timeframes');
      expect(item.type).toEqual('range');
      expect(item.start).toMatchInlineSnapshot(`
        Object {
          "day": "03",
          "month": "03",
          "year": "2019",
        }
      `);
      expect(item.end).toMatchInlineSnapshot({
        day: 11,
        hour: 0,
        minute: 0,
        month: 3,
        second: 0,
        year: 2019
      }, `
        Object {
          "day": 11,
          "hour": 0,
          "minute": 0,
          "month": 3,
          "second": 0,
          "year": 2019,
        }
      `);
    });
    it('works for relative_timeframes when provided a relative timeframes value', () => {
      const ast = parseFilterExpression(type, '14 day');
      const item = getFilterTokenItem(ast, type, 'relative_timeframes');
      expect(item.type).toEqual('past');
      expect(item.unit).toEqual('day');
      expect(item.value).toEqual(14);
    });
    it('works for relative_timeframes when provided a non relative timeframes value', () => {
      const ast = parseFilterExpression(type, '2018,2019');
      const item = getFilterTokenItem(ast, type, 'relative_timeframes');
      expect(item.type).toEqual('past');
      expect(item.unit).toEqual('day');
      expect(item.value).toEqual(7);
    });
  });
});
//# sourceMappingURL=get_filter_token_item.spec.js.map