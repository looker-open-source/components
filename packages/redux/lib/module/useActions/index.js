

import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
const dispatchMap = new WeakMap();

export const useActions = slice => {
  const dispatch = useDispatch();

  if (!dispatchMap.has(dispatch)) {
    dispatchMap.set(dispatch, new WeakMap());
  }
  const boundActionCreatorsMap = dispatchMap.get(dispatch);
  if (!boundActionCreatorsMap.has(slice)) {
    boundActionCreatorsMap.set(slice, bindActionCreators(slice.actions, dispatch));
  }
  return boundActionCreatorsMap.get(slice);
};
//# sourceMappingURL=index.js.map