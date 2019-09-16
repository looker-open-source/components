import { FunctionComponent } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../Box'

export type VisuallyHiddenComponentType = FunctionComponent<
  BoxProps<HTMLElement>
>
export type StyledVisuallyHiddenComponentType = StyledComponent<
  VisuallyHiddenComponentType,
  BoxProps<HTMLElement>
>

/** @component */
export const VisuallyHidden: StyledVisuallyHiddenComponentType = styled<
  VisuallyHiddenComponentType
>(Box)`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`
