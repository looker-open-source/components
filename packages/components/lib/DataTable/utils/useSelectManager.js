import { useState } from 'react';
export const useSelectManager = (possibilities, defaultSelections = []) => {
  const [selections, setSelections] = useState(defaultSelections);

  const onSelect = selectionId => {
    setSelections(selections.includes(selectionId) ? selections.filter(itemId => possibilities.includes(itemId) && itemId !== selectionId) : [...selections, selectionId]);
  };

  const onSelectAll = () => {
    setSelections(selections.length ? [] : possibilities);
  };

  return {
    onSelect,
    onSelectAll,
    selections,
    setSelections
  };
};
//# sourceMappingURL=useSelectManager.js.map