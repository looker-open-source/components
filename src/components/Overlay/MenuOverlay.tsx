import * as React from 'react'
import { palette, shadows } from '../../style'
import { radii } from '../../style/radii'
import { CustomizableAttributes } from '../../types/attributes'
import { ManagedModalProps, ModalSurfaceStyleProps } from '../Modal'
import { ModalManager, ModalManagerProps } from '../Modal/ModalManager'
import {
  Overlay,
  OverlayChildrenProps,
  OverlayInteractiveProps,
  OverlaySurface,
} from './'

export interface MenuOverlayInternalProps extends OverlayInteractiveProps {
  arrow?: boolean
  backdropOffset?: {
    top?: string
    left?: string
    bottom?: string
    right?: string
  }
}

const MenuOverlayInternal: React.FC<MenuOverlayInternalProps> = ({
  arrow = true,
  children,
  backdropOffset,
  ...overlayProps
}) => {
  const backdrop = {
    background: 'transparent',
    ...backdropOffset,
  }

  return (
    <Overlay
      backdrop={backdrop}
      experimentalModifiers={{ flip: { enabled: false } }}
      {...overlayProps}
    >
      {(props: OverlayChildrenProps) => (
        <OverlaySurface
          arrow={arrow}
          {...props}
          {...CustomizableMenuOverlayAttributes.surface}
        >
          {children}
        </OverlaySurface>
      )}
    </Overlay>
  )
}

export interface MenuOverlayProps extends ModalManagerProps {
  arrow?: boolean
  backdropOffset?: {
    top?: string
    left?: string
    bottom?: string
    right?: string
  }
}

export class MenuOverlay extends ModalManager<MenuOverlayProps> {
  constructor(props: MenuOverlayProps) {
    super(props)

    this.checkClickOrigin = this.checkClickOrigin.bind(this)
  }

  public open() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    window.addEventListener('keydown', this.handleEscapePress)
    document.addEventListener('mousedown', this.checkClickOrigin)
  }

  public checkClickOrigin(event: MouseEvent) {
    if (
      this.portalRef.current &&
      this.portalRef.current.contains(event.target as Node)
    ) {
      return
    }

    if (this.triggerRef.current) {
      if (!this.triggerRef.current.contains(event.target as Node)) {
        this.close()
      }
    }
  }

  protected renderModal(content: string, props: ManagedModalProps) {
    return (
      <MenuOverlayInternal
        isOpen={this.state.isOpen}
        triggerRef={this.triggerRef}
        onClose={this.close}
        {...props}
      >
        {content}
      </MenuOverlayInternal>
    )
  }
}

export interface CustomizableMenuOverlayAttributes
  extends CustomizableAttributes {
  surface: ModalSurfaceStyleProps
}

export const CustomizableMenuOverlayAttributes: CustomizableMenuOverlayAttributes = {
  surface: {
    backgroundColor: palette.white,
    border: '1px solid',
    borderColor: palette.charcoal200,
    borderRadius: radii.medium,
    boxShadow: shadows[3],
    color: palette.charcoal900,
  },
}
