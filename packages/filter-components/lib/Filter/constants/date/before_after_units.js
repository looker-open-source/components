import { useTranslation } from '../../../utils';

const useAgoDateUnits = () => {
  const {
    t
  } = useTranslation('before_after_units');
  return [{
    value: 'year',
    unit: 'years',
    label: t('years ago')
  }, {
    value: 'quarter',
    unit: 'quarters',
    label: t('quarters ago')
  }, {
    value: 'month',
    unit: 'months',
    label: t('months ago')
  }, {
    value: 'week',
    unit: 'weeks',
    label: t('weeks ago')
  }, {
    value: 'day',
    unit: 'days',
    label: t('days ago')
  }, {
    value: 'hour',
    unit: 'hours',
    label: t('hours ago')
  }, {
    value: 'minute',
    unit: 'minutes',
    label: t('minutes ago')
  }, {
    value: 'second',
    unit: 'seconds',
    label: t('seconds ago')
  }, {
    value: 'now',
    unit: 'now',
    label: t('now')
  }];
};

const useFromNowDateUnits = () => {
  const {
    t
  } = useTranslation('before_after_units');
  return [{
    value: 'f_second',
    unit: 'second',
    label: t('seconds from now'),
    fromnow: true
  }, {
    value: 'f_minute',
    unit: 'minute',
    label: t('minutes from now'),
    fromnow: true
  }, {
    value: 'f_hour',
    unit: 'hour',
    label: t('hours from now'),
    fromnow: true
  }, {
    value: 'f_day',
    unit: 'day',
    label: t('days from now'),
    fromnow: true
  }, {
    value: 'f_week',
    unit: 'week',
    label: t('weeks from now'),
    fromnow: true
  }, {
    value: 'f_month',
    unit: 'month',
    label: t('months from now'),
    fromnow: true
  }, {
    value: 'f_quarter',
    unit: 'quarter',
    label: t('quarters from now'),
    fromnow: true
  }, {
    value: 'f_year',
    unit: 'year',
    label: t('years from now'),
    fromnow: true
  }];
};

export const useBeforeOrAfterUnits = () => {
  const agoDateUnits = useAgoDateUnits();
  const fromNowDateUnits = useFromNowDateUnits();
  return [...agoDateUnits, ...fromNowDateUnits];
};
export const useFiscalBeforeOrAfterUnits = () => {
  const {
    t
  } = useTranslation('before_after_units');
  const agoDateUnits = useAgoDateUnits();
  const fromNowDateUnits = useFromNowDateUnits();
  return [{
    value: 'fiscal year',
    unit: 'fiscal year',
    label: t('fiscal years ago')
  }, {
    value: 'fiscal quarter',
    unit: 'fiscal quarter',
    label: t('fiscal quarters ago')
  }, ...agoDateUnits, ...fromNowDateUnits, {
    value: 'f_fiscal quarter',
    unit: 'fiscal quarter',
    label: t('fiscal quarter from now')
  }, {
    value: 'f_fiscal year',
    unit: 'fiscal year',
    label: t('fiscal years from now')
  }];
};
//# sourceMappingURL=before_after_units.js.map