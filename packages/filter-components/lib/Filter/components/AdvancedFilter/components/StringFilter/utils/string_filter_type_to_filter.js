import defaultTo from 'lodash/defaultTo';
import { MatchesAdvanced } from '../../MatchesAdvanced';
import { UserAttributes } from '../../UserAttributes';
import { MultiStringInput } from '../components/MultiStringInput';
import { StringInput } from '../components/StringInput';

const Blank = () => '';

const filterTypeToStringMap = {
  null: Blank,
  contains: MultiStringInput,
  match: MultiStringInput,
  startsWith: MultiStringInput,
  endsWith: MultiStringInput,
  blank: Blank,
  user_attribute: UserAttributes
};
const filterTypeToStringMapSingleValue = {
  contains: StringInput,
  match: StringInput,
  startsWith: StringInput,
  endsWith: StringInput
};
export const stringFilterTypeToFilter = (type, isParameterField, allowMultipleValues) => {
  if ((!allowMultipleValues || isParameterField) && filterTypeToStringMapSingleValue[type]) {
    return filterTypeToStringMapSingleValue[type];
  }

  return defaultTo(filterTypeToStringMap[type], MatchesAdvanced);
};
//# sourceMappingURL=string_filter_type_to_filter.js.map