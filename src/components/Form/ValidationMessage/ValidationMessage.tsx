import tag from 'clean-tag'
import * as React from 'react'
import { css, styled } from '../../../style'
import { ThemedProps } from '../../../types'

export type ValidationType = 'error' | 'warning' | 'info' | 'success'

export interface ValidationMessageProps {
  type?: ValidationType
  message?: string
}

const handleValidationType = (props: ThemedProps<ValidationMessageProps>) => {
  switch (props.type) {
    case 'error':
      return css`
        color: ${props.theme.semanticColors.danger.dark};
      `
    // "Dummy" colors will need to be changed
    case 'warning':
      return css`
        color: ${props.theme.semanticColors.secondary.dark};
      `
    case 'info':
      return css`
        color: ${props.theme.semanticColors.primary.light};
      `
    case 'success':
      return css`
        color: ${props.theme.semanticColors.primary.main};
      `
    default:
      return
  }
}

const InternalValidationMessage = ({
  type,
  message,
  ...props
}: ValidationMessageProps) => {
  return <tag.div {...props}>{message}</tag.div>
}

export const ValidationMessage = styled<ValidationMessageProps>(
  InternalValidationMessage
)`
  color: ${props => props.theme.semanticColors.danger.dark};
  margin-right: ${props => props.theme.space.small};
  margin-top: ${props => props.theme.space.small};
  font-size: ${props => props.theme.fontSizes[6]};
  ${handleValidationType};
`
