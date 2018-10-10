import tag from 'clean-tag'
import * as React from 'react'
import { css, styled } from '../../../../style'
import { ThemedProps } from '../../../../types'
import { InputProps } from '../InputProps'

export interface InputTextProps extends InputProps {
  /**
   * Specifies value of the input field.
   */
  value?: string
  /**
   * Displays an example value or short hint to the user. Should not replace a label.
   */
  placeholder?: string
}

const handleValidationType = (props: ThemedProps<InputProps>) => {
  switch (props.validationType) {
    case 'error':
      return css`
        background-color: ${props.theme.colors.semanticColors.danger.lighter};
      `
    default:
      return
  }
}

const InternalInputText: React.SFC<InputTextProps> = ({
  validationType,
  ...props
}) => {
  return <tag.input type="text" {...props} />
}

export const InputText = styled<InputTextProps>(InternalInputText)`
  border: solid 1px
    ${props => props.theme.colors.semanticColors.primary.borderColor};
  height: 28px;
  padding: 0 ${props => props.theme.space.small};
  border-radius: 4px;
  font-size: ${props => props.theme.fontSizes[5]};
  ${handleValidationType};
`
