import React, { FC, useContext, SyntheticEvent } from 'react'
import { NavbarElementProps } from 'react-day-picker'
import styled from 'styled-components'
import noop from 'lodash/noop'
import { IconButton, ButtonTransparent } from '../Button'
import { Heading } from '../Text'
import { CalendarSize } from './calendar-size'
import { CalendarContext } from './CalendarContext'

const headingSizeMap = (size?: CalendarSize) => {
  switch (size) {
    case 'small':
      return 'h5'
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
  labels,
  localeUtils,
  locale,
  nextMonth,
  previousMonth,
}) => {
  const {
    size,
    onNavClick = noop,
    showPreviousButton,
    showNextButton,
  } = useContext(CalendarContext)

  const handleNextClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onNavClick(nextMonth)
  }

  const handlePreviousClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onNavClick(previousMonth)
  }

  const handleLabelClick = () => {
    onNavClick(new Date(Date.now())) // specify Date.now() to facilitate testing mocks
  }

  return (
    <NavGrid>
      <NextButtonWrapper>
        {showPreviousButton && (
          <IconButton
            icon="CaretLeft"
            label={labels.previousMonth}
            color="neutral"
            size={size}
            onClick={handlePreviousClick}
          />
        )}
      </NextButtonWrapper>
      <ButtonTransparent
        onClick={handleLabelClick}
        color="neutral"
        aria-label="View today"
      >
        <Heading as={headingSizeMap(size)} fontWeight="semiBold">
          {localeUtils.formatMonthTitle(month, locale)}
        </Heading>
      </ButtonTransparent>

      <PrevButtonWrapper>
        {showNextButton && (
          <IconButton
            icon="CaretRight"
            label={labels.nextMonth}
            color="neutral"
            size={size}
            onClick={handleNextClick}
            style={{ justifySelf: 'right' }}
          />
        )}
      </PrevButtonWrapper>
    </NavGrid>
  )
}

const NavGrid = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
  justify-items: center;
`

const NextButtonWrapper = styled.div`
  justify-self: left;
`

const PrevButtonWrapper = styled.div`
  justify-self: right;
`
