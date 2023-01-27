/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { IconButton } from '@looker/components'
import { Add } from '@styled-icons/material/Add'
import { Close } from '@styled-icons/material/Close'
import { useTranslation } from '../../../../../utils'
import type { MouseEvent } from 'react'
import React from 'react'

interface AddRemoveButtonsProps {
  onAdd: (e: MouseEvent) => void
  onRemove: (e: MouseEvent) => void
  showAdd: boolean
  showRemove: boolean
}

export const AddRemoveButtons = ({
  onAdd,
  onRemove,
  showAdd,
  showRemove,
}: AddRemoveButtonsProps) => {
  const { t } = useTranslation('AddRemoveButtons')
  return (
    <>
      {showRemove && (
        <IconButton
          icon={<Close />}
          size="small"
          ml="xsmall"
          label={t('Remove')}
          outline={false}
          onClick={onRemove}
          style={{ marginTop: '2px' }}
        />
      )}

      {showAdd && (
        <IconButton
          icon={<Add />}
          size="small"
          ml="xsmall"
          label={t('Add')}
          outline={false}
          onClick={onAdd}
          style={{ marginTop: '2px' }}
        />
      )}
    </>
  )
}
