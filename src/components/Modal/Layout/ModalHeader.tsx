import * as React from 'react'

import { Box, BoxProps } from '../../Box'
import { Button } from '../../Button'
import { Icon } from '../../Icon'

import { ModalContextProps } from '../ModalContext'
import { withModal } from '../withModal'

export interface ModalHeaderProps
  extends ModalContextProps,
    BoxProps<HTMLDivElement> {
  /**
   * Content that will be placed inside the DialogHeader
   * @required
   */
  children: React.ReactNode
}

const Internal: React.SFC<ModalHeaderProps> = ({
  children,
  close,
  ...props
}) => {
  return (
    <Box is="header" display="flex" flexDirection="row" {...props}>
      <Box p="large">{children}</Box>
      <Box p="large" ml="auto">
        <Button
          onClick={close}
          size="large"
          style={{ padding: 0, lineHeight: 1 }}
          variant="transparent"
        >
          <Icon name="Close" />
        </Button>
      </Box>
    </Box>
  )
}

export const ModalHeader = withModal(Internal)
