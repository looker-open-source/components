/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import { IconButton } from '@looker/components'
import { Add, Close } from '@styled-icons/material'
import { useTranslation } from 'react-i18next'
import type { FC, MouseEvent } from 'react'
import React from 'react'

interface AddRemoveButtonsProps {
  onAdd: (e: MouseEvent) => void
  onRemove: (e: MouseEvent) => void
  showAdd: boolean
  showRemove: boolean
}

export const AddRemoveButtons: FC<AddRemoveButtonsProps> = ({
  onAdd,
  onRemove,
  showAdd,
  showRemove,
}) => {
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
