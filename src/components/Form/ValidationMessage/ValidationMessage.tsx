import tag from 'clean-tag'
import * as React from 'react'
import { css, styled } from '../../../style'
import { ThemedProps } from '../../../types'
// import { isInputTextProps } from '../Inputs/InputText';

export type ValidationType = 'error'

export interface ValidationMessageProps {
  /**
   * The type of validation, therefore changing the message's text color. Accepts: error.
   */
  type?: ValidationType
  /**
   * The validation message to render.
   */
  message?: string
}

const InternalValidationMessage = ({
  type,
  message,
  ...props
}: ValidationMessageProps) => {
  return <tag.div {...props}>{message}</tag.div>
}

// const isValidationMessageProps = (props: any): props is ValidationMessageProps => {
//   return ((props as ValidationMessageProps).type !== undefined &&
//      (props as ValidationMessageProps).message !== undefined)
// }

const handleValidationType = (props: ThemedProps<ValidationMessageProps>) => {
  switch (props.type) {
    case 'error':
      return css`
        color: ${props.theme.semanticColors.danger.dark};
      `
    default:
      return
  }
}

export const ValidationMessage = styled<ValidationMessageProps>(
  InternalValidationMessage
)`
  margin-right: ${props => props.theme.space.small};
  margin-top: ${props => props.theme.space.small};
  font-size: ${props => props.theme.fontSizes[6]};
  ${handleValidationType};
`
