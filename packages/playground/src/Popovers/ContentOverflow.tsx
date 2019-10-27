import React, { FC } from 'react'
import {
  Box,
  ButtonOutline,
  Popover,
  PopoverContent,
  Paragraph,
} from 'looker-lens'

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
        <ButtonOutline
          iconAfter="ArrowDropDown"
          m="xxlarge"
          className={className}
          onClick={onClick}
          ref={ref}
        >
          {children}
        </ButtonOutline>
      )}
    </Popover>
  </Box>
)
