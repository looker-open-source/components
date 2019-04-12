import * as React from 'react'
import { Dialog } from '.'
import { ManagedModalProps } from '../Modal'
import { ModalManager, ModalManagerProps } from '../ModalManager'

export class DialogManager extends ModalManager<ModalManagerProps> {
  protected renderModal(content: React.ReactNode, props: ManagedModalProps) {
    return (
      <Dialog isOpen={this.state.isOpen} onClose={this.close} {...props}>
        {content}
      </Dialog>
    )
  }
}
