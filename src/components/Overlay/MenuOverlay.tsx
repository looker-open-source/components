import * as React from 'react'
import { palette, shadows } from '../../style'
import { radii } from '../../style/radii'
import { Overlay, OverlayInteractiveProps } from './Overlay'
import { OverlayBubbleStyleProps } from './OverlayBubble'
import { overlayBubbleWithContent } from './popover_utils'

export interface MenuOverlayProps extends OverlayInteractiveProps {
  content: React.ReactNode
  backdropTop?: string
  backdropLeft?: string
  backdropBottom?: string
  backdropRight?: string
}

const menuOverlayStyle: OverlayBubbleStyleProps = {
  backgroundColor: palette.white,
  border: '1px solid',
  borderColor: palette.charcoal200,
  borderRadius: radii.medium,
  boxShadow: shadows[3],
  color: palette.charcoal900,
}

export const MenuOverlay: React.SFC<MenuOverlayProps> = ({
  content,
  children,
  backdropBottom,
  backdropLeft,
  backdropRight,
  backdropTop,
  ...overlayProps
}) => {
  const backdropStyle = {
    backgroundColor: 'transparent',
    bottom: backdropBottom,
    cursor: 'default',
    left: backdropLeft,
    opacity: 0,
    right: backdropRight,
    top: backdropTop,
  }
  return (
    <Overlay
      trigger="click"
      overlayContentFactory={overlayBubbleWithContent(
        content,
        menuOverlayStyle,
        true
      )}
      backdropStyles={backdropStyle}
      {...overlayProps}
    >
      {children}
    </Overlay>
  )
}
