import * as React from 'react'
import { Box } from '../Box'
import { CustomizableModalAttributes } from '../Modal'

export interface OverlayTriggerProps {
  isOpen: boolean
  children?: React.ReactNode
  innerRef?: React.RefObject<HTMLElement>
  eventHandlers?: React.DOMAttributes<{}>
}

export const OverlayTriggerInternal: React.SFC<OverlayTriggerProps> = ({
  isOpen,
  children,
  innerRef,
  eventHandlers,
}) => {
  if (!children) return null

  return (
    <Box
      display="inline-block"
      position="relative"
      innerRef={innerRef}
      zIndex={isOpen ? CustomizableModalAttributes.zIndex + 1 : undefined}
      {...eventHandlers}
    >
      {children}
    </Box>
  )
}

export const OverlayTrigger = React.forwardRef(
  (props: OverlayTriggerProps, ref) => (
    <OverlayTriggerInternal
      innerRef={ref as React.RefObject<HTMLElement>}
      {...props}
    />
  )
)
