/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import * as MaterialIcons from '@styled-icons/material'
import React from 'react'
import { Button } from '../../../../Button'
import { Icon } from '../../../../Icon'
import { Space, SpaceVertical } from '../../../../Layout'
import { Text } from '../../../../Text'
import { Tooltip } from '../../../../Tooltip'
import { useToggle } from '../../../../utils'
import { FieldText } from '../..'

export default function BeforeAfterValidation() {
  const { value, toggle } = useToggle(true)
  const validation = value
    ? { validationMessage: { message: 'Oops!', type: 'error' as const } }
    : {}
  return (
    <SpaceVertical align="start">
      <Button onClick={toggle}>Toggle error state</Button>
      <Space>
        <FieldText
          label="iconBefore"
          iconBefore={<MaterialIcons.Favorite />}
          {...validation}
        />
        <FieldText
          label="iconAfter"
          iconAfter={<MaterialIcons.AccountCircle />}
          {...validation}
        />
        <FieldText label="before string" before="$" {...validation} />
        <FieldText label="after string" after="%" {...validation} />
        <FieldText
          label="before &amp; after"
          before={
            <Tooltip content="Some very important info">
              <Icon
                icon={<MaterialIcons.AddAlert />}
                size="small"
                style={{ cursor: 'default' }}
              />
            </Tooltip>
          }
          after={
            <Text fontSize="small" color={value ? 'critical' : 'info'}>
              Helper text
            </Text>
          }
          {...validation}
        />
      </Space>
    </SpaceVertical>
  )
}
