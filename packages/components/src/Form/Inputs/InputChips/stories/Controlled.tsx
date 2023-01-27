/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputChips } from '../'
import { usePreviousValue, Paragraph, Button } from '../../../../'

export default function Controlled() {
  const [values, setValues] = useState<string[]>(['cheddar'])
  const previousInputValues = usePreviousValue<string[]>(values)
  const [inputValue, setInputValue] = useState('')
  const [renderUndoButton, setRenderUndoButton] = useState(false)
  function handleChange(newValues: string[]) {
    setValues(newValues)
    setRenderUndoButton(true)
  }
  function handleInputChange(newValue: string) {
    setInputValue(newValue)
  }
  function handleClear() {
    setRenderUndoButton(true)
  }
  function handleUndo() {
    if (typeof previousInputValues !== 'undefined') {
      setValues(previousInputValues)
    }
    setRenderUndoButton(false)
  }
  return (
    <>
      <InputChips
        placeholder="Enter multiple values"
        summary={
          values.length === 0
            ? `You've entered ${values.length} items`
            : undefined
        }
        values={values}
        inputValue={inputValue}
        onChange={handleChange}
        onInputChange={handleInputChange}
        onClear={handleClear}
        mb="u3"
      />
      {renderUndoButton && (
        <>
          You modified the values! <Button onClick={handleUndo}>Undo</Button>
        </>
      )}
      {inputValue !== '' && (
        <Paragraph>
          You are typing: <strong>{inputValue}</strong>
        </Paragraph>
      )}
    </>
  )
}
