/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react'
import styled from 'styled-components'
import { DialogContext } from '../../DialogContext'
import type { ModalHeaderProps } from '../../../Modal/ModalHeader'
import { ModalHeader } from '../../../Modal/ModalHeader'
import { ModalHeaderCloseButton } from '../../../Modal/ModalHeaderCloseButton'

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

export type DetailOptions = WithDetail | WithHideClose
export type DialogHeaderProps = DetailOptions & Omit<ModalHeaderProps, 'detail'>

const DialogHeaderLayout = ({
  children,
  hideClose,
  detail,
  ...props
}: DialogHeaderProps) => {
  const { id: dialogId } = useContext(DialogContext)
  const headingId = dialogId ? `${dialogId}-heading` : undefined

  const detailContent =
    detail || (detail === undefined && !hideClose && <ModalHeaderCloseButton />)

  return (
    <ModalHeader
      detail={detailContent}
      id={headingId}
      px="xlarge"
      py="large"
      {...props}
    >
      {children}
    </ModalHeader>
  )
}

export const DialogHeader = styled(DialogHeaderLayout)<DialogHeaderProps>``
