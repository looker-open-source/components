import tag from 'clean-tag'
import * as React from 'react'
import styled from '../../../styled_components'

export interface CheckboxProps {
  checked?: boolean
  name?: string
  disabled?: boolean
  alt?: string
  id?: string
}

const InternalCheckbox: React.SFC<CheckboxProps> = ({ ...props }) => {
  return <tag.input type="checkbox" {...props} />
}

export const Checkbox = styled<CheckboxProps>(InternalCheckbox)`
  padding: 0 ${props => props.theme.spacing.s};
`
