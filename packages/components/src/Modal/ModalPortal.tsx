import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { CustomizableModalAttributes } from './Modal'
import { getModalRoot } from './modalRoot'

const hasParentMatchingSelector = (target: HTMLElement, selector: string) => {
  return [...Array.from(document.querySelectorAll(selector))].some(
    el => el !== target && el.contains(target)
  )
}

export interface ModalPortalProps {
  portalRef?: React.RefObject<HTMLDivElement>
}

export class ModalPortal extends Component<ModalPortalProps> {
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

  public render(): any {
    const content = (
      <InvisiBox
        ref={this.props.portalRef}
        zIndex={CustomizableModalAttributes.zIndex}
      >
        {this.props.children}
      </InvisiBox>
    )

    return createPortal(content, this.el)
  }
}

const InvisiBox = styled.div<{ zIndex?: number }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  align-items: center;
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: ${props => props.zIndex};

  * {
    pointer-events: auto;
  }
`
