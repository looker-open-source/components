import React from 'react'
import { ManagedModalProps } from '../Modal'
import { ModalManager } from '../ModalManager'
import { Dialog } from '.'

export class DialogManager extends ModalManager {
  protected renderModal(content: JSX.Element, props: ManagedModalProps) {
    return (
      <Dialog isOpen={this.state.isOpen} onClose={this.close} {...props}>
        {content}
      </Dialog>
    )
  }
}
