import React, { FC } from 'react'
import { Box } from '@looker/components'

import { ContentOverflow } from './ContentOverflow'
import { EdgeOverflow } from './EdgeOverflow'

export const PopoverExamples: FC = () => {
  return (
    <Box
      p="xxlarge"
      width="100%"
      position="relative"
      height="100%"
      bg="palette.purple200"
    >
      <EdgeOverflow top={0} left={0}>
        Top Left
      </EdgeOverflow>
      <EdgeOverflow top={0} right={0}>
        Top Right
      </EdgeOverflow>
      <EdgeOverflow bottom={0} left={0}>
        Bottom Left
      </EdgeOverflow>
      <EdgeOverflow bottom={0} right={0}>
        Bottom Right
      </EdgeOverflow>

      <ContentOverflow>
        Long popover content (placement ignore too)
      </ContentOverflow>
    </Box>
  )
}
