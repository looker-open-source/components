import styled from 'styled-components'

export const IconGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, 160px);
  margin-top: 2rem;
`

export const IconGridItem = styled.div`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.small};
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.palette.charcoal100};
  padding: 1rem;
  border-radius: ${props => props.theme.radii.medium};
  color: ${props => props.theme.colors.palette.charcoal600};
  &:hover {
    border-color: ${props => props.theme.colors.palette.blue300};
    color: ${props => props.theme.colors.palette.blue600};
  }
`
