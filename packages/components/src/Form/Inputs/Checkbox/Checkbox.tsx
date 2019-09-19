import omit from 'lodash/omit'
import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../../../Box'
import { InputProps } from '../InputProps'

export interface CheckboxProps
  extends Omit<BoxProps<HTMLInputElement>, 'as'>,
    InputProps {
  /**
   * Determines if the checkbox is checked or not.
   */
  checked?: boolean
}

type ComponentType = FunctionComponent<CheckboxProps>
type StyledComponentType = StyledComponent<ComponentType, CheckboxProps>

const InternalCheckbox: ComponentType = props => {
  const type = { type: 'checkbox' }
  return <Box as="input" {...omit(props, ['validationType'])} {...type} />
}

const CheckboxFactory = React.forwardRef<StyledComponentType, CheckboxProps>(
  (props: CheckboxProps, ref: Ref<StyledComponentType>) => (
    <InternalCheckbox ref={ref} {...props} />
  )
)

/** @component */
export const Checkbox = styled<ComponentType>(CheckboxFactory)``
