import { DateFilter } from '../components/AdvancedFilter/components/DateFilter';
import { LocationFilter } from '../components/AdvancedFilter/components/LocationFilter';
import { NumberFilter } from '../components/AdvancedFilter/components/NumberFilter';
import { StringFilter } from '../components/AdvancedFilter/components/StringFilter';
import { TierFilter } from '../components/AdvancedFilter/components/TierFilter';
export const componentsMap = {
  date: DateFilter,
  date_time: DateFilter,
  number: NumberFilter,
  string: StringFilter,
  tier: TierFilter,
  location: LocationFilter
};
export const typeToComponent = type => componentsMap[type];
//# sourceMappingURL=type_to_component.js.map