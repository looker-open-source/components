import { getMonth } from 'date-fns';
import { confirmToday, isThisMonth } from './dateConfirmations';
describe('Calendar date confirmations', () => {
  test('confirmToday', () => {
    const today = confirmToday(1);
    const check = getMonth(new Date()) === 1;
    expect(today).toEqual(check);
  });
  test('isThisMonth', () => {
    const month = isThisMonth(new Date(2012, 3, 29), 3, new Date(2012, 3, 3));
    expect(month).toEqual(true);
  });
});
//# sourceMappingURL=dateConfirmations.spec.js.map