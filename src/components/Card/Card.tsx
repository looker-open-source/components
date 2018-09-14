import styled from '../../styled_components'
import { charcoal300 } from '../../styles/colors'

export interface CardProps {
  raised?: boolean
}

export const Card = styled<CardProps, 'div'>('div')`
  border-radius: 4px;
  box-shadow: ${props => (props.raised ? props.theme.shadows.one : 'none')};
  border: solid 1px ${props => props.theme.semanticColors.primary.borderColor};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 200px;
  overflow: hidden;
  /* stylelint-disable */
  transition: border ${props => props.theme.transitions.durationQuick}
      ${props => props.theme.easings.ease},
    box-shadow ${props => props.theme.transitions.durationQuick}
      ${props => props.theme.easings.ease};
  /* stylelint-enable */
  &:hover {
    border-color: ${charcoal300};
    box-shadow: ${props => (props.raised ? props.theme.shadows.two : 'none')};
  }
`
