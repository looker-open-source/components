import styled from '../../styled_components'

export interface CardProps {
  raised?: boolean
}

export const Card = styled.div<CardProps>`
  background: #fff;
  border-radius: 4px;
  box-shadow: ${props => (props.raised ? props.theme.shadows[1] : 'none')};
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
    border-color: ${props => props.theme.palette.charcoal300};
    box-shadow: ${props => (props.raised ? props.theme.shadows[2] : 'none')};
  }
`
