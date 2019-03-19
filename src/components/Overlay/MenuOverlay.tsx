import * as React from 'react'
import { palette, shadows } from '../../style'
import { radii } from '../../style/radii'
import { CustomizableAttributes } from '../../types/attributes'
import { ManagedModalProps, ModalSurfaceStyleProps } from '../Modal'
import { ModalManager, ModalManagerProps } from '../Modal/ModalManager'
import {
  Overlay,
  OverlayContentProps,
  OverlayInteractiveProps,
  OverlaySurface,
} from './'

export interface MenuOverlayProps extends OverlayInteractiveProps {
  backdropOffset?: {
    top?: string
    left?: string
    bottom?: string
    right?: string
  }
}

const MenuOverlay: React.SFC<MenuOverlayProps> = ({
  children,
  backdropOffset,
  ...overlayProps
}) => {
  const backdropStyles = {
    backgroundColor: 'transparent',
    cursor: 'default',
    ...backdropOffset,
  }

  return (
    <Overlay backdropStyles={backdropStyles} {...overlayProps}>
      {(props: OverlayContentProps) => (
        <OverlaySurface
          lockWindow={true}
          {...props}
          {...CustomizableMenuOverlayAttributes.surface}
        >
          {children}
        </OverlaySurface>
      )}
    </Overlay>
  )
}

export class MenuOverlayManager extends ModalManager<ModalManagerProps> {
  protected renderModal(content: string, props: ManagedModalProps) {
    return (
      <MenuOverlay
        isOpen={this.state.isOpen}
        triggerRef={this.triggerRef}
        onClose={this.close}
        {...props}
      >
        {content}
      </MenuOverlay>
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
