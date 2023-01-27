/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { SpaceVertical, Space } from '../../../../Layout'
import { Tooltip } from '../../../../Tooltip'
import { Span } from '../../../../Text'
import { InputText } from '../InputText'

export default function BeforeAfter() {
  return (
    <SpaceVertical>
      <Space>
        <InputText iconBefore={<MaterialIcons.Settings />} />
        <InputText iconAfter={<MaterialIcons.Done />} />
      </Space>
      <Space>
        <InputText before="$" />
        <InputText
          after={
            <Tooltip placement="top" content="Try again">
              <Span color="critical" fontSize="xsmall">
                Oops!
              </Span>
            </Tooltip>
          }
        />
      </Space>
    </SpaceVertical>
  )
}
