/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Tooltip } from '../Tooltip'
import { Button } from '../../Button'

export default function ExampleRenderProp() {
  return (
    <Tooltip content="Example using render props exploded">
      {props => (
        <Button
          aria-describedby={props['aria-describedby']}
          className={props.className}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onMouseOut={props.onMouseOut}
          onMouseOver={props.onMouseOver}
          ref={props.ref}
        >
          Render Props Example
        </Button>
      )}
    </Tooltip>
  )
}
