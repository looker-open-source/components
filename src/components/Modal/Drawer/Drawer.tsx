import * as React from 'react'
import { Modal, ModalProps } from '../Modal'
import { DrawerSurface } from './DrawerSurface'

export interface DrawerProps extends ModalProps {
  /**
   * Content that will be placed inside the Dialog
   * @required
   */
  children: React.ReactNode
}

export const Drawer: React.SFC<DrawerProps> = ({
  width,
  children,
  surfaceStyles,
  ...props
}) => {
  const surface = (animationState: string) => {
    return (
      <DrawerSurface
        style={surfaceStyles}
        className={animationState}
        width={width}
      >
        {children}
      </DrawerSurface>
    )
  }
  return <Modal {...props} render={surface} />
}
