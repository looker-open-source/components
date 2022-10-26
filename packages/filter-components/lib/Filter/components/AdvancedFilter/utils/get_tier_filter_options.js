import { useTranslation } from '../../../../utils';
import { useUserAttributeOption } from './get_user_attribute_option';
export const useTierFilterOptions = () => {
  const {
    t
  } = useTranslation('get_tier_filter_options');
  const userAttributeOption = useUserAttributeOption();
  return [{
    value: 'anyvalue',
    label: t('is any value')
  }, {
    value: 'match',
    label: t('is')
  }, {
    value: '!match',
    label: t('is not')
  }, userAttributeOption];
};
export const useParamFilterOptions = () => {
  const {
    t
  } = useTranslation('get_tier_filter_options');
  const userAttributeOption = useUserAttributeOption();
  return [{
    value: 'match',
    label: t('is')
  }, userAttributeOption];
};
//# sourceMappingURL=get_tier_filter_options.js.map