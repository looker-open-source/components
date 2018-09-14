import tag from 'clean-tag'
import * as React from 'react'
import styled from '../../../styled_components'
import { red000, red400 } from '../../../styles/colors'
import { reset } from '../../../styles/reset'
import { InputProps } from './InputProps'

export interface InputTextProps extends InputProps {
  /**
   * Specifies the initial value of the input field.
   */
  value?: string
  /**
   * Displays an example value or short hint to the user. Should not replace a label.
   */
  placeholder?: string
  /**
   * Determines if the input is readonly.
   * @default false
   */
  readOnly?: boolean
  /**
   * Determines if an input is required.
   * @default false
   */
  required?: boolean
  /**
   * If true, input is invalid and will render with red decorations, if false, will render normally
   * @default false
   */
  invalid?: boolean
}

const InternalInputText: React.SFC<InputTextProps> = ({ ...props }) => {
  return <tag.input type="text" {...props} />
}

export const InputText = styled<InputTextProps>(InternalInputText)`
  ${reset}
  border: solid 1px ${props =>
    props.invalid ? red400 : props.theme.semanticColors.primary.borderColor};
  background-color: ${props => (props.invalid ? red000 : '')};
  height: 28px;
  padding: 0 ${props => props.theme.spacing.s};
  border-radius: 4px;
  font-size: ${props => props.theme.fontRamp[5]};
`
