
import any from 'lodash/fp/any';
import flow from 'lodash/fp/flow';
import { treeToList } from './tree';
const isMatchesAdvancedItem = subTypes => ({
  type
}) => type === 'matchesAdvanced' || subTypes.indexOf(type) === -1;

export const hasMatchesAdvancedNode = subTypes => flow([treeToList, any(isMatchesAdvancedItem(subTypes))]);
//# sourceMappingURL=has_matches_advanced_node.js.map