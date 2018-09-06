import tag from 'clean-tag'
import * as React from 'react'
import styled from '../../../styled_components'
import { reset } from '../../../styles/reset'

export interface InputTextProps {
  id?: string
  name?: string
  disabled?: boolean
  placeholder?: string
  // aria-placeholder?: string
  readOnly?: boolean
  type?: 'email' | 'number' | 'password' | 'text'
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const InternalInputText: React.SFC<InputTextProps> = ({ ...props }) => {
  return <tag.input {...props} />
}

export const InputText = styled<InputTextProps>(InternalInputText)`
  ${reset}
  border: solid 1px ${props => props.theme.semanticColors.primary.borderColor};
  height: 28px;
  padding: 0 ${props => props.theme.spacing.s};
  border-radius: 4px;
  font-size: ${props => props.theme.fontRamp.five};
`
