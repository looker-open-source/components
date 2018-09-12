import tag from 'clean-tag'
import * as React from 'react'
import styled from '../../../styled_components'
import { reset } from '../../../styles/reset'
import { InputProps } from './InputProps'

export interface CheckboxProps extends InputProps {
  checked?: boolean
}

const InternalCheckbox: React.SFC<CheckboxProps> = ({ ...props }) => {
  return <tag.input type="checkbox" {...props} />
}

export const Checkbox = styled<CheckboxProps>(InternalCheckbox)`
  ${reset};
`
