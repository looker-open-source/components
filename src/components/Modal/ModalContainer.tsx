import * as React from 'react'
import { createPortal } from 'react-dom'
import { Box } from '../Box'
import { CustomizableModalAttributes } from './Modal'

const getModalRoot = () => {
  const existing = document.getElementById('modal-root')

  if (existing) {
    return existing
  } else {
    const newElement = document.createElement('div')
    newElement.id = 'modal-root'
    document.body.appendChild(newElement)

    return newElement
  }
}

export class ModalContainer extends React.Component {
  private el: HTMLElement
  private modalRoot?: HTMLElement

  constructor(props: {}) {
    super(props)
    this.el = document.createElement('div')
  }

  public componentDidMount() {
    this.modalRoot = getModalRoot()
    if (!this.modalRoot) return
    this.modalRoot.appendChild(this.el)
  }

  public componentWillUnmount() {
    if (!this.modalRoot) return
    this.modalRoot.removeChild(this.el)
  }

  public render() {
    const content = (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex={CustomizableModalAttributes.zIndex || 1}
        position="fixed"
        bottom="0"
        top="0"
        left="0"
        right="0"
      >
        {this.props.children}
      </Box>
    )

    return createPortal(content, this.el)
  }
}
