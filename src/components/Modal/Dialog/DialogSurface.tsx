import React, { FunctionComponent } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { CustomizableModalAttributes } from '../Modal'
import { ModalSurface, ModalSurfaceProps } from '../ModalSurface'

export type DialogSurfaceComponentType = FunctionComponent<ModalSurfaceProps>
export type StyledDialogSurfaceComponentType = StyledComponent<
  DialogSurfaceComponentType,
  ModalSurfaceProps
>

export const DialogSurface: DialogSurfaceComponentType = ({
  children,
  ...props
}) => {
  return (
    <Surface
      borderRadius={CustomizableModalAttributes.surface.borderRadius}
      maxHeight="90vh"
      maxWidth="100%"
      {...props}
    >
      {children}
    </Surface>
  )
}

const Surface: StyledDialogSurfaceComponentType = styled<
  DialogSurfaceComponentType
>(ModalSurface)`
  &.entering,
  &.exiting {
    opacity: 0.01;
    transform: translateY(100%);
  }

  &.exited {
    opacity: 1;
    transform: translateY(0%);
  }
`
