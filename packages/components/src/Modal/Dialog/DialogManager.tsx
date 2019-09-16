import * as React from 'react'
import { Dialog } from '.'
import { ManagedModalProps } from '../Modal'
import { ModalManager } from '../ModalManager'

export class DialogManager extends ModalManager {
  protected renderModal(content: JSX.Element, props: ManagedModalProps) {
    return (
      <Dialog isOpen={this.state.isOpen} onClose={this.close} {...props}>
        {content}
      </Dialog>
    )
  }
}
