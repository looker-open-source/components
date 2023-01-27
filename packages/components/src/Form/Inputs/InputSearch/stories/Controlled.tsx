/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputSearch } from '..'

export default function Controlled() {
  const [keyword, setKeyword] = useState('Default Value')

  return (
    <InputSearch
      placeholder="Type your search"
      summary={
        keyword.length > 0 ? `You typed ${keyword.length} characters` : ''
      }
      value={keyword}
      onChange={setKeyword}
    />
  )
}
