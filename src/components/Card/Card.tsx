import styled from '../../styled_components'
import theme from '../../themes'
import { fog400 } from '../../styles/colors'

export interface CardProps {
  raised?: boolean
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
  transition: border ${props => props.theme.transitions.durationShorter} ease;

  &:hover {
    border-color: ${fog400};
  }
`
