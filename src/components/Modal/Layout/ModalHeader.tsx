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
  /*
   * @TODO / Note: When chrome supports `flex-basis: fit-content` minHeight can be removed
   */

  return (
    <Box
      alignItems="center"
      display="flex"
      flexBasis="fit-content"
      flexDirection="row"
      is="header"
      minHeight="4.75rem"
      p="large"
      {...props}
    >
      <Box mr="xlarge">{children}</Box>
      <Button ml="auto" p="none" variant="transparent" onClick={closeModal}>
        <Icon name="Close" size="1.25rem" />
      </Button>
    </Box>
  )
}

export const ModalHeader = withModal(Internal)
