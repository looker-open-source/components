/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react'
import { Close } from '@styled-icons/material/Close'
import styled from 'styled-components'
import type { IconButtonProps } from '../Button'
import { IconButton } from '../Button'
import { DialogContext } from '../Dialog'
import { useTranslation } from '../utils'

export type ModalHeaderCloseButtonProps = Pick<IconButtonProps, 'size'>

const ModalHeaderCloseButtonLayout = ({
  size = 'medium',
}: ModalHeaderCloseButtonProps) => {
  const { t } = useTranslation('ModalHeaderCloseButton')
  const { busy, closeModal, id } = useContext(DialogContext)
  return (
    <IconButton
      id={id ? `${id}-iconButton` : undefined}
      size={size}
      onClick={closeModal}
      label={t('Close')}
      icon={<Close />}
      data-notooltip={busy || undefined}
    />
  )
}

export const ModalHeaderCloseButton = styled(
  ModalHeaderCloseButtonLayout
)<ModalHeaderCloseButtonProps>``
