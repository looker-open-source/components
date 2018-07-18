import { rem, rgba } from 'polished'
import styled, { css } from '../../styled_components'
import { brandFont } from '../../styles/typography'
import theme, { ThemeInterface } from '../../themes'
import { fog400 } from '../../styles/colors'

export interface CardProps {
  raised?: boolean
  url?: string
  className?: string
}

export const Card = styled<CardProps, 'div'>('div')`
  background: #fff;
  border-radius: 4px;
  box-shadow: ${props => (props.raised ? theme.shadows.small : 'none')};
  border: solid 1px ${props => props.theme.colors.borderColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 200px;
  transition: border 150ms ease;

  &:hover {
    border-color: ${fog400};
  }
`
