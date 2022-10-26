import { Box, Flex } from '@looker/components';
import React from 'react';
import { GroupSelect } from '../GroupSelect';
import { locationFilterTypeToFilter } from './utils/location_filter_type_to_filter';
import { useLocationFilterOptions, useFilterOptions } from '../../utils';
export const LocationFilter = ({
  item,
  filterType,
  onChange,
  userAttributes,
  validationMessage,
  showMatchesAdvanced
}) => {
  const locationFilterOptions = useLocationFilterOptions();
  const options = useFilterOptions(locationFilterOptions, showMatchesAdvanced);

  const locationTypeChange = value => onChange(item.id, {
    type: value
  });

  const FilterComponent = locationFilterTypeToFilter(item.type);
  return React.createElement(Flex, {
    flexDirection: "row",
    alignItems: "center"
  }, React.createElement(Box, null, React.createElement(GroupSelect, {
    value: item.type,
    options: options,
    onChange: locationTypeChange,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    placement: ['null', 'notnull', 'anyvalue'].includes(item.type) ? undefined : 'left'
  })), React.createElement(FilterComponent, {
    item: item,
    onChange: onChange,
    validationMessage: validationMessage,
    userAttributes: userAttributes,
    filterType: filterType
  }));
};
//# sourceMappingURL=LocationFilter.js.map