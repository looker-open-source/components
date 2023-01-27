/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { useToggle } from '../../../../utils'
import { Aside, FieldToggleSwitch, Space } from '../../../..'
import type { AsideProps } from '../../..'

export default function AsideCollapse(props: AsideProps) {
  const { value, toggle } = useToggle(false)

  return (
    <Space>
      <Aside collapse={!value} {...props}>
        Aside content
      </Aside>
      <FieldToggleSwitch
        m="small"
        label="Show Aside"
        onChange={toggle}
        on={value}
      />
    </Space>
  )
}
