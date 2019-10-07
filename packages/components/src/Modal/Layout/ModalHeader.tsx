import {
  SpaceProps,
  space,
  CompatibleHTMLProps,
  reset,
} from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import styled from 'styled-components'
import React, { FC, useContext } from 'react'

import { Box } from '../../Layout/Box'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { ModalContext } from '../ModalContext'

export interface ModalHeaderProps
  extends SpaceProps,
    CompatibleHTMLProps<HTMLElement> {
  /**
   * Specify an icon to be used for close. Defaults to `Close`
   */
  closeIcon?: IconNames
}

export const ModalHeader: FC<ModalHeaderProps> = ({
  children,
  closeIcon = 'Close',
  ...props
}) => {
  const { closeModal } = useContext(ModalContext)

  return (
    <Header {...props}>
      <Box mr="xlarge">{children}</Box>
      <Button
        tabIndex={-1}
        ml="auto"
        p="none"
        variant="transparent"
        color="neutral"
        onClick={closeModal}
      >
        <Icon name={closeIcon} size="1.25rem" />
      </Button>
    </Header>
  )
}

const Header = styled.header<SpaceProps>`
  ${reset}
  ${space}

  display: flex;
  align-items: center;
  flex-direction: row;
`

Header.defaultProps = {
  p: 'large',
  px: 'xlarge',
}
