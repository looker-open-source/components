import tag from 'clean-tag'
import * as React from 'react'
import styled, { css, ThemedStyledProps } from '../../../styled_components'
import { reset } from '../../../styles/reset'
import { Theme } from '../../../themes'
import { ValidationType } from '../Form'

export interface ValidationMessageProps {
  type: ValidationType
}

type ThemedProps<P> = ThemedStyledProps<P, Theme>

const handleValidationType = (props: ThemedProps<ValidationMessageProps>) => {
  switch (props.type) {
    case 'error':
      return css`
        color: ${props.theme.semanticColors.danger.dark};
      `
    case 'warning':
      return css`
        color: ${props.theme.semanticColors.secondary.dark};
      `
    case 'confirmation':
      return css`
        color: ${props.theme.semanticColors.primary.light};
      `
    default:
      return
  }
}

const InternalValidationMessage: React.SFC<ValidationMessageProps> = ({
  type,
  ...props
}) => {
  return <tag.div {...props}>{props.children}</tag.div>
}

export const ValidationMessage = styled<ValidationMessageProps>(
  InternalValidationMessage
)`
  ${reset};
  color: ${props => props.theme.semanticColors.danger.dark};
  margin-right: ${props => props.theme.spacing.s};
  margin-top: ${props => props.theme.spacing.s};
  font-size: ${props => props.theme.fontRamp[6]};
  ${handleValidationType};
`
