import { CustomizableAttributes } from '@looker/design-tokens'
import React, { forwardRef, Ref, useEffect, useRef, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { getModalRoot } from './modalRoot'

export interface CustomizableModalAttributes extends CustomizableAttributes {
  zIndex?: number
}

export const CustomizableModalAttributes: CustomizableModalAttributes = {
  backdrop: { backgroundColor: 'palette.charcoal200', opacity: 0.6 },
}

export const ModalPortal = forwardRef(
  ({ children }: { children: ReactNode }, ref: Ref<HTMLDivElement>) => {
    const el = useRef(document.createElement('div'))

    useEffect(() => {
      const modalRoot = getModalRoot()
      if (!modalRoot) return

      const elCurrent = el.current
      modalRoot.appendChild(elCurrent)

      return () => {
        modalRoot.removeChild(elCurrent)
      }
    }, [el])

    const content = (
      <InvisiBox ref={ref} zIndex={CustomizableModalAttributes.zIndex}>
        {children}
      </InvisiBox>
    )

    return createPortal(content, el.current)
  }
)

ModalPortal.displayName = 'ModalPortal'

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
