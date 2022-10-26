import React from 'react';
import { StringFilter } from './StringFilter';

const Template = args => React.createElement(StringFilter, args);

export const Basic = Template.bind({});
Basic.args = {
  filterType: 'string',
  item: {
    id: '1',
    type: 'blank',
    is: false
  },
  showAdd: false,
  showName: true,
  showRemove: false,
  showOperator: false,
  showMatchesAdvanced: false
};
export default {
  title: 'Filters / String Filter',
  component: StringFilter
};
//# sourceMappingURL=StringFilter.stories.js.map