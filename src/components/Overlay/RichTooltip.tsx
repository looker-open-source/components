import * as React from 'react'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { ModalSurfaceStyleProps } from '../Modal'
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

interface RichTooltipInternalProps extends Omit<OverlayHoverProps, 'children'> {
  content: React.ReactNode
}

const RichTooltipInternal: React.FC<RichTooltipInternalProps> = ({
  content,
  ...overlayHoverProps
}) => (
  <OverlayHover {...overlayHoverProps}>
    {(overlayChildrenProps: OverlayChildrenProps) => (
      <OverlaySurface
        {...overlayChildrenProps}
        {...CustomizableRichTooltipAttributes.surface}
      >
        {content}
      </OverlaySurface>
    )}
  </OverlayHover>
)

export interface RichTooltipProps
  extends RichTooltipInternalProps,
    Pick<OverlayHoverManagerProps, '__initializeOpenForLensTests'> {
  children: OverlayHoverManagerProps['wrappedComponent']
}

export const RichTooltip: React.FC<RichTooltipProps> = ({
  __initializeOpenForLensTests,
  children,
  content,
  placement,
  portalRef,
  usePortal,
  ...richTooltipInternalProps
}) => (
  <OverlayHoverManager
    __initializeOpenForLensTests={__initializeOpenForLensTests}
    wrappedComponent={children}
  >
    {managedHoverOverlayProps =>
      managedHoverOverlayProps.triggerRef ? (
        <RichTooltipInternal
          content={content}
          placement={placement}
          portalRef={portalRef}
          usePortal={usePortal}
          {...richTooltipInternalProps}
          {...managedHoverOverlayProps}
        />
      ) : null
    }
  </OverlayHoverManager>
)

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
