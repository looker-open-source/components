import React from 'react';
import { MatchesAdvanced } from './MatchesAdvanced';
export const DefaultStory = args => React.createElement(MatchesAdvanced, args);
DefaultStory.args = {
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
  title: 'Filters / Matches Advanced',
  component: MatchesAdvanced
};
//# sourceMappingURL=MatchesAdvanced.stories.js.map