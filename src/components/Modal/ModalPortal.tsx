import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import * as React from 'react'
import { createPortal } from 'react-dom'
import { styled } from '../../style'
import { Box } from '../Box'
import { CustomizableModalAttributes } from './Modal'
import { getModalRoot } from './modalRoot'

export interface ModalPortalProps {
  portalRef?: React.RefObject<HTMLElement>
}

export class ModalPortal extends React.Component<ModalPortalProps> {
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
    disableBodyScroll(this.el, {
      allowTouchMove: (el: HTMLElement) =>
        hasParentMatchingSelector(el, '.surface-overflow'),
      reserveScrollBarGap: true,
    })
  }

  public componentWillUnmount() {
    enableBodyScroll(this.el)
    if (!this.modalRoot) return
    this.modalRoot.removeChild(this.el)
  }

  public render() {
    const content = (
      <InvisiBox
        position="fixed"
        top="0"
        bottom="0"
        left="0"
        right="0"
        innerRef={this.props.portalRef}
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ pointerEvents: 'none' }}
        zIndex={CustomizableModalAttributes.zIndex}
      >
        {this.props.children}
      </InvisiBox>
    )

    return createPortal(content, this.el)
  }
}

const hasParentMatchingSelector = (target: HTMLElement, selector: string) => {
  return [...Array.from(document.querySelectorAll(selector))].some(
    el => el !== target && el.contains(target)
  )
}

const InvisiBox = styled(Box)`
  * {
    pointer-events: auto;
  }
`
