/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { Paragraph } from '../../../../'
import { InputChips } from '..'

export default function Validation() {
  const emailValidator =
    /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const [values, setValues] = useState<string[]>([])
  const [invalidValue, setInvalidValue] = useState<string[]>()
  const [duplicateValue, setDuplicateValue] = useState<string[]>()

  function handleChange(newValues: string[]) {
    setValues(newValues)
    setInvalidValue(undefined)
    setDuplicateValue(undefined)
  }
  function validate(valueToValidate: string) {
    return emailValidator.test(valueToValidate)
  }
  function handleInvalid(draftValue: string[]) {
    setInvalidValue(draftValue)
  }
  function handleDuplicate(duplicateValue: string[]) {
    setDuplicateValue(duplicateValue)
  }

  return (
    <>
      <InputChips
        placeholder="Enter email addresses"
        values={values}
        validate={validate}
        onChange={handleChange}
        onValidationFail={handleInvalid}
        onDuplicate={handleDuplicate}
        mb="u3"
      />
      {invalidValue && (
        <Paragraph>You entered an invalid email: {invalidValue}</Paragraph>
      )}
      {duplicateValue && (
        <Paragraph>{duplicateValue} has already been entered</Paragraph>
      )}
    </>
  )
}
