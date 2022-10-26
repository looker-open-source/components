import { useTranslation } from '../../../../utils';
import { useUserAttributeOption } from './get_user_attribute_option';
export const useLocationFilterOptions = () => {
  const {
    t
  } = useTranslation('get_location_filter_options');
  const userAttributeOption = useUserAttributeOption();
  return [{
    value: 'location',
    label: t('Location')
  }, {
    value: 'circle',
    label: t('Circle')
  }, {
    value: 'box',
    label: t('Box')
  }, {
    value: 'anyvalue',
    label: t('is anywhere')
  }, {
    value: 'null',
    label: t('is null')
  }, {
    value: 'notnull',
    label: t('is not null')
  }, userAttributeOption];
};
export const useUnitOptions = () => {
  const {
    t
  } = useTranslation('get_location_filter_options');
  return [{
    value: 'feet',
    label: t('feet')
  }, {
    value: 'kilometers',
    label: t('kilometers')
  }, {
    value: 'meters',
    label: t('meters')
  }, {
    value: 'miles',
    label: t('miles')
  }];
};
//# sourceMappingURL=get_location_filter_options.js.map