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

// Omit<T, K> is built in to TypeScript 3.5, delete next line when we upgrade
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type Childless<T extends JSX.ElementChildrenAttribute> = Omit<T, 'children'>
// h/t https://stackoverflow.com/q/52702461
// prettier-ignore
type Rename<T, K extends keyof T, N extends string> =
  Pick<T, Exclude<keyof T, K>> & { [P in N]: T[K] }

interface TooltipInternalProps extends Childless<OverlayHoverProps> {
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

export type TooltipProps = TooltipInternalProps &
  Rename<
    Pick<OverlayHoverManagerProps, 'isOpen' | 'wrappedComponent'>,
    'wrappedComponent',
    'children'
  >

export const Tooltip: React.FC<TooltipProps> = ({
  isOpen,
  children,
  ...tooltipInternalProps
}) => (
  <OverlayHoverManager isOpen={isOpen} wrappedComponent={children}>
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
