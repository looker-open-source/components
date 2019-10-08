import styled from 'styled-components'
import { TextBase } from './TextBase'

export const Code = styled(TextBase).attrs({ as: 'code' })``

Code.defaultProps = { fontFamily: 'code' }
