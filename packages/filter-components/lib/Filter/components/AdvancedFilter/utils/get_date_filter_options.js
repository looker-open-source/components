import { useTranslation } from '../../../../utils';
import { useUserAttributeOption } from './get_user_attribute_option';
export const useDateFilterOptions = isParameter => {
  const {
    t
  } = useTranslation('get_date_filter_options');
  const userAttributeOption = useUserAttributeOption();

  if (isParameter) {
    return [{
      value: 'on',
      label: t('is on the day')
    }, userAttributeOption];
  }

  return [{
    value: 'past',
    label: t('is in the last')
  }, {
    value: 'on',
    label: t('is on the day')
  }, {
    value: 'range',
    label: t('is in range')
  }, {
    value: 'before',
    label: t('is before')
  }, {
    value: 'after',
    label: t('is on or after')
  }, {
    value: 'year',
    label: t('is in the year')
  }, {
    value: 'month',
    label: t('is in the month')
  }, {
    value: 'this',
    label: t('is this')
  }, {
    value: 'next',
    label: t('is next')
  }, {
    value: 'last',
    label: t('is previous')
  }, {
    value: 'relative',
    label: t('is')
  }, {
    value: 'null',
    label: t('is null')
  }, {
    value: 'anyvalue',
    label: t('is any time')
  }, {
    value: 'notnull',
    label: t('is not null')
  }, userAttributeOption];
};
//# sourceMappingURL=get_date_filter_options.js.map