import styled from 'styled-components'

export const ActionListHeader = styled.div`
  border: solid 1px ${props => props.theme.colors.palette.charcoal200};
  color: ${props => props.theme.colors.palette.charcoal900};
  display: flex;
  font-size: ${props => props.theme.fontSizes.xsmall};
  font-weight: ${props => props.theme.fontWeights.semiBold};
`
