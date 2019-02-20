import * as React from 'react'
import { createPortal } from 'react-dom'
import { Box } from '../Box'
import { CustomizableModalAttributes } from './Modal'
import { getModalRoot } from './modalRoot'

export interface ModalPortalProps {
  innerRef?: React.RefObject<HTMLElement>
}

class ModalPortalInternal extends React.Component<ModalPortalProps> {
  private el: HTMLElement
  private modalRoot?: HTMLElement

  constructor(props: ModalPortalProps) {
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
        position="fixed"
        top="0"
        bottom="0"
        left="0"
        right="0"
        innerRef={this.props.innerRef}
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex={CustomizableModalAttributes.zIndex}
      >
        {this.props.children}
      </Box>
    )

    return createPortal(content, this.el)
  }
}

export const ModalPortal = React.forwardRef((props: ModalPortalProps, ref) => (
  <ModalPortalInternal
    innerRef={ref as React.RefObject<HTMLElement>}
    {...props}
  />
))
