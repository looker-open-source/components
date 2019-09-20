import { useState } from 'react'

export interface UseToggleReturn {
  value: boolean
  setOn: () => void
  setOff: () => void
  toggle: () => void
}

export function useToggle(initialValue = false): UseToggleReturn {
  const [value, setValue] = useState(initialValue)
  const setOn = () => setValue(true)
  const setOff = () => setValue(false)
  const toggle = () => setValue(!value)
  return { value, setOn, setOff, toggle }
}
