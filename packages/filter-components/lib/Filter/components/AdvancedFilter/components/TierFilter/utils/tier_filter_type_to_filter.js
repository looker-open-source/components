import defaultTo from 'lodash/defaultTo';
import { MatchesAdvanced } from '../../MatchesAdvanced';
import { MultiStringInput } from '../../StringFilter/components/MultiStringInput';
import { StringInput } from '../../StringFilter/components/StringInput';
import { UserAttributes } from '../../UserAttributes';
import { ParamFilter } from '../components/ParamFilter';
const typeMap = {
  anyvalue: () => '',
  match: MultiStringInput,
  user_attribute: UserAttributes
};
const typeMapSingleInput = {
  match: StringInput
};
export const tierFilterTypeToFilter = (type, isParamFilter, allowMultipleValues) => {
  if (isParamFilter && type !== 'user_attribute') {
    return ParamFilter;
  } else if (!allowMultipleValues && typeMapSingleInput[type]) {
    return typeMapSingleInput[type];
  }

  return defaultTo(typeMap[type], MatchesAdvanced);
};
//# sourceMappingURL=tier_filter_type_to_filter.js.map