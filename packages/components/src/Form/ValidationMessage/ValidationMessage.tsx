import React, { forwardRef, Ref } from 'react'
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

const ValidationMessageBase = styled.div.attrs(() => ({
  fontSize: CustomizableValidationMessageAttributes.fontSize,
}))<ValidationMessageProps>`
  ${props =>
    props.type === 'error'
      ? `color: ${props.theme.colors.palette.red700};`
      : ''}
  ${layout}
  ${space}
  ${typography}
`

export const ValidationMessage = forwardRef(
  ({ message, ...props }: ValidationMessageProps, ref: Ref<HTMLDivElement>) => (
    <ValidationMessageBase mr="xsmall" mt="xsmall" {...props} ref={ref}>
      {message}
    </ValidationMessageBase>
  )
)
