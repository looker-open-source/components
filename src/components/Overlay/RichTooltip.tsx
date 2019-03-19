import * as React from 'react'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { ManagedModalProps, ModalSurfaceStyleProps } from '../Modal'
import {
  ModalHoverManager,
  ModalHoverManagerProps,
} from '../Modal/ModalHoverManager'
import {
  OverlayContentProps,
  OverlayHover,
  OverlayInteractiveProps,
  OverlaySurface,
} from './'

const RichTooltipInternal: React.SFC<OverlayInteractiveProps> = ({
  children,
  ...overlayProps
}) => (
  <OverlayHover {...overlayProps}>
    {(props: OverlayContentProps) => (
      <OverlaySurface {...props} {...CustomizableRichTooltipAttributes.surface}>
        {children}
      </OverlaySurface>
    )}
  </OverlayHover>
)

export class RichTooltip extends ModalHoverManager<ModalHoverManagerProps> {
  protected renderModal(content: React.ReactNode, props: ManagedModalProps) {
    return this.triggerRef ? (
      <RichTooltipInternal
        isOpen={this.state.isOpen}
        triggerRef={this.triggerRef}
        onClose={this.close}
        {...props}
      >
        {content}
      </RichTooltipInternal>
    ) : null
  }
}

export interface CustomizableRichTooltipAttributes
  extends CustomizableAttributes {
  surface: ModalSurfaceStyleProps
}

export const CustomizableRichTooltipAttributes: CustomizableRichTooltipAttributes = {
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
