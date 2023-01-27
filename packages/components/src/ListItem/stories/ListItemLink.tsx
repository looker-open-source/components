/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { ListItem } from '..'

export default function Link() {
  return (
    <ListItem itemRole="link" href="https://google.com" target="_blank">
      ListItem that links to Google
    </ListItem>
  )
}
