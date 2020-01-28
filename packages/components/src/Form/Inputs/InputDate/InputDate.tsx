import React, { FC, useState } from 'react'
import isFunction from 'lodash/isFunction'
import { Calendar, CalendarSize } from '../../../Calendar'

interface InputDateProps {
  initialDate?: Date
  onChange?: (day: Date) => void
  size?: CalendarSize
}

export const InputDate: FC<InputDateProps> = ({
  onChange,
  initialDate,
  size,
}) => {
  const [date, setDate] = useState(initialDate)
  const handleDayClick = (day: Date) => {
    setDate(day)
    if (isFunction(onChange)) {
      onChange(day)
    }
  }
  return (
    <Calendar selectedDates={date} onDayClick={handleDayClick} size={size} />
  )
}
