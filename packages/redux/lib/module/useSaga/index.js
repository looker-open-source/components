

import { useStore } from '../useStore';
export const useSaga = saga => {
  const store = useStore();
  if (saga) {
    store.addSaga(saga);
  }
};
//# sourceMappingURL=index.js.map