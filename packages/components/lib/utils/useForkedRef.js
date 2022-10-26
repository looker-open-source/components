import { useMemo } from 'react';

function assignRef(ref, value) {
  if (!ref) return;

  if (typeof ref === 'function') {
    ref(value);
  } else {
    try {
      ;
      ref.current = value;
    } catch (error) {
      throw new Error(`Cannot assign value "${value}" to ref "${ref}"`);
    }
  }
}

export function useForkedRef(...refs) {
  return useMemo(() => {
    return node => {
      refs.forEach(ref => {
        assignRef(ref, node);
      });
    };
  }, refs);
}
//# sourceMappingURL=useForkedRef.js.map