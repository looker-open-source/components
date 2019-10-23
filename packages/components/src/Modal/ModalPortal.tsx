import React, { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { useScrollLock } from '../utils/useScrollLock'
import { CustomizableModalAttributes } from './Modal'
import { getModalRoot } from './modalRoot'

export interface ModalPortalProps {
  portalRef?: React.RefObject<HTMLDivElement>
}

export const ModalPortal: FC<ModalPortalProps> = ({ portalRef, children }) => {
  const el = document.createElement('div')
  useScrollLock(false, portalRef)

  useEffect(() => {
    const modalRoot = getModalRoot()
    if (!modalRoot) return
    modalRoot.appendChild(el)

    return () => {
      modalRoot.removeChild(el)
    }
  }, [el])

  const content = (
    <InvisiBox ref={portalRef} zIndex={CustomizableModalAttributes.zIndex}>
      {children}
    </InvisiBox>
  )

  return createPortal(content, el)
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
