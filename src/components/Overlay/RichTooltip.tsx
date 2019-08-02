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

// Omit<T, K> is built in to TypeScript 3.5, delete next line when we upgrade
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type Childless<T extends JSX.ElementChildrenAttribute> = Omit<T, 'children'>
// h/t https://stackoverflow.com/q/52702461
// prettier-ignore
type Rename<T, K extends keyof T, N extends string> =
  Pick<T, Exclude<keyof T, K>> & { [P in N]: T[K] }

interface RichTooltipInternalProps extends Childless<OverlayHoverProps> {
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
    Rename<
      Pick<
        OverlayHoverManagerProps,
        '__initializeOpenForLensTests' | 'wrappedComponent'
      >,
      'wrappedComponent',
      'children'
    > {}

export const RichTooltip: React.FC<RichTooltipProps> = ({
  __initializeOpenForLensTests,
  children,
  ...richTooltipInternalProps
}) => (
  <OverlayHoverManager
    __initializeOpenForLensTests={__initializeOpenForLensTests}
    wrappedComponent={children}
  >
    {managedHoverOverlayProps =>
      managedHoverOverlayProps.triggerRef ? (
        <RichTooltipInternal
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
