import * as React from 'react'
import styled, { css, StyledComponentClass } from '../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../themes'
export { ThemeInterface }
// End Typescript component boilerplate

import { Text, TextProps } from '../Text/Text'
import { codeFont } from '../../styles/typography'

export const Code = Text.extend`
  font-family: ${codeFont};
`.withComponent('code')
