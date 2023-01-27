/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { List } from '../'
import { ListItem, Space } from '../../'

const array3000 = Array.from(Array(3000), (_, i) => String(i))
export default function LongList() {
  return (
    <Space height={300}>
      <List width={200}>
        {array3000.map((item, i) => (
          <ListItem key={i}>
            {i > 0 && i % 30 === 0
              ? 'Longlonglonglonglonglonglonglonglonglonglong'
              : item}
          </ListItem>
        ))}
      </List>
      <div>
        Without width on List, windowing plus variable item widths causes the
        layout to be unstable.
      </div>
    </Space>
  )
}
