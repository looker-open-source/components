import * as React from 'react'
import { palette, shadows } from '../../style'
import { radii } from '../../style/radii'
import { CustomizableAttributes } from '../../types/attributes'
import { ModalSurfaceStyleProps } from '../Modal'
import {
  Overlay,
  OverlayContentProps,
  OverlayInteractiveProps,
  OverlaySurface,
} from './'

export interface MenuOverlayProps extends OverlayInteractiveProps {
  content: React.ReactNode
  backdrop?: {
    top?: string
    left?: string
    bottom?: string
    right?: string
  }
}

export const MenuOverlay: React.SFC<MenuOverlayProps> = ({
  content,
  children,
  backdrop,
  ...overlayProps
}) => {
  const backdropStyles = {
    backgroundColor: 'transparent',
    cursor: 'default',
    ...backdrop,
  }

  const surface = (props: OverlayContentProps) => {
    return (
      <OverlaySurface
        lockWindow={true}
        {...props}
        {...CustomizableMenuOverlayAttributes.surface}
      >
        {content}
      </OverlaySurface>
    )
  }

  return (
    <Overlay render={surface} backdropStyles={backdropStyles} {...overlayProps}>
      {children}
    </Overlay>
  )
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
