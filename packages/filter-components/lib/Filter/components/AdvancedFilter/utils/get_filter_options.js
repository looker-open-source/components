import { useMemo } from 'react';
import { useTranslation } from '../../../../utils';
export const useFilterOptions = (options, showMatchesAdvanced) => {
  const {
    t
  } = useTranslation('get_filter_options');
  return useMemo(() => showMatchesAdvanced ? [...options, {
    value: 'matchesAdvanced',
    label: t('matches advanced', {
      ns: 'get_filter_options'
    })
  }] : options, [options, showMatchesAdvanced, t]);
};
//# sourceMappingURL=get_filter_options.js.map