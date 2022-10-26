import { useTranslation } from '../../../../../../utils';
import { formatDate } from './format_date';
export const useRelativeTimeframeToString = timeframe => {
  const {
    t
  } = useTranslation('get_relative_timeframe_presets');
  return typeof timeframe === 'string' ? t(timeframe) : `${formatDate(timeframe.from)} - ${formatDate(timeframe.to)}`;
};
//# sourceMappingURL=relative_timeframe_to_string.js.map