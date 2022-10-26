import { useTranslation } from '../../../utils';
export const useDateUnits = () => {
  const {
    t
  } = useTranslation('date_units');
  return [{
    value: 'second',
    unit: 'second',
    label: t('seconds'),
    singular: t('second')
  }, {
    value: 'minute',
    unit: 'minute',
    label: t('minutes'),
    singular: t('minute')
  }, {
    value: 'hour',
    unit: 'hour',
    label: t('hours'),
    singular: t('hour')
  }, {
    value: 'day',
    unit: 'day',
    label: t('days'),
    singular: t('day')
  }, {
    value: 'week',
    unit: 'week',
    label: t('weeks'),
    singular: t('week')
  }, {
    value: 'month',
    unit: 'month',
    label: t('months'),
    singular: t('month')
  }, {
    value: 'quarter',
    unit: 'quarter',
    label: t('quarters'),
    singular: t('quarter')
  }, {
    value: 'year',
    unit: 'year',
    label: t('years'),
    singular: t('year')
  }];
};
export const useFiscalDateUnits = () => {
  const {
    t
  } = useTranslation('date_units');
  return [{
    value: 'fiscal quarter',
    unit: 'fiscal quarter',
    label: t('fiscal quarters'),
    singular: t('fiscal quarter')
  }, {
    value: 'fiscal year',
    unit: 'fiscal year',
    label: t('fiscal years'),
    singular: t('fiscal year')
  }];
};
//# sourceMappingURL=date_units.js.map