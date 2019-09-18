import React from 'react'
import { Button } from '../src/components/Button'
import { Tooltip } from '../src/components/Tooltip'

export const TooltipDemo: React.FC<{}> = () => (
  <Tooltip content="More things you should know...">
    {(eventHandlers, ref) => (
      <Button ref={ref} {...eventHandlers}>
        Hover for Tooltip
      </Button>
    )}
  </Tooltip>
)
