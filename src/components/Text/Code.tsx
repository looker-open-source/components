import { Text } from '../Text/Text'
import { codeFont } from '../../styles/typography'

export const Code = Text.extend`
  font-family: ${codeFont};
`.withComponent('code')
