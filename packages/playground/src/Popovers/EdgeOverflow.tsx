import React, { FC } from 'react'
import { Box, Button, Popover, PopoverContent } from '@looker/components'

interface Props {
  top?: number
  left?: number
  bottom?: number
  right?: number
}

export const EdgeOverflow: FC<Props> = ({
  children,
  top,
  left,
  bottom,
  right,
}) => (
  <Box position="absolute" top={top} left={left} bottom={bottom} right={right}>
    <Popover
      content={
        <PopoverContent width="18rem" height="5rem">
          There's stuff here... it hits the edge{' '}
        </PopoverContent>
      }
    >
      {(onClick, ref, className) => (
        <Button
          iconAfter="ArrowDropDown"
          m="xxlarge"
          variant="outline"
          className={className}
          onClick={onClick}
          ref={ref}
        >
          {children}
        </Button>
      )}
    </Popover>
  </Box>
)
