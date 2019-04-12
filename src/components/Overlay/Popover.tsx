import * as React from 'react'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { ModalSurfaceStyleProps } from '../Modal'
import { ModalManager, ModalManagerProps } from '../Modal/ModalManager'
import { Overlay, OverlayInteractiveProps, OverlaySurface } from './'
import { OverlayChildrenProps } from './Overlay'

const PopoverInternal: React.SFC<OverlayInteractiveProps> = ({
  arrow,
  children,
  ...overlayProps
}) => (
  <Overlay pin={true} {...overlayProps}>
    {(props: OverlayChildrenProps) => (
      <OverlaySurface
        arrow={arrow}
        {...props}
        {...CustomizablePopoverAttributes.surface}
      >
        {children}
      </OverlaySurface>
    )}
  </Overlay>
)

export class Popover extends ModalManager<ModalManagerProps> {
  protected renderModal(content: React.ReactNode, props: ModalManagerProps) {
    return (
      <PopoverInternal
        isOpen={this.state.isOpen}
        triggerRef={this.triggerRef}
        onClose={this.close}
        {...props}
      >
        {content}
      </PopoverInternal>
    )
  }
}

export interface CustomizablePopoverAttributes extends CustomizableAttributes {
  surface: ModalSurfaceStyleProps
}

export const CustomizablePopoverAttributes: CustomizablePopoverAttributes = {
  surface: {
    animation: `${fadeIn} 0.2s linear`,
    backgroundColor: palette.white,
    border: '1px solid',
    borderColor: palette.charcoal200,
    borderRadius: 'medium',
    boxShadow: shadows[3],
    color: palette.charcoal900,
  },
}
