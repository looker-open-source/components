

import { useActions } from '../useActions';
import { useStoreState } from '../useStoreState';
export const createSliceHooks = (slice, saga) => ({
  useActions: () => {
    return useActions(slice);
  },
  useStoreState: () => {
    return useStoreState(slice, saga);
  }
});
export const setupSlice = ({
  store,
  slice,
  saga
}) => {
  if (saga) {
    store.addSaga(saga);
  }
  store.addReducer(slice.name, slice.reducer);
};
//# sourceMappingURL=index.js.map