/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { FC } from 'react'
import React from 'react'
import { useTheme } from 'styled-components'
import { ArrowBack } from '@styled-icons/material-rounded/ArrowBack'
import { Heading } from '../Text'
import { useTranslation } from '../utils'
import { Space } from '../Layout'
import { IconButton } from '../Button'
import type { PanelBaseProps } from './types'

export const PanelHeader: FC<PanelBaseProps> = ({
  closeLabel,
  onClose,
  iconToggle = false,
  title,
}) => {
  const { t } = useTranslation('PanelHeader')
  const defaultLabel = t('CloseTitle', { title })

  const { space } = useTheme()

  return (
    <Space
      as="header"
      height={space.u10}
      px="large"
      gap="u3"
      mt="small"
      mb="1.5rem"
      flexShrink={0}
    >
      <IconButton
        icon={<ArrowBack />}
        label={closeLabel || defaultLabel}
        onClick={onClose}
        toggle={iconToggle}
        toggleBackground={iconToggle}
        shape="round"
        size="small"
      />
      <Heading fontSize="xlarge">{title}</Heading>
    </Space>
  )
}
