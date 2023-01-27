/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputDate } from '..'

export default () => {
  const [isValid, setIsValid] = React.useState(true)
  const handleChange = () => setIsValid(true)
  const handleValidationFail = () => setIsValid(false)
  return (
    <InputDate
      onChange={handleChange}
      onValidationFail={handleValidationFail}
      validationType={isValid ? undefined : 'error'}
    />
  )
}
