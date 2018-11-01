import { styled } from '../../style'
import { Text } from '../Text/Text'

export const Code = styled(Text)`
  font-family: ${props => props.theme.fonts.code};
`.withComponent('code')
