/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useEffect, useState } from 'react'
import { FieldRangeSlider } from '../'
import { ButtonGroup, ButtonItem } from '../../../../'

export default function DashboardFilters() {
  const [renderSiblings, setRenderSiblings] = useState(false)
  const [buttonValue, setButtonValue] = useState(['CA'])

  useEffect(() => {
    const timeout = setTimeout(() => setRenderSiblings(true), 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {renderSiblings && (
        <ButtonGroup value={buttonValue} onChange={setButtonValue}>
          <ButtonItem value="CA">California</ButtonItem>
          <ButtonItem value="AK">Alaska</ButtonItem>
          <ButtonItem value="UT">Utah</ButtonItem>
        </ButtonGroup>
      )}
      <FieldRangeSlider />
    </>
  )
}
