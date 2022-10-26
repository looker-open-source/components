import React from 'react';
import isEqual from 'lodash/isEqual';

function checkDeps(deps) {
  if (!deps || !deps.length) {
    throw new Error('useEffectDeepEquals should not be used with no dependencies. Use React.useEffect instead.');
  }

  if (deps.every(isPrimitive)) {
    throw new Error('useEffectDeepEquals should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
  }
}

function isPrimitive(val) {
  return val == null || /^[sbn]/.test(typeof val);
}

export function useDeepCompareMemoize(value) {
  const ref = React.useRef(value);
  const signalRef = React.useRef(0);

  if (!isEqual(value, ref.current)) {
    ref.current = value;
    signalRef.current += 1;
  }

  return React.useMemo(() => ref.current, [signalRef.current]);
}
export const useEffectDeepEquals = (callback, dependencies) => {
  if (process.env.NODE_ENV !== 'production') {
    checkDeps(dependencies);
  }

  return React.useEffect(callback, useDeepCompareMemoize(dependencies));
};
//# sourceMappingURL=useEffectDeepEquals.js.map