import * as React from 'react'
import { Box, BoxProps } from '../../Box'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { ModalContextProps, withModal } from '../ModalContext'

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
  closeModal,
  ...props
}) => {
  return (
    <Box is="header" p="large" display="flex" flexDirection="row" {...props}>
      <Box mr="xlarge">{children}</Box>
      <Button
        ml="auto"
        alignSelf="end"
        onClick={closeModal}
        size="large"
        p="none"
        style={{ lineHeight: 1 }}
        variant="transparent"
      >
        <Icon name="Close" />
      </Button>
    </Box>
  )
}

export const ModalHeader = withModal(Internal)
