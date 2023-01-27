/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { Button } from '../../../../Button'
import type { RangeModifier } from '../../../../Calendar'
import { Space, SpaceVertical } from '../../../../Layout'
import { InputDateRange } from '../InputDateRange'

export default function ExternalUpdates() {
  const [value, setValue] = useState<RangeModifier>({
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019'),
  })

  return (
    <SpaceVertical>
      <Space>
        <Button
          onClick={() =>
            setValue({
              from: new Date('January 1, 2012'),
              to: new Date('February 15, 2012'),
            })
          }
        >
          January 1 - February 15, 2012
        </Button>
        <Button
          onClick={() => setValue({ from: new Date('February 9, 2021') })}
        >
          From: February 9, 2021
        </Button>
        <Button onClick={() => setValue({ to: new Date('February 9, 2021') })}>
          To: February 9, 2021
        </Button>
        <Button onClick={() => setValue({})}>Clear</Button>
      </Space>
      <InputDateRange value={value} onChange={setValue} />
    </SpaceVertical>
  )
}
