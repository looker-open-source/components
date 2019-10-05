import {
  CompatibleHTMLProps,
  CustomizableAttributes,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'

import styled from 'styled-components'

export type ValidationType = 'error'

export const CustomizableValidationMessageAttributes: CustomizableAttributes = {
  fontSize: 'xsmall',
}

export interface ValidationMessageProps
  extends LayoutProps,
    SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLDivElement> {
  /**
   * The type of validation, therefore changing the message's text color. Accepts: error.
   */
  type?: ValidationType
  /**
   * The validation message to render.
   */
  message?: string
}

export const ValidationMessage = styled.div.attrs({
  fontSize: CustomizableValidationMessageAttributes.fontSize,
})<ValidationMessageProps>`
  ${props =>
    props.type === 'error' ? `color: ${props.theme.color.palette.red700}` : ''}
  ${layout}
  ${space}
  ${typography}
`

ValidationMessage.defaultProps = {
  mr: 'xsmall',
  mt: 'xsmall',
}
