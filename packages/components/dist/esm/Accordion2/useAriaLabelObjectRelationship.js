import { useID } from '../utils';
export const useAriaLabelObjectRelationship = id => {
  id = useID(id);
  const labelID = `${id}-label`;
  const objectID = `${id}-object`;
  return [{
    'aria-controls': objectID,
    id: labelID
  }, {
    'aria-labelledby': labelID,
    id
  }];
};
//# sourceMappingURL=useAriaLabelObjectRelationship.js.map