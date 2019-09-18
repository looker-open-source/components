import React from 'react'
import { Modal, ModalProps } from '../Modal'
import { DialogSurface } from './DialogSurface'

export interface DialogProps extends ModalProps {
  /**
   * Content that will be placed inside the Dialog
   * @required
   */
  children: React.ReactNode
}

export const Dialog: React.FC<DialogProps> = ({
  width,
  children,
  surfaceStyles,
  ...props
}) => {
  const surface = (animationState: string) => (
    <DialogSurface
      style={surfaceStyles}
      className={animationState}
      width={width}
    >
      {children}
    </DialogSurface>
  )

  return <Modal {...props} render={surface} />
}
