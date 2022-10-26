import { useState } from 'react';
export function useScrollState() {
  const [listScrollPosition, setListScrollPosition] = useState(0);
  const [listClientRect, setListClientRect] = useState();
  return {
    listClientRect,
    listScrollPosition,
    setListClientRect,
    setListScrollPosition
  };
}
//# sourceMappingURL=useScrollState.js.map