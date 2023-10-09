import i18next from 'i18next';
export const joinOr = values => {
  const t = i18next.t.bind(i18next);
  return values.reduce((acc, value) => {
    if (acc === '') return value;
    return t('a or b', {
      ns: 'join_or',
      a: acc,
      b: value
    });
  }, '');
};
//# sourceMappingURL=join_or.js.map