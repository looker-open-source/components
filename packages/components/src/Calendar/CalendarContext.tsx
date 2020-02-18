import { createContext } from 'react'
import noop from 'lodash/noop'
import { CalendarSize } from './calendar-size'

export interface CalendarContextValue {
  size?: CalendarSize
  onNavClick?: (month: Date) => void
  showNextButton: boolean
  showPreviousButton: boolean
}

export const CalendarContext = createContext<CalendarContextValue>({
  onNavClick: noop,
  showNextButton: true,
  showPreviousButton: true,
  size: 'medium',
})
