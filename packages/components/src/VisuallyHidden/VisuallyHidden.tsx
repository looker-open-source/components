import { FunctionComponent } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../Layout/Box'

type VisuallyHiddenComponentType = FunctionComponent<BoxProps<HTMLElement>>
type StyledVisuallyHiddenComponentType = StyledComponent<
  VisuallyHiddenComponentType,
  BoxProps<HTMLElement>
>

/** @component */
export const VisuallyHidden: StyledVisuallyHiddenComponentType = styled<
  StyledVisuallyHiddenComponentType
>(Box)`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`
