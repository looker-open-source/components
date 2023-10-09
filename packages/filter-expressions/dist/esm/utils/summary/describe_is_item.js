import i18next from 'i18next';
export const describeIsItem = (is, value) => {
  const t = i18next.t.bind(i18next);
  const no = t('is not value', {
    ns: 'describe_is_item',
    value
  });
  const yes = t('is value', {
    ns: 'describe_is_item',
    value
  });
  return is ? yes : no;
};
//# sourceMappingURL=describe_is_item.js.map