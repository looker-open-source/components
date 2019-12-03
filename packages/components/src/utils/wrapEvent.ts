import { SyntheticEvent } from 'react'

export function wrapEvent<E extends SyntheticEvent>(
  ourHandler: (e: E) => void,
  theirHandler?: (e: E) => void
) {
  return (event: E) => {
    theirHandler && theirHandler(event)
    if (!event.defaultPrevented) {
      return ourHandler(event)
    }
  }
}
