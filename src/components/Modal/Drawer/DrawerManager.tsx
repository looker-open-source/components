import * as React from 'react'
import { Drawer } from '.'
import { ManagedModalProps } from '../Modal'
import { ModalManager, ModalManagerProps } from '../ModalManager'

export class DrawerManager extends ModalManager<ModalManagerProps> {
  protected renderModal(content: React.ReactNode, props: ManagedModalProps) {
    return (
      <Drawer isOpen={this.state.isOpen} onClose={this.close} {...props}>
        {content}
      </Drawer>
    )
  }
}
