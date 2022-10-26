import { useCallback } from 'react';
export function useWrapEvent(ourHandler, theirHandler) {
  return useCallback(event => {
    theirHandler && theirHandler(event);

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  }, [ourHandler, theirHandler]);
}
//# sourceMappingURL=useWrapEvent.js.map