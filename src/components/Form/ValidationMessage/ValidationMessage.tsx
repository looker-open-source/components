import tag from 'clean-tag'
import * as React from 'react'
import styled, { css } from '../../../styled_components'
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

const InternalValidationMessage: React.SFC<ValidationMessageProps> = ({
  ...props
}) => {
  return <tag.div {...props}>{props.message}</tag.div>
}

export const ValidationMessage = styled<ValidationMessageProps>(
  InternalValidationMessage
)`
  color: ${props => props.theme.semanticColors.danger.dark};
  margin-right: ${props => props.theme.spacing.s};
  margin-top: ${props => props.theme.spacing.s};
  font-size: ${props => props.theme.fontRamp[6]};
  ${handleValidationType};
`
