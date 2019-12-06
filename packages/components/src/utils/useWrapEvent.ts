import { SyntheticEvent, useCallback } from 'react'

export function useWrapEvent<E extends SyntheticEvent>(
  ourHandler: (e: E) => void,
  theirHandler?: (e: E) => void
) {
  return useCallback(
    (event: E) => {
      theirHandler && theirHandler(event)
      if (!event.defaultPrevented) {
        return ourHandler(event)
      }
    },
    [ourHandler, theirHandler]
  )
}
