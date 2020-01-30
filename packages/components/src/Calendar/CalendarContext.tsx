import { createContext } from 'react'
import { CalendarSize } from './calendar-size'

export const CalendarContext = createContext<CalendarSize>('medium')
