import { formatDate } from './format_date';
describe('formatDate', () => {
  it('returns YYYY/MM/DD format for dates', () => {
    expect(formatDate(new Date(1791, 11, 15))).toEqual('1791/12/15');
  });
  it('0 pads month and day when single digits', () => {
    expect(formatDate(new Date(1776, 6, 4))).toEqual('1776/07/04');
  });
  it('ignores times', () => {
    expect(formatDate(new Date(1776, 6, 4, 12, 0, 0))).toEqual('1776/07/04');
  });
});
//# sourceMappingURL=format_date.spec.js.map