import { createContext } from 'react'
import noop from 'lodash/noop'
import { CalendarSize } from './calendar-size'

interface CalendarContextValue {
  size?: CalendarSize
  onNavClick: (month: Date) => void
}

export const CalendarContext = createContext<CalendarContextValue>({
  onNavClick: noop,
  size: 'medium',
})
