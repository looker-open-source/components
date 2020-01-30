import React, { FC, useContext } from 'react'
import { NavbarElementProps } from 'react-day-picker'
import { Heading } from '../Text'
import { CalendarSize } from './calendar-size'
import { CalendarContext } from './CalendarContext'

const headingSizeMap = (size?: CalendarSize) => {
  switch (size) {
    case 'small':
      return 'h4'
    case 'medium':
      return 'h3'
    case 'large':
      return 'h2'
    default:
      return 'h3'
  }
}

export const CalendarNav: FC<NavbarElementProps> = ({
  month,
  localeUtils,
  nextMonth,
  previousMonth,
  ...rest
}) => {
  const size = useContext(CalendarContext)

  console.log(rest, nextMonth, previousMonth)
  return (
    <div>
      <Heading as={headingSizeMap(size)}>
        {localeUtils.formatMonthTitle(month)}
      </Heading>
    </div>
  )
}
