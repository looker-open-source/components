import { TextAlignProperty } from 'csstype'
import { Placement } from 'popper.js'
import * as React from 'react'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { ModalSurfaceStyleProps } from '../Modal'
import {
  ModalHoverManager,
  ModalHoverManagerProps,
} from '../Modal/ModalHoverManager'
import { Paragraph } from '../Text'
import {
  OverlayChildrenProps,
  OverlayHover,
  OverlayInteractiveProps,
  OverlaySurface,
} from './'

// Remove when we upgrade to TypeScript 3.5
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface TooltipBaseProps {
  /**
   * Specify the maximum width before wrapping text.
   * @default 16rem
   */
  maxWidth?: string
  /**
   * Specify a fixed content width.
   * @default auto
   */
  width?: string
  /**
   * Specify the text aligment within tooltips.
   * @default center
   */
  textAlign?: TextAlignProperty
  /**
   * Display and arrow that points to the trigger element on popovers
   * @default true
   */
  arrow?: boolean
}

export interface TooltipInternalProps
  extends TooltipBaseProps,
    OverlayInteractiveProps {
  /**
   * Text to display in the tooltip
   * @required
   */
  children: React.ReactNode
}

const TooltipInternal: React.FC<TooltipInternalProps> = ({
  arrow = true,
  children,
  textAlign,
  maxWidth,
  width,
  ...overlayProps
}) => {
  return (
    <OverlayHover {...overlayProps}>
      {(props: OverlayChildrenProps) => (
        <OverlaySurface
          arrow={arrow}
          {...props}
          {...CustomizableTooltipAttributes.surface}
        >
          <Paragraph
            style={{ overflowWrap: 'anywhere', hyphens: 'auto' }}
            fontSize="xsmall"
            maxWidth={maxWidth || '16rem'}
            width={width || 'auto'}
            p="xsmall"
            m="none"
            textAlign={textAlign || 'center'}
          >
            {children}
          </Paragraph>
        </OverlaySurface>
      )}
    </OverlayHover>
  )
}

export interface TooltipProps
  extends TooltipBaseProps,
    Omit<ModalHoverManagerProps, 'renderModal'> {
  content: React.ReactNode
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

export const Tooltip: React.FC<TooltipProps> = ({ ...tooltipProps }) => (
  <ModalHoverManager
    // tslint:disable-next-line jsx-no-lambda
    renderModal={(content, modalProps, isOpen, triggerRef, onClose) => (
      <TooltipInternal
        isOpen={isOpen}
        triggerRef={triggerRef}
        onClose={onClose}
        {...modalProps}
      >
        {content}
      </TooltipInternal>
    )}
    {...tooltipProps}
  />
)

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
