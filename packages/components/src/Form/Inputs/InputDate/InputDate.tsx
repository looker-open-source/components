import React, { FC, useState } from 'react'
import isFunction from 'lodash/isFunction'
import { Calendar, CalendarSize, LocaleCodes } from '../../../Calendar'

interface InputDateProps {
  initialDate?: Date
  onChange?: (day: Date) => void
  size?: CalendarSize
  locale?: LocaleCodes
}

export const InputDate: FC<InputDateProps> = ({
  onChange,
  initialDate,
  size,
  locale = LocaleCodes.En,
}) => {
  const [date, setDate] = useState(initialDate)
  const handleDayClick = (day: Date) => {
    setDate(day)
    if (isFunction(onChange)) {
      onChange(day)
    }
  }
  return (
    <Calendar
      selectedDates={date}
      onDayClick={handleDayClick}
      size={size}
      locale={locale}
    />
  )
}
