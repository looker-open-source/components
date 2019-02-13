import * as React from 'react'
import { palette, shadows } from '../../style'
import { radii } from '../../style/radii'
import {
  Overlay,
  OverlayBubble,
  OverlayBubbleStyleProps,
  OverlayContentProps,
  OverlayInteractiveProps,
} from './'

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
  const backdropStyles = {
    backgroundColor: 'transparent',
    bottom: backdropBottom,
    cursor: 'default',
    left: backdropLeft,
    right: backdropRight,
    top: backdropTop,
  }

  const surface = (props: OverlayContentProps) => {
    return (
      <OverlayBubble lockWindow={true} {...props} {...menuOverlayStyle}>
        {content}
      </OverlayBubble>
    )
  }

  return (
    <Overlay render={surface} backdropStyles={backdropStyles} {...overlayProps}>
      {children}
    </Overlay>
  )
}
