

import { useEffect } from 'react';
import { useStore } from 'react-redux';

export const useSlice = slice => {
  const store = useStore();
  useEffect(() => {
    store.addReducer(slice.name, slice.reducer);
  }, [slice, store]);
};
//# sourceMappingURL=index.js.map