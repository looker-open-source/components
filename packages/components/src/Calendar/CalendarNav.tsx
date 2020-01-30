import React, { FC, useContext, SyntheticEvent } from 'react'
import { NavbarElementProps } from 'react-day-picker'
import styled from 'styled-components'
import { IconButton, ButtonTransparent } from '../Button'
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
  nextMonth,
  previousMonth,
}) => {
  const { size, onNavClick } = useContext(CalendarContext)

  const handleNextClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onNavClick(nextMonth)
  }

  const handlePreviousClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onNavClick(previousMonth)
  }

  const handleLabelClick = () => {
    onNavClick(new Date())
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
      <ButtonTransparent onClick={handleLabelClick} color="neutral">
        <Heading as={headingSizeMap(size)}>
          {localeUtils.formatMonthTitle(month)}
        </Heading>
      </ButtonTransparent>

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
