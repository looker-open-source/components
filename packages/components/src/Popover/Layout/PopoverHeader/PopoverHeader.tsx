/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { DialogContext } from '../../../Dialog/DialogContext'
import { VisuallyHidden } from '../../../VisuallyHidden'
import type { ModalHeaderProps } from '../../../Modal'
import { ModalHeaderCloseButton, ModalHeader } from '../../../Modal'

type WithDetail = {
  detail?: ModalHeaderProps['detail']
  hideClose?: never
}

type WithHideClose = {
  detail?: never
  /**
   * Don't include the "Close" option
   * @default false
   */
  hideClose?: boolean
}

type DetailOptions = WithDetail | WithHideClose

export type PopoverHeaderProps = DetailOptions & {
  children: ReactNode
  /**
   * Make PopoverHeader visually hidden.
   * @default false
   */
  hidden?: boolean
}

const PopoverHeaderLayout = ({
  children,
  hideClose = false,
  detail,
  hidden = false,
  ...props
}: PopoverHeaderProps) => {
  const { id } = useContext(DialogContext)
  const headingId = id ? `${id}-heading` : undefined

  return hidden ? (
    <VisuallyHidden id={headingId}>{children}</VisuallyHidden>
  ) : (
    <ModalHeader
      detail={detail || (!hideClose && <ModalHeaderCloseButton size="small" />)}
      fontSize="small"
      fontWeight="medium"
      id={headingId}
      pl="large"
      pr="medium"
      py="small"
      {...props}
    >
      {children}
    </ModalHeader>
  )
}

export const PopoverHeader = styled(PopoverHeaderLayout)<ModalHeaderProps>``
