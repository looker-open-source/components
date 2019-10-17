import styled from 'styled-components'

const Hr = styled.hr`
  margin: ${props => props.theme.space.xxlarge} auto;
  width: 50%;
  border: none;
  height: 4px;
  border-radius: 3px;
  background: ${props => props.theme.colors.palette.purple200};
`

export default Hr
