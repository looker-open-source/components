

import { useStore } from '../useStore';

export const useSagas = sagas => {
  const store = useStore();
  sagas.forEach(saga => store.addSaga(saga));
};
//# sourceMappingURL=index.js.map