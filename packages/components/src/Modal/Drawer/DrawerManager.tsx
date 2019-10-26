import React, { ReactNode } from 'react'
import { ManagedModalProps } from '../Modal'
import { ModalManager } from '../ModalManager'
import { Drawer } from '.'

export class DrawerManager extends ModalManager {
  protected renderModal(content: ReactNode, props: ManagedModalProps) {
    return (
      <Drawer isOpen={this.state.isOpen} onClose={this.close} {...props}>
        {content}
      </Drawer>
    )
  }
}
