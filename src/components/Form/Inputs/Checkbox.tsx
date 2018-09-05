import tag from 'clean-tag'
import * as React from 'react'
import styled from '../../../styled_components'
import { reset } from '../../../styles/reset'

export interface CheckboxProps {
  checked?: boolean
  name?: string
  disabled?: boolean
  id?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const InternalCheckbox: React.SFC<CheckboxProps> = ({ ...props }) => {
  return <tag.input type="checkbox" {...props} />
}

export const Checkbox = styled<CheckboxProps>(InternalCheckbox)`
  ${reset};
`
