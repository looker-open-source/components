import { MatchesAdvanced } from '../../MatchesAdvanced';
import { UserAttributes } from '../../UserAttributes';
import { LocationBox } from '../components/LocationBox';
import { LocationCircle } from '../components/LocationCircle';
import { LocationExact } from '../components/LocationExact';

const Blank = () => '';

const filterTypeToLocationMap = {
  location: LocationExact,
  circle: LocationCircle,
  box: LocationBox,
  anyvalue: Blank,
  null: Blank,
  notnull: Blank,
  user_attribute: UserAttributes
};
export const locationFilterTypeToFilter = type => filterTypeToLocationMap[type] || MatchesAdvanced;
//# sourceMappingURL=location_filter_type_to_filter.js.map