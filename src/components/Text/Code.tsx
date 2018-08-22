import { codeFont } from '../../styles/typography'
import { Text } from '../Text/Text'

export const Code = Text.extend`
  font-family: ${codeFont};
`.withComponent('code')
