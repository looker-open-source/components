/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { InputText } from '../InputText'

export default function ReadOnly() {
  return <InputText value="You can't change me." readOnly />
}
