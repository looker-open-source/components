/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { FieldDate } from '..'
import { Button } from '../../../../Button'
import { Popover, PopoverContent } from '../../../../Popover'

export default function Controlled() {
  const [controlledDate, setControlledDate] = useState<Date>()

  function handleNextWeekClick() {
    setControlledDate(new Date())
  }

  return (
    <Popover
      content={
        <PopoverContent>
          <Button onClick={handleNextWeekClick}>Today</Button>
          <FieldDate value={controlledDate} onChange={setControlledDate} />
        </PopoverContent>
      }
    >
      <Button>
        {controlledDate ? controlledDate.toString() : 'Select Dates'}
      </Button>
    </Popover>
  )
}
