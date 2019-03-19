import * as React from 'react'
import { Button } from '../src/components/Button'
import { Tooltip } from '../src/components/Overlay/Tooltip'

export const TooltipDemo: React.SFC<{}> = () => (
  <Tooltip content="More things you should know...">
    {(eventHandlers, ref) => (
      <Button innerRef={ref} {...eventHandlers}>
        Hover for Tooltip
      </Button>
    )}
  </Tooltip>
)
