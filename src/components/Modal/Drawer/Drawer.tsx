import * as React from 'react'
import { Modal, ModalProps } from '../Modal'
import { DrawerSurface } from './DrawerSurface'

export interface DrawerProps extends ModalProps {
  /**
   * Specifying a width will force the DrawerSurface to be the lesser of the specified width or the viewport width.
   * You can also specify `auto` if you want the Drawer to auto-size to its contents.
   * @default auto
   */
  width?: string
  /**
   * Content that will be placed inside the Dialog
   * @required
   */
  content: JSX.Element | JSX.Element[]
}

export const Drawer: React.SFC<DrawerProps> = ({
  width,
  content,
  children,
  surfaceStyles,
  ...props
}) => {
  const surface = (className: string) => {
    return (
      <DrawerSurface style={surfaceStyles} className={className} width={width}>
        {content}
      </DrawerSurface>
    )
  }
  return (
    <Modal render={surface} {...props}>
      {children}
    </Modal>
  )
}
