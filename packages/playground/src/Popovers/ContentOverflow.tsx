import React, { FC } from 'react'
import { Box, Button, Popover, PopoverContent, Paragraph } from 'looker-lens'

export const ContentOverflow: FC = ({ children }) => (
  <Box position="absolute" top="40%" left="40%">
    <Popover
      pin
      placement="bottom"
      content={
        <PopoverContent width="18rem">
          <Paragraph>Stuff above spacer</Paragraph>
          <Box height="60vh" bg="palette.blue100">
            Spacer
          </Box>
          <Paragraph>Content below spacer</Paragraph>
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
