import { TextAlignProperty } from 'csstype'
import * as React from 'react'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { ModalSurfaceStyleProps } from '../Modal'
import { Paragraph } from '../Text'
import {
  OverlayChildrenProps,
  OverlayHover,
  OverlayHoverManager,
  OverlayHoverManagerProps,
  OverlayHoverProps,
  OverlaySurface,
} from './'

// Remove when we upgrade to TypeScript 3.5
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface TooltipInternalProps extends Omit<OverlayHoverProps, 'children'> {
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
  /**
   * Text to display in the tooltip
   * @required
   */
  content: string
}

const TooltipInternal: React.FC<TooltipInternalProps> = ({
  arrow = true,
  content,
  textAlign,
  maxWidth,
  width,
  ...overlayHoverProps
}) => {
  return (
    <OverlayHover {...overlayHoverProps}>
      {(overlayChildrenProps: OverlayChildrenProps) => (
        <OverlaySurface
          arrow={arrow}
          {...overlayChildrenProps}
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
            {content}
          </Paragraph>
        </OverlaySurface>
      )}
    </OverlayHover>
  )
}

export interface TooltipProps
  extends TooltipInternalProps,
    Pick<OverlayHoverManagerProps, '__initializeOpenForLensTests'> {
  children: OverlayHoverManagerProps['wrappedComponent']
}

export const Tooltip: React.FC<TooltipProps> = ({
  __initializeOpenForLensTests,
  children,
  ...tooltipInternalProps
}) => (
  <OverlayHoverManager
    __initializeOpenForLensTests={__initializeOpenForLensTests}
    wrappedComponent={children}
  >
    {managedHoverOverlayProps => (
      <TooltipInternal
        {...tooltipInternalProps}
        {...managedHoverOverlayProps}
      />
    )}
  </OverlayHoverManager>
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
