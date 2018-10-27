import * as React from 'react'
import { OverlayContentProps } from './Overlay'
import { OverlayBubble, OverlayBubbleStyleProps } from './OverlayBubble'

export const overlayBubbleWithContent = (
  content: React.ReactNode,
  overlayBubbleStyleProps: OverlayBubbleStyleProps
) => {
  return ({ ...props }: OverlayContentProps) => (
    <OverlayBubble {...{ ...overlayBubbleStyleProps, ...props }}>
      {content}
    </OverlayBubble>
  )
}
