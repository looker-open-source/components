

import { useSelector } from 'react-redux';
import { useSaga } from '../useSaga';
import { useSlice } from '../useSlice';
import get from 'lodash/get';

export const useStoreState = (slice, saga) => {
  useSaga(saga);
  useSlice(slice);
  return useSelector(state => get(state, slice.name, slice.getInitialState()));
};
//# sourceMappingURL=index.js.map