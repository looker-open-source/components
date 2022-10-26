import { MatchesAdvanced } from '../../MatchesAdvanced';
import { UserAttributes } from '../../UserAttributes';
import { Between } from '../components/Between';
import { MultiInput } from '../components/MultiInput';
import { SingleNumberInput } from '../components/SingleNumberInput';

const Blank = () => '';

const filterTypeToNumberMap = {
  '=': MultiInput,
  '>': SingleNumberInput,
  '<': SingleNumberInput,
  '>=': SingleNumberInput,
  '<=': SingleNumberInput,
  between: Between,
  null: Blank,
  user_attribute: UserAttributes
};
const filterTypeToNumberMapSingleInput = {
  '=': SingleNumberInput
};
export const numberFilterTypeToFilter = (type, allowMultipleOptions, isParameterField) => {
  if ((!allowMultipleOptions || isParameterField) && filterTypeToNumberMapSingleInput[type]) {
    return filterTypeToNumberMapSingleInput[type];
  }

  return filterTypeToNumberMap[type] || MatchesAdvanced;
};
//# sourceMappingURL=number_filter_type_to_filter.js.map