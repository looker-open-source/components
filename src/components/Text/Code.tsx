import { styled } from '../../style'
import { Text } from '../Text/Text'

export const Code = styled(Text)`
  font-family: ${props => props.theme.fontFaces.codeFont};
`.withComponent('code')
