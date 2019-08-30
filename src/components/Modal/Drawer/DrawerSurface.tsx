import React, { FunctionComponent } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { ModalSurface, ModalSurfaceProps } from '../ModalSurface'

export type DrawerSurfaceComponentType = FunctionComponent<ModalSurfaceProps>
export type StyledDrawerSurfaceComponentType = StyledComponent<
  DrawerSurfaceComponentType,
  ModalSurfaceProps
>

export const DrawerSurface: DrawerSurfaceComponentType = ({
  children,
  width = '30rem',
  anchor = 'right',
  ...props
}) => {
  return (
    <Surface
      height="100%"
      maxWidth="100%"
      width={width}
      anchor={anchor}
      {...props}
    >
      {children}
    </Surface>
  )
}

// Shadow here is designed to match theme.shadows[3] but with a single left-side shadow

const Surface: StyledDrawerSurfaceComponentType = styled<
  DrawerSurfaceComponentType
>(ModalSurface)`
  box-shadow: -18px 0 18px -18px rgba(0, 0, 0, 0.12);

  &.entering,
  &.exiting {
    opacity: 0.01;
    transform: translateX(100%);
  }

  &.exited {
    opacity: 1;
    transform: translateX(0%);
  }
`
