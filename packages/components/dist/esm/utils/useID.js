import { useMemo } from 'react';
import { v4 as uuid } from 'uuid';
export function useID(id) {
  return useMemo(() => {
    return id || uuid();
  }, [id]);
}
//# sourceMappingURL=useID.js.map