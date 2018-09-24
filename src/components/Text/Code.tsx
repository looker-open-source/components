import styled from '../../styled_components'
import { Text } from '../Text/Text'

export const Code = styled(Text)`
  font-family: ${p => p.theme.fontFaces.codeFont};
`.withComponent('code')
