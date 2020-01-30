import React, { FC, useContext, SyntheticEvent } from 'react'
import { NavbarElementProps } from 'react-day-picker'
import styled from 'styled-components'
import isFunction from 'lodash/isFunction'
import { IconButton } from '../Button'
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
  labels,
  showPreviousButton,
  showNextButton,
  onNextClick,
  onPreviousClick,
  ...rest
}) => {
  const size = useContext(CalendarContext)

  const handleNextClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (isFunction(onNextClick)) {
      onNextClick()
    }
  }

  const handlePreviousClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (isFunction(onPreviousClick)) {
      onPreviousClick()
    }
  }

  return (
    <NavGrid>
      <div>
        {showPreviousButton && (
          <IconButton
            icon="CaretLeft"
            label={labels.previousMonth}
            color="neutral"
            size={size}
            onClick={handlePreviousClick}
          />
        )}
      </div>
      <Heading as={headingSizeMap(size)}>
        {localeUtils.formatMonthTitle(month)}
      </Heading>
      <div>
        {showNextButton && (
          <IconButton
            icon="CaretRight"
            label={labels.nextMonth}
            color="neutral"
            size={size}
            onClick={handleNextClick}
          />
        )}
      </div>
    </NavGrid>
  )
}

const NavGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-items: center;
`
