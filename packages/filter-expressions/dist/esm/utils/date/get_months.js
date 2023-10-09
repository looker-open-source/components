import i18next from 'i18next';
export const getMonths = translate => {
  const t = translate || i18next.t.bind(i18next);
  return [t('January', {
    ns: 'get_months'
  }), t('February', {
    ns: 'get_months'
  }), t('March', {
    ns: 'get_months'
  }), t('April', {
    ns: 'get_months'
  }), t('May', {
    ns: 'get_months'
  }), t('June', {
    ns: 'get_months'
  }), t('July', {
    ns: 'get_months'
  }), t('August', {
    ns: 'get_months'
  }), t('September', {
    ns: 'get_months'
  }), t('October', {
    ns: 'get_months'
  }), t('November', {
    ns: 'get_months'
  }), t('December', {
    ns: 'get_months'
  })];
};
//# sourceMappingURL=get_months.js.map