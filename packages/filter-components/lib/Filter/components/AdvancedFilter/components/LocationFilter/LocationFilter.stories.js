import React from 'react';
import { LocationFilter } from './LocationFilter';
export const DefaultStory = args => React.createElement(LocationFilter, args);
DefaultStory.args = {
  filterType: 'location',
  item: {
    id: '1',
    type: 'anyvalue',
    is: false
  },
  showAdd: false,
  showName: true,
  showRemove: false,
  showOperator: false,
  showMatchesAdvanced: false
};
export default {
  title: 'Filters / Location Filter',
  component: LocationFilter
};
//# sourceMappingURL=LocationFilter.stories.js.map