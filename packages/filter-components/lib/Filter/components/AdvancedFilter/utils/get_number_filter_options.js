import { useTranslation } from '../../../../utils';
import { useUserAttributeOption } from './get_user_attribute_option';
export const useNumberFilterOptions = isParameter => {
  const {
    t
  } = useTranslation('get_number_filter_options');
  const userAttributeOption = useUserAttributeOption();

  if (isParameter) {
    return [{
      value: '=',
      label: t('is')
    }, userAttributeOption];
  }

  return [{
    value: '=',
    label: t('is')
  }, {
    value: '>',
    label: t('is greater')
  }, {
    value: '>=',
    label: t('is greater equal')
  }, {
    value: '<',
    label: t('is less')
  }, {
    value: '<=',
    label: t('is less equal')
  }, {
    value: 'between',
    label: t('is between')
  }, {
    value: 'null',
    label: t('is null')
  }, {
    value: '!=',
    label: t('is not')
  }, {
    value: '!between',
    label: t('is not between')
  }, {
    value: '!null',
    label: t('is not null')
  }, userAttributeOption];
};
export const useBetweenOptions = () => {
  const {
    t
  } = useTranslation('get_number_filter_options');
  return [{
    value: '[]',
    label: t('inclusive')
  }, {
    value: '()',
    label: t('exclusive')
  }, {
    value: '[)',
    label: t('right exclusive')
  }, {
    value: '(]',
    label: t('left exclusive')
  }];
};
//# sourceMappingURL=get_number_filter_options.js.map