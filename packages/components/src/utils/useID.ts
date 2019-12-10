import { useMemo } from 'react'
import uuid from 'uuid/v4'

export function useID(id?: string) {
  return useMemo(() => {
    return id || uuid()
  }, [id])
}
