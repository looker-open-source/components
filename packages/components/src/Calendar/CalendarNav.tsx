import React, { FC, useContext, SyntheticEvent } from 'react'
import { NavbarElementProps } from 'react-day-picker'
import styled from 'styled-components'
import noop from 'lodash/noop'
import { Tooltip } from '../Tooltip'
import { IconButton, ButtonTransparent } from '../Button'
import { Heading } from '../Text'
import { CalendarSize } from './calendar-size'
import { CalendarContext } from './CalendarContext'

const headingSizeMap = (size?: CalendarSize) => {
  switch (size) {
    case 'small':
      return 'h6'
    case 'medium':
      return 'h5'
    case 'large':
      return 'h4'
    default:
      return 'h5'
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
    onNowClick = noop,
    onNextClick = noop,
    onPrevClick = noop,
    showPreviousButton,
    showNextButton,
  } = useContext(CalendarContext)

  const handleNextClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onNextClick(nextMonth)
  }

  const handlePreviousClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onPrevClick(previousMonth)
  }

  const handleLabelClick = () => {
    onNowClick(new Date(Date.now())) // specify Date.now() to facilitate testing mocks
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

      <Tooltip content="View Current Month">
        {(eventHandlers, ref) => (
          <ButtonTransparent
            ref={ref}
            {...eventHandlers}
            onClick={handleLabelClick}
            color="neutral"
          >
            <Heading as={headingSizeMap(size)} fontWeight="semiBold">
              {localeUtils.formatMonthTitle(month, locale)}
            </Heading>
          </ButtonTransparent>
        )}
      </Tooltip>

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
