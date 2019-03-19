import { TextAlignProperty } from 'csstype'
import { Placement } from 'popper.js'
import * as React from 'react'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { ManagedModalProps, ModalSurfaceStyleProps } from '../Modal'
import {
  ModalHoverManager,
  ModalHoverManagerProps,
} from '../Modal/ModalHoverManager'
import { Paragraph } from '../Text'
import {
  OverlayContentProps,
  OverlayHover,
  OverlayInteractiveProps,
  OverlaySurface,
} from './'

export interface TooltipBaseProps {
  /**
   * Specify the maximum width before wrapping text.
   * @default 16rem
   */
  maxWidth?: string
  /**
   * Specify the text aligment within tooltips.
   * @default center
   */
  textAlign?: TextAlignProperty
}

export interface TooltipInternalProps
  extends TooltipBaseProps,
    OverlayInteractiveProps {
  /**
   * Text to display in the tooltip
   * @required
   */
  children: string
}

const TooltipInternal: React.SFC<TooltipInternalProps> = ({
  children,
  textAlign = 'center' as TextAlignProperty,
  maxWidth = '16rem',
  ...overlayProps
}) => (
  <OverlayHover {...overlayProps}>
    {(props: OverlayContentProps) => (
      <OverlaySurface {...props} {...CustomizableTooltipAttributes.surface}>
        <Paragraph
          fontSize="xsmall"
          maxWidth={maxWidth}
          p="xsmall"
          m="none"
          textAlign={textAlign}
        >
          {children}
        </Paragraph>
      </OverlaySurface>
    )}
  </OverlayHover>
)

export interface TooltipProps extends TooltipBaseProps, ModalHoverManagerProps {
  content: string
  /**
   * Specify the maximum width before wrapping text.
   * @default 16rem
   */
  maxWidth?: string
  /**
   * Specify the text aligment within tooltips.
   * @default center
   */
  textAlign?: TextAlignProperty
  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popperjs. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   * @default bottom
   */
  placement?: Placement
}

export class Tooltip extends ModalHoverManager<TooltipProps> {
  protected renderModal(content: string, props: ManagedModalProps) {
    return (
      <TooltipInternal
        isOpen={this.state.isOpen}
        triggerRef={this.triggerRef}
        onClose={this.close}
        {...props}
      >
        {content}
      </TooltipInternal>
    )
  }
}

export interface CustomizableTooltipAttributes extends CustomizableAttributes {
  surface: ModalSurfaceStyleProps
}

export const CustomizableTooltipAttributes: CustomizableTooltipAttributes = {
  surface: {
    animation: `${fadeIn} 0.2s linear`,
    backgroundColor: palette.charcoal600,
    border: 'none',
    borderColor: 'none',
    borderRadius: 'medium',
    boxShadow: shadows[3],
    color: palette.charcoal000,
  },
}
