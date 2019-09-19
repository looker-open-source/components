import omit from 'lodash/omit'
import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../../../Box'
import { InputProps } from '../InputProps'

export interface RadioProps
  extends Omit<BoxProps<HTMLInputElement>, 'as'>,
    InputProps {
  /**
   * Determines if the radio button is selected or not.
   */
  checked?: boolean
}

type ComponentType = FunctionComponent<RadioProps>
type StyledComponentType = StyledComponent<ComponentType, RadioProps>

const InternalRadio: ComponentType = props => {
  const type = { type: 'radio' }
  return <Box as="input" {...omit(props, ['validationType'])} {...type} />
}

const RadioFactory = React.forwardRef<StyledComponentType, RadioProps>(
  (props: RadioProps, ref: Ref<StyledComponentType>) => (
    <InternalRadio ref={ref} {...props} />
  )
)

/** @component */
export const Radio = styled<ComponentType>(RadioFactory)``
