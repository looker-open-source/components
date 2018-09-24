import { codeFont } from '../../style/typography'
import styled from '../../styled_components'
import { Text } from '../Text/Text'

export const Code = styled(Text)`
  font-family: ${codeFont};
`.withComponent('code')
