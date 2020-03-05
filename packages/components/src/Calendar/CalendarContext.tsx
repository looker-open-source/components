import { createContext } from 'react'
import noop from 'lodash/noop'
import { CalendarSize } from './calendar-size'

export interface CalendarContextValue {
  size?: CalendarSize
  onNextClick?: (month: Date) => void
  onNowClick?: (month: Date) => void
  onPrevClick?: (month: Date) => void
  showNextButton: boolean
  showPreviousButton: boolean
}

export const CalendarContext = createContext<CalendarContextValue>({
  onNextClick: noop,
  onNowClick: noop,
  onPrevClick: noop,
  showNextButton: true,
  showPreviousButton: true,
  size: 'medium',
})
