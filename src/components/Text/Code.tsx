import styled from '../../styled_components'
import { codeFont } from '../../styles/typography'
import { Text } from '../Text/Text'

export const Code = styled(Text)`
  font-family: ${codeFont};
`.withComponent('code')
