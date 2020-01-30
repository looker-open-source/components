import React, { FC } from 'react'
import { NavbarElementProps } from 'react-day-picker'
import { Heading } from '../Text'
import { CalendarSize } from './calendar-size'

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

interface CalendarNavProps extends NavbarElementProps {
  size?: CalendarSize
}

export const CalendarNav: FC<CalendarNavProps> = ({
  month,
  localeUtils,
  nextMonth,
  previousMonth,
  size,
  ...rest
}) => {
  console.log(rest, nextMonth, previousMonth)
  return (
    <div>
      <Heading as={headingSizeMap(size)}>
        {localeUtils.formatMonthTitle(month)}
      </Heading>
    </div>
  )
}

export const CalendarNavWithSize = (size?: CalendarSize) => {
  const NavComponent: FC<NavbarElementProps> = props => (
    <CalendarNav size={size} {...props} />
  )
  NavComponent.displayName = 'CalendarNav'
  return NavComponent
}
