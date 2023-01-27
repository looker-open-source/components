/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { Button, Space } from '../../../../../'
import type { ComboboxProps } from '../..'
import { Combobox, ComboboxOption, ComboboxList } from '../..'
import { ComboboxInput } from '../../ComboboxInput'

export default function LoadingState(props: ComboboxProps) {
  const { width = 300, ...restProps } = props

  const [loading, setLoading] = useState(true)

  const handleLoadingStart = () => {
    setLoading(true)
  }

  const handleLoadingComplete = () => {
    setLoading(false)
  }

  return (
    <Space>
      {loading ? (
        <Button onClick={handleLoadingComplete}>Stop Loading</Button>
      ) : (
        <Button onClick={handleLoadingStart}>Start Loading</Button>
      )}

      <Combobox
        width={width}
        {...restProps}
        value={loading ? { value: '' } : undefined}
      >
        <ComboboxInput />
        <ComboboxList>
          {loading ? (
            <ComboboxOption value="Loading..." />
          ) : (
            <>
              <ComboboxOption value="Apples" />
              <ComboboxOption value="Oranges" />
            </>
          )}
        </ComboboxList>
      </Combobox>
    </Space>
  )
}
