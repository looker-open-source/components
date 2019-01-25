import * as React from 'react'
import { OverlayContentProps } from './Overlay'
import { OverlayBubble, OverlayBubbleStyleProps } from './OverlayBubble'

export const overlayBubbleWithContent = (
  content: React.ReactNode,
  overlayBubbleStyleProps: OverlayBubbleStyleProps,
  focus?: boolean
) => {
  return ({ ...props }: OverlayContentProps) => (
    <OverlayBubble focus={focus} {...{ ...overlayBubbleStyleProps, ...props }}>
      {content}
    </OverlayBubble>
  )
}
