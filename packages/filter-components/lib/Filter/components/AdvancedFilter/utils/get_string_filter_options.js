import { useTranslation } from '../../../../utils';
import { useUserAttributeOption } from './get_user_attribute_option';
export const useStringFilterOptions = isParameter => {
  const {
    t
  } = useTranslation('get_string_filter_options');
  const userAttributeOption = useUserAttributeOption();

  if (isParameter) {
    return [{
      value: 'match',
      label: t('is')
    }, userAttributeOption];
  }

  return [{
    value: 'match',
    label: t('is')
  }, {
    value: 'contains',
    label: t('contains')
  }, {
    value: 'startsWith',
    label: t('starts with')
  }, {
    value: 'endsWith',
    label: t('ends with')
  }, {
    value: 'blank',
    label: t('is blank')
  }, {
    value: 'null',
    label: t('is null')
  }, {
    value: '!match',
    label: t('is not')
  }, {
    value: '!contains',
    label: t('doesnt contain')
  }, {
    value: '!startsWith',
    label: t('doesnt start with')
  }, {
    value: '!endsWith',
    label: t('doesnt end with')
  }, {
    value: '!blank',
    label: t('is not blank')
  }, {
    value: '!null',
    label: t('is not null')
  }, userAttributeOption];
};
//# sourceMappingURL=get_string_filter_options.js.map